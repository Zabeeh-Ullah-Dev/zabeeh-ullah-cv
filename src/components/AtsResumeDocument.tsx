import {
  CERTIFICATIONS,
  LANGUAGES,
  PROFILE,
  TECHNICAL_SKILL_CATEGORIES,
} from '../data/cvData';

interface AtsProjectEntry {
  title: string;
  stack: string;
  githubLabel: string;
  githubUrl: string;
  demoUrl?: string;
  bullets: string[];
}

const ATS_PROJECTS: AtsProjectEntry[] = [
  {
    title: 'ctxscan — LLM Context Budget CLI',
    stack: 'Node.js, JavaScript, CLI',
    githubLabel: 'github.com/Zabeeh-Ullah-Dev/ctxscan',
    githubUrl: 'https://github.com/Zabeeh-Ullah-Dev/ctxscan',
    demoUrl: 'https://trymuseai.im/apps/50e858621ea5f469/',
    bullets: [
      'Engineered a Node.js CLI tool that calculates exact repository token counts and ranks files by import dependency importance.',
      'Implemented budget-aware context packing to output paste-ready LLM bundles with exact kept and dropped token reports.',
    ],
  },
  {
    title: 'FixNear — Local Services Finder',
    stack: 'React 19, Vite, JavaScript, CSS3',
    githubLabel: 'github.com/Zabeeh-Ullah-Dev/FixNear',
    githubUrl: 'https://github.com/Zabeeh-Ullah-Dev/FixNear',
    bullets: [
      'Developed a responsive local services finder prototype for electricians, plumbers, mechanics, and home technicians.',
      'Built combined trade, neighborhood, and budget filters, rating/price sorting, and an accessible localStorage booking dialog.',
    ],
  },
  {
    title: 'Chrono — Precision Stopwatch & Lap Analytics',
    stack: 'React, Vite, Tailwind CSS, JavaScript',
    githubLabel: 'github.com/Zabeeh-Ullah-Dev/Chrono-Stopwatch',
    githubUrl: 'https://github.com/Zabeeh-Ullah-Dev/Chrono-Stopwatch',
    demoUrl: 'https://zabeeh-ullah-dev.github.io/Chrono-Stopwatch/',
    bullets: [
      'Built drift-free millisecond timing using performance.now() timestamps with live fastest/slowest split detection and charts.',
      'Added keyboard shortcuts, dark/light themes, localStorage persistence across reloads, and one-click CSV lap export.',
    ],
  },
  {
    title: 'AI & Knowledge Graph Research Portfolio',
    stack: 'React 19, TypeScript, Tailwind CSS v4, Vite',
    githubLabel: 'github.com/Zabeeh-Ullah-Dev/Acadamic-Portfolio',
    githubUrl: 'https://github.com/Zabeeh-Ullah-Dev/Acadamic-Portfolio',
    bullets: [
      'Engineered an academic portfolio for an AI PhD researcher featuring a searchable 32-paper publication archive and topic filters.',
    ],
  },
];

function AtsSectionHeading({ title }: { title: string }) {
  return (
    <h2 className="mb-1.5 border-b-[1.25px] border-[#2B4C7E] pb-0.5 font-body text-[10.5px] font-bold uppercase tracking-[0.09em] text-[#1E3A5F]">
      {title}
    </h2>
  );
}

export function AtsResumeDocument() {
  return (
    <article
      data-testid="ats-resume-document"
      className="mx-auto w-[210mm] min-h-[297mm] bg-white px-[14mm] py-[11mm] font-body text-[9.6px] leading-[1.42] text-[#111827] antialiased"
    >
      {/* Top Executive Accent Bar */}
      <div className="mb-3 h-[3px] w-full bg-[#2B4C7E]" />

      {/* Header */}
      <header className="mb-3 text-center">
        <h1 className="font-heading text-[24px] font-bold tracking-[0.03em] text-[#111827]">
          ZABEEH ULLAH
        </h1>
        <p className="mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-[#2B4C7E]">
          BS Computer Science Student | Aspiring MERN Stack &amp; Full-Stack
          Developer
        </p>
        <p className="mt-1 text-[9.2px] text-[#374151]">
          {PROFILE.fullLocation} &nbsp;|&nbsp;{' '}
          <a href={PROFILE.phoneHref} className="text-[#111827] no-underline">
            {PROFILE.phoneDisplay}
          </a>{' '}
          &nbsp;|&nbsp;{' '}
          <a href={PROFILE.emailHref} className="text-[#1E3A5F] underline">
            {PROFILE.email}
          </a>
        </p>
        <p className="mt-0.5 text-[9.2px] text-[#374151]">
          LinkedIn:{' '}
          <a
            href={PROFILE.linkedinProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E3A5F] underline"
          >
            linkedin.com/in/zabeeh-ullah-1b6094382
          </a>{' '}
          &nbsp;|&nbsp; GitHub:{' '}
          <a
            href={PROFILE.githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E3A5F] underline"
          >
            github.com/Zabeeh-Ullah-Dev
          </a>{' '}
          &nbsp;|&nbsp; Portfolio:{' '}
          <a
            href={PROFILE.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E3A5F] underline"
          >
            zabeeh-ullah.netlify.app
          </a>
        </p>
      </header>

      {/* Professional Summary */}
      <section className="mb-3">
        <AtsSectionHeading title="Professional Summary" />
        <p className="text-justify text-[9.4px] leading-[1.45] text-[#1F2937]">
          {PROFILE.summary}
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-3">
        <AtsSectionHeading title="Technical Skills" />
        <ul className="space-y-0.5 text-[9.3px] text-[#1F2937]">
          {TECHNICAL_SKILL_CATEGORIES.map((cat) => (
            <li key={cat.title}>
              <strong className="font-bold text-[#111827]">
                {cat.title}:
              </strong>{' '}
              {cat.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Selected Project Experience */}
      <section className="mb-3">
        <AtsSectionHeading title="Selected Project Experience" />
        <div className="space-y-2.5">
          {ATS_PROJECTS.map((project) => (
            <div key={project.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <strong className="text-[10px] font-bold text-[#111827]">
                    {project.title}
                  </strong>{' '}
                  <span className="text-[9px] text-[#4B5563]">
                    | {project.stack}
                  </span>
                </div>
                <div className="text-[8.8px] text-[#1E3A5F]">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {project.githubLabel}
                  </a>
                  {project.demoUrl ? (
                    <>
                      {' '}
                      &middot;{' '}
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        Live Demo
                      </a>
                    </>
                  ) : null}
                </div>
              </div>
              <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-[9.2px] text-[#1F2937]">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Professional Development */}
      <section className="mb-3">
        <AtsSectionHeading title="Certifications & Professional Development" />
        <ul className="list-disc space-y-0.5 pl-4 text-[9.3px] text-[#1F2937]">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.title}>
              <strong className="font-semibold text-[#111827]">
                {cert.title}
              </strong>{' '}
              &mdash; {cert.issuer}
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mb-3">
        <AtsSectionHeading title="Education" />
        <div className="space-y-1.5 text-[9.3px] text-[#1F2937]">
          <div>
            <div className="flex items-baseline justify-between">
              <strong className="text-[9.8px] font-bold text-[#111827]">
                Bachelor of Science in Computer Science (BSCS)
              </strong>
              <span className="text-[9px] font-medium text-[#374151]">
                Sep 2024 – Present
              </span>
            </div>
            <div>
              City University of Science and Information Technology (CUSIT),
              Peshawar, Pakistan &nbsp;|&nbsp;{' '}
              <strong className="font-semibold text-[#111827] tabular-nums">
                CGPA: 3.72 / 4.00
              </strong>{' '}
              (5th Semester)
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <strong className="text-[9.8px] font-bold text-[#111827]">
                Diploma in Information Technology (DIT)
              </strong>
              <span className="text-[9px] font-medium text-[#374151]">
                Jan 2024 – Dec 2024
              </span>
            </div>
            <div>
              Charsadda Institute of Technology, Mandani, Pakistan &nbsp;|&nbsp;
              Score:{' '}
              <strong className="font-semibold text-[#111827] tabular-nums">
                753 / 1000
              </strong>
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <strong className="text-[9.8px] font-bold text-[#111827]">
                FSc (Pre-Medical)
              </strong>
              <span className="text-[9px] font-medium text-[#374151]">
                2021 – 2023
              </span>
            </div>
            <div>
              MM College Peshawar, Peshawar, Pakistan &nbsp;|&nbsp; Score:{' '}
              <strong className="font-semibold text-[#111827] tabular-nums">
                942 / 1100
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section>
        <AtsSectionHeading title="Languages" />
        <p className="text-[9.3px] text-[#1F2937]">
          {LANGUAGES.map((lang, idx) => (
            <span key={lang.name}>
              <strong className="font-semibold text-[#111827]">
                {lang.name}:
              </strong>{' '}
              {lang.level}
              {idx < LANGUAGES.length - 1 ? '  |  ' : ''}
            </span>
          ))}
        </p>
      </section>
    </article>
  );
}
