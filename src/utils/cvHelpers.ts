import type { ProjectCategory, ProjectItem, SemesterGpa } from '../data/cvData';

export interface SectionMetrics {
  id: string;
  top: number;
  height: number;
}

export type ProjectFilterValue = 'all' | ProjectCategory;

export function getActiveSectionId(
  scrollY: number,
  sections: SectionMetrics[],
  offset = 150,
): string {
  if (sections.length === 0) {
    return '';
  }

  let activeId = sections[0].id;

  for (const section of sections) {
    const start = section.top - offset;
    if (scrollY >= start && scrollY < start + section.height) {
      activeId = section.id;
    }
  }

  return activeId;
}

export function filterProjectsByCategory(
  projects: ProjectItem[],
  filter: ProjectFilterValue,
): ProjectItem[] {
  if (filter === 'all') {
    return projects;
  }
  return projects.filter((project) => project.category === filter);
}

export function computeAverageSgpa(semesters: SemesterGpa[]): string {
  if (semesters.length === 0) {
    return '0.00';
  }
  const total = semesters.reduce((sum, item) => sum + Number(item.sgpa), 0);
  return (total / semesters.length).toFixed(2);
}

export function countLiveDemos(projects: ProjectItem[]): number {
  return projects.filter((project) => Boolean(project.liveDemoUrl)).length;
}

export function isOgPreviewMode(search: string): boolean {
  const params = new URLSearchParams(search);
  return params.get('og-preview') === '1';
}

export function isAtsResumeMode(search: string): boolean {
  const params = new URLSearchParams(search);
  return params.get('ats-resume') === '1';
}
