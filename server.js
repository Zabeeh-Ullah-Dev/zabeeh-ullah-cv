import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ALLOWED_ROOT_FILES = new Set([
  '/index.html',
  '/robots.txt',
  '/sitemap.xml',
  '/googledac80e737ea6b563.html',
]);

export function isAllowedPublicPath(requestPath) {
  let normalized;
  try {
    normalized = path.posix.normalize(decodeURIComponent(requestPath));
  } catch {
    return false;
  }

  if (normalized === '/' || ALLOWED_ROOT_FILES.has(normalized)) {
    return true;
  }

  if (normalized.startsWith('/assets/') && !normalized.includes('/.')) {
    return true;
  }

  return false;
}

export function createApp() {
  const app = express();

  app.disable('x-powered-by');

  app.use((req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      return res.status(405).send('Method Not Allowed');
    }
    if (!isAllowedPublicPath(req.path)) {
      return res.status(404).send('Not Found');
    }
    next();
  });

  app.use('/assets', express.static(path.join(__dirname, 'assets'), { dotfiles: 'ignore' }));

  app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  for (const filePath of ALLOWED_ROOT_FILES) {
    const fileName = filePath.slice(1);
    app.get(filePath, (_req, res) => {
      res.sendFile(path.join(__dirname, fileName));
    });
  }

  return app;
}

const isDirectExecution =
  process.argv[1] && path.resolve(process.argv[1]) === __filename;

if (isDirectExecution) {
  const PORT = Number(process.env.PORT) || 3000;
  const HOST = '0.0.0.0';
  const app = createApp();

  app.listen(PORT, HOST, () => {
    console.log(`Static CV server running at http://${HOST}:${PORT}`);
  });
}
