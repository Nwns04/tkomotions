import { Link } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { demosList } from './demoRegistry';

function DemoHome() {
  const pageRef = useRef(null);
  const gridRef = useRef(null);

  const currentYear = new Date().getFullYear();

  const sortedDemos = useMemo(() => {
    return [...demosList].sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
    );
  }, []);

  const readyCount = sortedDemos.filter((demo) => demo.featured).length;

  useEffect(() => {
    document.title = 'TKO Motions — Website Demos';

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.demo-hero-item',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        '.demo-card',
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#f5f5f2] text-gray-950"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="group">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xs font-bold tracking-wider text-white">
                TKO
              </div>

              <div>
                <p className="text-sm font-semibold leading-none text-gray-950">
                  TKO Motions
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Digital experiences built to perform
                </p>
              </div>
            </div>
          </Link>

          <a
            href="https://tkomotions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:border-gray-950 hover:bg-gray-950 hover:text-white sm:inline-flex"
          >
            Visit TKO Motions
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28">
            <div className="max-w-4xl">
              <div className="demo-hero-item mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                {readyCount} live {readyCount === 1 ? 'demo' : 'demos'} available
              </div>

              <h1 className="demo-hero-item max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-gray-950 sm:text-5xl lg:text-7xl">
                See what your next website could look like.
              </h1>

              <p className="demo-hero-item mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Explore live website concepts built by TKO Motions across
                different industries. Each experience demonstrates how we
                approach design, content, mobile usability and digital
                conversion.
              </p>

              <div className="demo-hero-item mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#demos"
                  className="inline-flex items-center justify-center rounded-full bg-gray-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                  Explore demos
                  <span className="ml-2">↓</span>
                </a>

                <a
                  href="https://tkomotions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-950"
                >
                  Work with TKO Motions
                  <span className="ml-2">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Collection */}
        <section
          id="demos"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
        >
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Demo Collection
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                Built for real-world businesses.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Ready demos can be opened and explored now. Additional industry
              experiences will be added as they are completed.
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {sortedDemos.map((demo) => {
              const isReady = Boolean(demo.featured);

              const cardContent = (
                <>
                  {/* Preview */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200">
                    <div className="absolute inset-0 opacity-50">
                      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-200 blur-3xl" />
                      <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-orange-100 blur-3xl" />
                    </div>

                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
                        isReady ? 'group-hover:scale-110' : ''
                      }`}
                    >
                      <span className="text-6xl drop-shadow-sm">
                        {demo.icon}
                      </span>
                    </div>

                    <div className="absolute left-4 top-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium shadow-sm backdrop-blur ${
                          isReady
                            ? 'bg-green-50/95 text-green-800'
                            : 'bg-white/90 text-gray-600'
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isReady ? 'bg-green-500' : 'bg-gray-400'
                          }`}
                        />
                        {isReady ? 'Live Demo' : 'Coming Soon'}
                      </span>
                    </div>

                    {demo.techStack?.length > 0 && (
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                        {demo.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold tracking-tight text-gray-950 transition-colors ${
                          isReady ? 'group-hover:text-blue-700' : ''
                        }`}
                      >
                        {demo.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {demo.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-gray-400">
                        {isReady ? 'Explore experience' : 'In development'}
                      </span>

                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                          isReady
                            ? 'bg-gray-950 text-white group-hover:translate-x-1'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {isReady ? '→' : '—'}
                      </span>
                    </div>
                  </div>
                </>
              );

              if (!isReady) {
                return (
                  <div
                    key={demo.slug}
                    className="demo-card flex min-h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white opacity-75 shadow-sm"
                  >
                    {cardContent}
                  </div>
                );
              }

              return (
                <Link
                  key={demo.slug}
                  to={`/${demo.slug}`}
                  className="demo-card group flex min-h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Value Section */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="overflow-hidden rounded-[2rem] bg-gray-950 px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  The TKO Approach
                </p>

                <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  More than a website that simply looks good.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  We design digital experiences around how people actually
                  discover, understand and contact your business.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-5 text-2xl">01</div>
                  <h3 className="font-medium">Responsive</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Built to work cleanly across mobile, tablet and desktop.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-5 text-2xl">02</div>
                  <h3 className="font-medium">Purpose-built</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Content, structure and interactions shaped around your
                    industry.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-5 text-2xl">03</div>
                  <h3 className="font-medium">Customizable</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Branding, pages and functionality can be adapted to your
                    organisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
          <div className="flex flex-col items-start justify-between gap-8 border-t border-black/10 pt-10 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
                Need something similar for your organisation?
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                TKO Motions can adapt these ideas around your brand, content,
                audience and operational requirements.
              </p>
            </div>

            <a
              href="https://tkomotions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-gray-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Start a project
              <span className="ml-2">↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {currentYear} TKO Motions. All rights reserved.</p>

          <p className="text-xs text-gray-400">
            Web Design • Development • Digital Infrastructure
          </p>
        </div>
      </footer>
    </div>
  );
}

export default DemoHome;