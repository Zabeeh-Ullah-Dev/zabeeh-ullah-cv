import test from 'node:test';
import assert from 'node:assert/strict';
import { createApp, isAllowedPublicPath } from './server.js';

test('isAllowedPublicPath allows public CV routes and blocks private/traversal paths', () => {
  assert.equal(isAllowedPublicPath('/'), true);
  assert.equal(isAllowedPublicPath('/index.html'), true);
  assert.equal(isAllowedPublicPath('/robots.txt'), true);
  assert.equal(isAllowedPublicPath('/sitemap.xml'), true);
  assert.equal(isAllowedPublicPath('/assets/profile.jpg'), true);
  assert.equal(isAllowedPublicPath('/assets/preview.png'), true);

  assert.equal(isAllowedPublicPath('/server.js'), false);
  assert.equal(isAllowedPublicPath('/package.json'), false);
  assert.equal(isAllowedPublicPath('/metadata.json'), false);
  assert.equal(isAllowedPublicPath('/assets/../server.js'), false);
  assert.equal(isAllowedPublicPath('/assets/%2e%2e/package.json'), false);
  assert.equal(isAllowedPublicPath('/.env'), false);
});

test('Express app serves CV HTML and assets while rejecting private files', async () => {
  const app = createApp();
  const server = await new Promise((resolve) => {
    const s = app.listen(0, '127.0.0.1', () => resolve(s));
  });

  try {
    const { port } = server.address();
    const base = `http://127.0.0.1:${port}`;

    const homeRes = await fetch(`${base}/`);
    assert.equal(homeRes.status, 200);
    const html = await homeRes.text();
    assert.match(html, /Zabeeh Ullah/);

    const imgRes = await fetch(`${base}/assets/profile.jpg`);
    assert.equal(imgRes.status, 200);
    assert.match(imgRes.headers.get('content-type') || '', /image\/jpeg/);

    const robotsRes = await fetch(`${base}/robots.txt`);
    assert.equal(robotsRes.status, 200);

    const sitemapRes = await fetch(`${base}/sitemap.xml`);
    assert.equal(sitemapRes.status, 200);

    const serverJsRes = await fetch(`${base}/server.js`);
    assert.equal(serverJsRes.status, 404);

    const pkgRes = await fetch(`${base}/package.json`);
    assert.equal(pkgRes.status, 404);

    const postRes = await fetch(`${base}/`, { method: 'POST' });
    assert.equal(postRes.status, 405);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
