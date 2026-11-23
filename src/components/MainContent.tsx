import { useState } from 'react';
import {
  Download,
  ExternalLink,
  FileText,
  Mail,
  Phone,
  Printer,
} from 'lucide-react';
import {
  CERTIFICATIONS,
  EDUCATION_RECORDS,
  FEATURED_PROJECTS,
  PROFILE,
  SERVICES_OFFERED,
  TECHNICAL_SKILL_CATEGORIES,
} from '../data/cvData';
import {
  filterProjectsByCategory,
  type ProjectFilterValue,
} from '../utils/cvHelpers';
import { FadeSection } from './FadeSection';
import { GitHubSvg, SocialLinks } from './SocialLinks';

interface MainContentProps {
  onPrintResume: () => void;
  onOpenAtsPreview: () => void;
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="relative mb-5 border-b border-hairline pb-2 font-heading text-[1.65rem] font-bold text-deep-slate after:absolute after:-bottom-px after:left-0 after:h-[2px] after:w-[60px] after:bg-steel-blue after:content-['']">
      {title}
    </h2>
  );
}

const PROJECT_FILTER_OPTIONS: { value: ProjectFilterValue; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'react-node', label: 'React & Node.js' },
  { value: 'web', label: 'JavaScript & Web' },
];

export function MainContent({
  onPrintResume,
  onOpenAtsPreview,
}: MainContentProps) {
  const [projectFilter, setProjectFilter] = useState<ProjectFilterValue>('all');

  const visibleProjects = filterProjectsByCategory(
    FEATURED_PROJECTS,
    projectFilter,
  );

  const countForFilter = (value: ProjectFilterValue) =>
    filterProjectsByCategory(FEATURED_PROJECTS, value).length;

  return (
    <main className="flex w-full flex-col gap-10 px-6 py-10 md:w-[68%] md:gap-12 md:px-14 md:py-14">
      {/* Top Resume Action Bar (Hidden in Print) */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-5">
        <div className="text-[0.875rem] text-muted-slate">
          Print-ready &amp; ATS-optimized resume
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={onPrintResume}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded border border-steel-blue bg-steel-blue px-4 py-2 text-[0.85rem] font-medium text-white transition-all duration-200 hover:-translate-y-px hover:border-steel-blue-dark hover:bg-steel-blue-dark hover:shadow-[0_2px_8px_rgba(74,111,165,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue"
          >
            <Printer className="h-4 w-4 shrink-0" aria-hidden="true" />
            Download as PDF
          </button>

          <a
            href={PROFILE.atsResumePdfUrl}
            download="Zabeeh-Ullah-ATS-Resume.pdf"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded border border-hairline bg-white px-4 py-2 text-[0.85rem] font-medium text-deep-slate transition-all duration-200 hover:-translate-y-px hover:border-steel-blue hover:text-steel-blue hover:shadow-[0_2px_6px_rgba(0,0,0,0.05)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue"
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
            ATS Resume PDF
          </a>

          <button
            type="button"
            onClick={onOpenAtsPreview}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded px-2.5 py-2 text-[0.85rem] font-medium text-steel-blue transition-colors hover:text-steel-blue-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue"
          >
            <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
            Preview ATS
          </button>
        </div>
      </div>

      {/* Section 1: Professional Summary */}
      <FadeSection id="summary">
        <SectionHeading title="Professional Summary" />
        <p className="text-[1.05rem] leading-[1.75] text-muted-slate">
          {PROFILE.summary}
        </p>
      </FadeSection>

      {/* Section 2: Technical Skills */}
      <FadeSection id="skills">
        <SectionHeading title="Technical Skills" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {TECHNICAL_SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="group relative rounded border border-hairline bg-white p-5 transition-colors duration-200 hover:border-gray-300"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-full w-0 bg-steel-blue transition-all duration-200 group-hover:w-[3px]"
              />
              <h3 className="mb-1.5 font-heading text-[1.1rem] font-semibold text-deep-slate">
                {category.title}
              </h3>
              <p className="text-[0.925rem] leading-[1.55] text-muted-slate">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* Section 3: What I Offer */}
      <FadeSection id="services">
        <SectionHeading title="What I Offer" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SERVICES_OFFERED.map((service) => (
            <div
              key={service.title}
              className="group relative rounded border border-hairline bg-white p-5 transition-colors duration-200 hover:border-gray-300"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-full w-0 bg-steel-blue transition-all duration-200 group-hover:w-[3px]"
              />
              <h3 className="mb-1.5 font-heading text-[1.1rem] font-semibold text-deep-slate">
                {service.title}
              </h3>
              <p className="text-[0.925rem] leading-[1.55] text-muted-slate">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* Section 4: Featured Projects */}
      <FadeSection id="projects">
        <SectionHeading title="Featured Projects" />

        <div className="-mt-1 mb-6 flex flex-col gap-3.5">
          <p className="text-base leading-relaxed text-muted-slate">
            Selected React, Node.js, and front-end engineering projects from my
            GitHub showcasing architecture, tooling, and responsive UI craft.
          </p>

          <div
            role="group"
            aria-label="Filter projects by stack"
            className="inline-flex w-fit flex-wrap items-center gap-1 rounded border border-sand-border bg-warm-sand/70 p-1"
          >
            {PROJECT_FILTER_OPTIONS.map((option) => {
              const active = projectFilter === option.value;
              const count = countForFilter(option.value);
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setProjectFilter(option.value)}
                  className={`whitespace-nowrap rounded-[3px] px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? 'bg-white text-deep-slate shadow-[0_1px_2px_rgba(0,0,0,0.06)]'
                      : 'text-muted-slate hover:text-deep-slate'
                  }`}
                >
                  {option.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className={`group relative flex flex-col justify-between rounded border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${
                project.featured
                  ? 'border-steel-blue/30'
                  : 'border-hairline'
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-full w-0 bg-steel-blue transition-all duration-200 group-hover:w-[3px]"
              />
              <div>
                {project.kicker ? (
                  <div className="mb-1.5 text-[0.75rem] font-medium tracking-[0.02em] text-steel-blue">
                    {project.kicker}
                  </div>
                ) : null}

                <h3 className="mb-2 font-heading text-[1.15rem] font-semibold leading-snug text-deep-slate">
                  {project.title}
                </h3>

                <p className="mb-3.5 text-[0.925rem] leading-[1.55] text-muted-slate">
                  {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 ? (
                  <ul className="mb-4 space-y-1.5 border-t border-hairline pt-3 text-[0.85rem] leading-[1.5] text-muted-slate">
                    {project.highlights.map((point) => (
                      <li key={point} className="relative pl-3.5">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 font-bold text-steel-blue"
                        >
                          &bull;
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[3px] border border-steel-blue/20 bg-steel-blue/[0.08] px-2 py-0.5 text-[0.775rem] font-medium tracking-[0.02em] text-steel-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded border border-steel-blue bg-steel-blue px-3 py-1.5 text-[0.825rem] font-medium text-white transition-all duration-200 hover:-translate-y-px hover:border-[#3b5a86] hover:bg-[#3b5a86] hover:shadow-[0_2px_6px_rgba(74,111,165,0.25)]"
                    >
                      <ExternalLink
                        className="h-3.5 w-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      Live Demo
                    </a>
                  ) : null}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded border border-hairline bg-white px-3 py-1.5 text-[0.825rem] font-medium text-deep-slate transition-all duration-200 hover:-translate-y-px hover:border-steel-blue hover:text-steel-blue hover:shadow-[0_2px_6px_rgba(0,0,0,0.05)]"
                  >
                    <GitHubSvg className="h-3.5 w-3.5 shrink-0" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </FadeSection>

      {/* Section 5: Education & Academic Record */}
      <FadeSection id="education">
        <SectionHeading title="Education & Academic Record" />

        <div className="relative ml-2 flex flex-col gap-9 border-l-[1.5px] border-hairline pl-8">
          {EDUCATION_RECORDS.map((edu) => (
            <div key={edu.degree} className="group relative py-2 pl-2">
              <span
                aria-hidden="true"
                className="absolute top-0 -left-8 h-full w-0 bg-steel-blue transition-all duration-200 group-hover:w-[3px]"
              />
              <span
                aria-hidden="true"
                className="absolute top-3.5 -left-[2.375rem] h-2.5 w-2.5 rounded-full border-2 border-warm-white bg-steel-blue"
              />

              <h3 className="mb-1 font-heading text-[1.25rem] font-semibold text-deep-slate">
                {edu.degree}
              </h3>
              <div className="mb-2 text-[0.95rem] font-medium text-steel-blue">
                {edu.institution} &bull; {edu.period}
              </div>

              {edu.summary ? (
                <p className="mb-3 text-[0.95rem] font-semibold text-deep-slate">
                  {edu.summary}
                </p>
              ) : null}

              {edu.marks ? (
                <div className="text-[0.95rem] text-muted-slate">
                  Marks Obtained:{' '}
                  <strong className="font-semibold text-deep-slate tabular-nums">
                    {edu.marks}
                  </strong>
                </div>
              ) : null}

              {edu.semesters ? (
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {edu.semesters.map((sem) => (
                    <div
                      key={sem.semester}
                      className="rounded border border-hairline bg-white px-3.5 py-3 text-center tabular-nums"
                    >
                      <div className="mb-1 text-[0.8rem] font-bold uppercase text-muted-slate">
                        {sem.semester}
                      </div>
                      <div className="text-[0.925rem] font-semibold text-deep-slate">
                        SGPA:{' '}
                        <span className="text-steel-blue">{sem.sgpa}</span>
                      </div>
                      <div className="text-[0.825rem] font-medium text-muted-slate">
                        CGPA: {sem.cgpa}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </FadeSection>

      {/* Section 6: Certifications & Professional Development */}
      <FadeSection id="certifications">
        <SectionHeading title="Certifications & Professional Development" />

        <ul className="flex flex-col gap-3.5">
          {CERTIFICATIONS.map((cert) => (
            <li
              key={cert.title}
              className="group relative flex flex-col gap-0.5 rounded border border-hairline bg-white px-5 py-4 transition-colors duration-200 hover:border-gray-300"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-full w-0 bg-steel-blue transition-all duration-200 group-hover:w-[3px]"
              />
              <h3 className="font-heading text-[1.075rem] font-semibold leading-snug text-deep-slate">
                {cert.title}
              </h3>
              <div className="text-[0.875rem] font-medium text-steel-blue">
                {cert.issuer}
              </div>
            </li>
          ))}
        </ul>
      </FadeSection>

      {/* Section 7: Interests & Extracurriculars */}
      <FadeSection id="interests">
        <SectionHeading title="Interests & Extracurriculars" />
        <p className="text-[1.025rem] leading-[1.7] text-muted-slate">
          {PROFILE.interests}
        </p>
      </FadeSection>

      {/* Section 8: Get in Touch */}
      <FadeSection id="contact">
        <SectionHeading title="Get in Touch" />

        <div className="flex flex-col gap-3 rounded border border-hairline bg-white px-6 py-7 sm:px-8">
          <p className="mb-2 text-[0.95rem] text-muted-slate">
            For academic inquiries, collaboration, or web development
            opportunities, please reach out via email or phone:
          </p>

          <a
            href={PROFILE.emailHref}
            className="inline-flex w-fit items-center gap-2.5 border-b border-transparent text-[1.075rem] font-medium text-deep-slate transition-colors hover:border-steel-blue hover:text-steel-blue"
          >
            <Mail className="h-4 w-4 text-steel-blue" aria-hidden="true" />
            <span>{PROFILE.email}</span>
          </a>

          <a
            href={PROFILE.phoneHref}
            className="inline-flex w-fit items-center gap-2.5 border-b border-transparent text-[1.075rem] font-medium text-deep-slate transition-colors hover:border-steel-blue hover:text-steel-blue"
          >
            <Phone className="h-4 w-4 text-steel-blue" aria-hidden="true" />
            <span>{PROFILE.phoneDisplay}</span>
          </a>

          <div className="mt-4 border-t border-hairline pt-4">
            <div className="mb-3 text-[0.85rem] font-semibold uppercase tracking-[0.05em] text-muted-slate">
              Connect Online
            </div>
            <SocialLinks />
          </div>
        </div>
      </FadeSection>
    </main>
  );
}
