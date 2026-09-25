import { Link } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { demosList } from './demoRegistry';

const colorMap = {
  bronze: { accent: '#9A7448', tint: '#EEE7DD' },
  red: { accent: '#EA5B2A', tint: '#1A100D' },
  blue: { accent: '#1E4D8C', tint: '#EAF0F8' },
  green: { accent: '#173B45', tint: '#E9EFED' },
  orange: { accent: '#F37021', tint: '#111111' },
  teal: { accent: '#2A6B6E', tint: '#EDF4F2' },
  indigo: { accent: '#27324A', tint: '#ECEBE7' },
  yellow: { accent: '#B88819', tint: '#F5F0E6' },
  pink: { accent: '#9D5E76', tint: '#F6EDF1' },
  purple: { accent: '#65478C', tint: '#F0ECF6' },
};

function WebsitePreview({ demo }) {
  const palette = colorMap[demo.color] || colorMap.indigo;
  const image = demo.previewImage;

  if (!demo.ready) {
    return (
      <div className="flex h-full items-center justify-center bg-[#F4F4F1] px-8 text-center">
        <div>
          <span className="text-4xl" aria-hidden="true">{demo.icon}</span>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            Source not included in this archive
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: palette.tint }}>
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.035]"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      <div className="absolute inset-x-0 top-0 border-b border-white/15 bg-black/25 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/45" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <div className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-center text-[9px] text-white/70">
            tkomotions.com/{demo.slug}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[45px] flex items-center justify-between px-5 py-3 text-white">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
          {demo.name}
        </span>
        <div className="hidden gap-3 sm:flex">
          {(demo.previewNav || []).map((item) => (
            <span key={item} className="text-[8px] text-white/75">{item}</span>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/65">
          {demo.previewEyebrow}
        </p>
        <h3 className="mt-2 max-w-[90%] text-xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-2xl">
          {demo.previewHeadline}
        </h3>
        <p className="mt-2 line-clamp-2 max-w-[90%] text-[11px] leading-4 text-white/70">
          {demo.previewSubline}
        </p>
        <div className="mt-4 inline-flex rounded-full px-3.5 py-2 text-[9px] font-semibold text-white" style={{ background: palette.accent }}>
          {demo.previewCta}
        </div>
      </div>
    </div>
  );
}

function DemoHome() {
  const pageRef = useRef(null);
  const gridRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const sortedDemos = useMemo(
    () => [...demosList].sort((a, b) => Number(Boolean(b.ready)) - Number(Boolean(a.ready))),
    []
  );

  const liveDemos = sortedDemos.filter((demo) => demo.ready);
  const upcomingDemos = sortedDemos.filter((demo) => !demo.ready);

  useEffect(() => {
    document.title = 'TKO Motions — Website Demos';

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.demo-hero-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.demo-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.07, ease: 'power3.out', delay: 0.15 }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F3F2EE] text-[#111]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F3F2EE]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-[10px] font-bold tracking-wider text-white">
              TKO
            </div>
            <div>
              <div className="text-sm font-semibold">TKO Motions</div>
              <div className="mt-0.5 text-[11px] text-black/45">Website Demo Collection</div>
            </div>
          </Link>

          <a
            href="https://tkomotions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-medium transition hover:border-black hover:bg-black hover:text-white"
          >
            Visit TKO Motions ↗
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-[1440px] px-5 pb-14 pt-16 sm:px-8 sm:pt-24 lg:px-10 lg:pt-28">
          <div className="max-w-4xl">
            <div className="demo-hero-item inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {liveDemos.length} live website demos
            </div>

            <h1 className="demo-hero-item mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-[78px] lg:leading-[0.96]">
              Real websites. Different industries. One build standard.
            </h1>

            <p className="demo-hero-item mt-7 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">
              Explore complete website experiences designed and built by TKO Motions. Each card below previews the actual demo behind it — not a generic template placeholder.
            </p>
          </div>
        </section>

        <section ref={gridRef} className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">Live collection</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Explore the actual demos</h2>
            </div>
            <p className="hidden max-w-sm text-right text-sm leading-6 text-black/45 md:block">
              Open any card to move through the real pages, interactions and content already built for that industry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {liveDemos.map((demo) => (
              <Link
                key={demo.slug}
                to={`/${demo.slug}`}
                className="demo-card group overflow-hidden rounded-[22px] border border-black/7 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.045)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.10)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#E8E7E2]">
                  <WebsitePreview demo={demo} />
                  {demo.featured && (
                    <span className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                      Live
                    </span>
                  )}
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35">{demo.category}</p>
                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em]">{demo.name}</h3>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-black/55">{demo.description}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-black/7 pt-4">
                    {demo.techStack.map((tech) => (
                      <span key={tech} className="rounded-full bg-black/[0.045] px-2.5 py-1 text-[10px] font-medium text-black/55">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {upcomingDemos.length > 0 && (
          <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-6 sm:px-8 lg:px-10">
            <div className="border-t border-black/10 pt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">Not in this source archive</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {upcomingDemos.map((demo) => (
                  <div key={demo.slug} className="rounded-2xl border border-black/7 bg-white/55 p-5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{demo.icon}</span>
                      <div>
                        <h3 className="text-sm font-semibold">{demo.name}</h3>
                        <p className="mt-1 text-[11px] text-black/40">{demo.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
          <div className="rounded-[30px] bg-black px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">TKO Motions</p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  See something close to what you need? We can rebuild it around your business.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">
                  Branding, content, pages, integrations and functionality are adapted to the actual organisation — the demos are starting points for the conversation, not boxed templates.
                </p>
              </div>
              <a href="https://tkomotions.com" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">
                Start a project ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/7 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-8 text-xs text-black/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {currentYear} TKO Motions. All rights reserved.</p>
          <p>Web Design · Development · Digital Infrastructure</p>
        </div>
      </footer>
    </div>
  );
}

export default DemoHome;
