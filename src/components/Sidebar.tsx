import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import {
  CORE_SKILLS,
  LANGUAGES,
  NAV_SECTIONS,
  PROFILE,
  PROGRAMMING_STACK,
  TOOLS_WORKFLOW,
} from '../data/cvData';
import { SocialLinks } from './SocialLinks';

interface SidebarProps {
  activeSectionId: string;
}

function SidebarHeading({ title }: { title: string }) {
  return (
    <h2 className="mb-3.5 flex items-center gap-2 font-heading text-[0.95rem] font-bold uppercase tracking-[0.08em] text-deep-slate after:h-px after:flex-1 after:bg-sand-border after:content-['']">
      {title}
    </h2>
  );
}

export function Sidebar({ activeSectionId }: SidebarProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <aside
      id="sidebar"
      className="animate-slide-in-left flex w-full flex-col gap-9 border-b border-sand-border bg-warm-sand px-6 py-10 md:w-[32%] md:border-r md:border-b-0 md:px-8 md:py-14"
    >
      {/* Profile Photo & Identity */}
      <div className="text-center">
        <div className="mx-auto mb-5 h-[175px] w-[140px] overflow-hidden rounded-xl border-2 border-steel-blue bg-warm-white p-1">
          {imgError ? (
            <div
              className="flex h-full w-full items-center justify-center rounded-lg bg-steel-blue font-heading text-3xl font-bold text-white"
              aria-label={PROFILE.name}
            >
              ZU
            </div>
          ) : (
            <img
              src={PROFILE.photoUrl}
              alt={PROFILE.name}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="animate-photo-focus h-full w-full rounded-lg object-cover object-top"
            />
          )}
        </div>

        <h1 className="mb-1 text-center font-heading text-[1.85rem] font-bold leading-tight text-deep-slate">
          {PROFILE.name}
        </h1>
        <p className="text-center text-[0.8rem] font-bold uppercase tracking-[0.08em] text-muted-slate">
          {PROFILE.headline}
        </p>

        <SocialLinks centered />

        <a
          href={PROFILE.githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 block text-center text-[0.78rem] text-deep-slate underline underline-offset-2 transition-colors hover:text-steel-blue"
        >
          Zabeeh Ullah on GitHub
        </a>
      </div>

      <div className="h-px w-full bg-sand-border" />

      {/* Contact Info */}
      <div>
        <SidebarHeading title="Contact" />
        <ul className="flex flex-col gap-2.5 text-[0.925rem] text-muted-slate">
          <li className="flex items-start gap-2.5 break-words">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-steel-blue" aria-hidden="true" />
            <span>{PROFILE.location}</span>
          </li>
          <li className="flex items-start gap-2.5 break-words">
            <Phone className="mt-1 h-4 w-4 shrink-0 text-steel-blue" aria-hidden="true" />
            <a
              href={PROFILE.phoneHref}
              className="text-steel-blue transition-colors hover:text-steel-blue-dark"
            >
              {PROFILE.phoneDisplay}
            </a>
          </li>
          <li className="flex items-start gap-2.5 break-words">
            <Mail className="mt-1 h-4 w-4 shrink-0 text-steel-blue" aria-hidden="true" />
            <a
              href={PROFILE.emailHref}
              className="text-steel-blue transition-colors hover:text-steel-blue-dark"
            >
              {PROFILE.email}
            </a>
          </li>
        </ul>
      </div>

      {/* Languages */}
      <div>
        <SidebarHeading title="Languages" />
        <ul className="flex flex-col gap-2 text-[0.925rem]">
          {LANGUAGES.map((lang) => (
            <li key={lang.name} className="flex items-center justify-between">
              <span className="font-medium text-deep-slate">{lang.name}</span>
              <span className="text-[0.825rem] italic text-muted-slate">
                {lang.level}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Programming & Stack */}
      <div>
        <SidebarHeading title="Programming & Stack" />
        <div className="flex flex-wrap gap-1.5">
          {PROGRAMMING_STACK.map((item) => {
            const isAdvanced = item.level === 'Advanced';
            return (
              <div
                key={item.name}
                className={`rounded border px-2.5 py-1 text-[0.85rem] text-deep-slate ${
                  isAdvanced
                    ? 'border-steel-blue/40 bg-steel-blue/[0.08]'
                    : 'border-sand-border bg-white/70'
                }`}
              >
                {item.name}
                {item.level ? (
                  <span className="ml-1 text-[0.775rem] font-medium italic text-steel-blue">
                    ({item.level})
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tools & Workflow */}
      <div>
        <SidebarHeading title="Tools & Workflow" />
        <div className="flex flex-wrap gap-1.5">
          {TOOLS_WORKFLOW.map((tool) => (
            <div
              key={tool}
              className="rounded border border-sand-border bg-white/70 px-2.5 py-1 text-[0.85rem] text-deep-slate"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* Professional Skills */}
      <div>
        <SidebarHeading title="Skills" />
        <ul className="flex flex-col gap-2 text-[0.925rem] text-muted-slate">
          {CORE_SKILLS.map((skill) => (
            <li key={skill} className="relative pl-4">
              <span
                aria-hidden="true"
                className="absolute left-0 font-bold text-steel-blue"
              >
                &bull;
              </span>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Navigation Dots */}
      <nav
        className="cv-nav-dots mt-4 hidden flex-col gap-2.5 md:flex"
        aria-label="CV Sections Navigation"
      >
        {NAV_SECTIONS.map((sec) => {
          const isActive = activeSectionId === sec.id;
          return (
            <a
              key={sec.id}
              id={`dot-${sec.id}`}
              href={`#${sec.id}`}
              className={`group flex items-center gap-2.5 text-[0.825rem] transition-colors ${
                isActive
                  ? 'font-medium text-deep-slate'
                  : 'text-muted-slate hover:font-medium hover:text-deep-slate'
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full border-[1.5px] border-steel-blue transition-all duration-200 ${
                  isActive
                    ? 'scale-125 bg-steel-blue'
                    : 'bg-transparent group-hover:scale-125 group-hover:bg-steel-blue'
                }`}
              />
              <span>{sec.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
