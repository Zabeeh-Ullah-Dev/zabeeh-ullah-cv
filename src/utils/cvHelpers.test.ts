import test from 'node:test';
import assert from 'node:assert/strict';
import {
  computeAverageSgpa,
  countLiveDemos,
  filterProjectsByCategory,
  getActiveSectionId,
  isAtsResumeMode,
  isOgPreviewMode,
  resolveAssetUrl,
} from './cvHelpers';
import {
  CERTIFICATIONS,
  EDUCATION_RECORDS,
  FEATURED_PROJECTS,
  TECHNICAL_SKILL_CATEGORIES,
} from '../data/cvData';

test('getActiveSectionId identifies the active section at scroll positions', () => {
  const sections = [
    { id: 'summary', top: 0, height: 300 },
    { id: 'skills', top: 300, height: 400 },
    { id: 'projects', top: 700, height: 900 },
  ];

  assert.equal(getActiveSectionId(0, sections), 'summary');
  assert.equal(getActiveSectionId(200, sections), 'skills');
  assert.equal(getActiveSectionId(850, sections), 'projects');
  assert.equal(getActiveSectionId(0, []), '');
});

test('CV data includes all 4 flagship GitHub projects, 12 total projects, 5 certifications, and 6 skill categories', () => {
  assert.deepEqual(
    FEATURED_PROJECTS.slice(0, 4).map((p) => p.id),
    ['ctxscan', 'fixnear', 'chrono-stopwatch', 'academic-portfolio'],
  );
  assert.equal(FEATURED_PROJECTS.length, 12);
  assert.equal(countLiveDemos(FEATURED_PROJECTS), 9);
  assert.equal(CERTIFICATIONS.length, 5);
  assert.equal(TECHNICAL_SKILL_CATEGORIES.length, 6);
});

test('filterProjectsByCategory filters React/Node and JavaScript/Web projects accurately', () => {
  assert.equal(filterProjectsByCategory(FEATURED_PROJECTS, 'all').length, 12);
  assert.equal(
    filterProjectsByCategory(FEATURED_PROJECTS, 'react-node').length,
    4,
  );
  assert.equal(filterProjectsByCategory(FEATURED_PROJECTS, 'web').length, 8);
});

test('computeAverageSgpa averages semester SGPA values accurately', () => {
  const semesters = EDUCATION_RECORDS[0].semesters ?? [];
  assert.equal(computeAverageSgpa(semesters), '3.71');
  assert.equal(computeAverageSgpa([]), '0.00');
});

test('query mode helpers detect og-preview and ats-resume parameters', () => {
  assert.equal(isOgPreviewMode('?og-preview=1'), true);
  assert.equal(isOgPreviewMode(''), false);
  assert.equal(isAtsResumeMode('?ats-resume=1'), true);
  assert.equal(isAtsResumeMode('?ats-resume=0'), false);
  assert.equal(isAtsResumeMode(''), false);
});

test('resolveAssetUrl prefixes public assets cleanly for root, relative, and GitHub Pages bases', () => {
  assert.equal(resolveAssetUrl('assets/profile.jpg', '/'), '/assets/profile.jpg');
  assert.equal(resolveAssetUrl('/assets/profile.jpg', './'), './assets/profile.jpg');
  assert.equal(
    resolveAssetUrl('assets/Zabeeh-Ullah-ATS-Resume.pdf', '/zabeeh-ullah-cv/'),
    '/zabeeh-ullah-cv/assets/Zabeeh-Ullah-ATS-Resume.pdf',
  );
  assert.equal(
    resolveAssetUrl('/assets/preview.png', '/zabeeh-ullah-cv'),
    '/zabeeh-ullah-cv/assets/preview.png',
  );
});
