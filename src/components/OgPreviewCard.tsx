import { PROFILE } from '../data/cvData';

export function OgPreviewCard() {
  return (
    <div
      data-testid="og-preview-card"
      className="relative flex h-[630px] w-[1200px] overflow-hidden bg-warm-white text-deep-slate"
    >
      {/* Top hairline architectural bar */}
      <div className="absolute top-0 right-0 left-0 z-10 flex h-1.5 w-full">
        <div className="w-[63%] bg-deep-slate" />
        <div className="w-[37%] bg-steel-blue" />
      </div>

      {/* Left 63% Editorial Typography Column */}
      <div className="relative flex w-[63%] flex-col justify-between px-16 pt-14 pb-12">
        <div>
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-steel-blue">
            <span>Curriculum Vitae</span>
            <span aria-hidden="true" className="text-sand-border">
              &bull;
            </span>
            <span className="text-muted-slate">Peshawar, Pakistan</span>
          </div>

          {/* Display Name */}
          <h1 className="font-heading text-[68px] font-bold leading-[1.05] tracking-[-0.02em] text-deep-slate">
            {PROFILE.name}
          </h1>

          {/* Accent Hairline */}
          <div className="mt-5 mb-5 flex items-center gap-3">
            <span className="h-[3px] w-16 bg-steel-blue" />
            <span className="h-px flex-1 bg-hairline" />
          </div>

          {/* Role Headline */}
          <p className="text-[21px] font-medium leading-snug text-deep-slate">
            BS Computer Science Student
            <span className="block text-[19px] font-normal text-steel-blue">
              Aspiring MERN &amp; Full-Stack Developer
            </span>
          </p>

          {/* Quantitative Proof Strip */}
          <div className="mt-8 grid grid-cols-3 gap-5 border-y border-hairline py-6 tabular-nums">
            <div>
              <div className="font-heading text-[30px] font-bold leading-none text-deep-slate">
                3.72
                <span className="text-[18px] font-normal text-muted-slate">
                  {' '}
                  / 4.00
                </span>
              </div>
              <div className="mt-2 whitespace-nowrap text-[12.5px] font-medium text-muted-slate">
                CGPA &middot; CUSIT (5th Sem)
              </div>
            </div>

            <div className="border-l border-hairline pl-5">
              <div className="font-heading text-[30px] font-bold leading-none text-deep-slate">
                10+
              </div>
              <div className="mt-2 whitespace-nowrap text-[12.5px] font-medium text-muted-slate">
                Projects &middot; ctxscan, FixNear
              </div>
            </div>

            <div className="border-l border-hairline pl-5">
              <div className="font-heading text-[30px] font-bold leading-none text-deep-slate">
                5
              </div>
              <div className="mt-2 whitespace-nowrap text-[12.5px] font-medium text-muted-slate">
                Google AI &middot; IBM &middot; McKinsey
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stack & Handle */}
        <div className="flex flex-col gap-3">
          <div className="text-[15px] font-medium tracking-[0.01em] text-deep-slate">
            <span>React.js</span>
            <span className="mx-2 text-steel-blue">&middot;</span>
            <span>Node.js</span>
            <span className="mx-2 text-steel-blue">&middot;</span>
            <span>Express.js</span>
            <span className="mx-2 text-steel-blue">&middot;</span>
            <span>MongoDB</span>
            <span className="mx-2 text-steel-blue">&middot;</span>
            <span>JavaScript</span>
            <span className="mx-2 text-steel-blue">&middot;</span>
            <span>PHP</span>
            <span className="mx-2 text-steel-blue">&middot;</span>
            <span>MySQL</span>
          </div>

          <div className="flex items-center justify-between text-[13.5px] text-muted-slate">
            <span>github.com/Zabeeh-Ullah-Dev</span>
            <span>zabeehullah2005@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Right 37% Warm Sand Portrait Panel */}
      <div className="relative flex w-[37%] flex-col items-center justify-center border-l border-sand-border bg-warm-sand px-10 pt-8 pb-6">
        {/* Decorative subtle editorial corner lines */}
        <div className="pointer-events-none absolute top-9 right-9 h-8 w-8 border-t border-r border-steel-blue/40" />
        <div className="pointer-events-none absolute bottom-9 left-9 h-8 w-8 border-b border-l border-steel-blue/40" />

        {/* Matted Portrait Frame */}
        <div className="rounded-2xl border border-[#D8D3C8] bg-warm-white p-3.5 shadow-[0_20px_48px_rgba(31,41,55,0.12)]">
          <div className="overflow-hidden rounded-xl border-2 border-steel-blue/80 bg-warm-white p-1">
            <img
              src={PROFILE.photoUrl}
              alt={PROFILE.name}
              className="h-[330px] w-[264px] rounded-lg object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="font-heading text-[18px] font-semibold text-deep-slate">
            Full-Stack Web Developer
          </div>
          <div className="mt-1 text-[13px] font-medium tracking-[0.04em] text-steel-blue">
            Open to Remote Software Internships
          </div>
        </div>
      </div>
    </div>
  );
}
