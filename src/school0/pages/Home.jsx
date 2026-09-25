import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UtilityBar from '../components/UtilityBar';
import AnnouncementBar from '../components/AnnouncementBar';
import SchoolHeroCarousel from '../components/SchoolHeroCarousel';
import QuickLinksGrid from '../components/QuickLinksGrid';
import ProgrammeTabs from '../components/ProgrammeTabs';
import AccreditationCarousel from '../components/AccreditationCarousel';
import InitialAvatar from '../components/InitialAvatar';
import { schoolInfo } from '../data/school';
import { faculty } from '../data/faculty';
import { newsArticles } from '../data/news';
import { events } from '../data/events';
import { testimonials } from '../data/testimonials';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const featuredNews = newsArticles.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  useEffect(() => {
    gsap.utils.toArray('.fade-up').forEach((element) => {
      gsap.fromTo(element,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 85%' } }
      );
    });

    // Pulse animation for play button
    gsap.to('.play-pulse-1', {
      scale: 1.8,
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      ease: 'power2.out',
    });
    
    gsap.to('.play-pulse-2', {
      scale: 1.4,
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      ease: 'power2.out',
      delay: 0.3,
    });
  }, []);

  return (
    <>
      <UtilityBar />
      <AnnouncementBar />
      <SchoolHeroCarousel />

      {/* Quick Links Grid */}
      <section className="py-12 bg-white">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <QuickLinksGrid />
        </div>
      </section>

      {/* Welcome - With Video Play Button */}
      <section className="section-padding-school bg-cream relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8500356/pexels-photo-8500356.jpeg?w=1920&q=80"
            alt="Oakbridge students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-cream/90" />
        </div>

        <div className="container-hotel px-4 md:px-6 lg:px-8 text-center max-w-3xl mx-auto relative">
          <div className="w-16 h-16 rounded-full bg-oak-green border-2 border-gold flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-serif font-bold text-xl">O</span>
          </div>
          <p className="text-deep-green text-sm font-semibold tracking-[0.25em] uppercase mb-3">Welcome to Oakbridge</p>
          <h2 className="text-4xl font-serif font-bold text-ink mb-6">A School That Feels Like Home</h2>
          <p className="text-slate leading-relaxed mb-4">
            Since 2008, Oakbridge International School has been a place where children 
            from Nigeria and around the world come together to learn, grow, and discover 
            their potential.
          </p>
          <p className="text-slate leading-relaxed mb-10">
            Our British curriculum, enriched with Nigerian context, prepares students 
            not just for examinations but for life.
          </p>

          <div className="flex flex-col items-center mb-10">
            <button
              onClick={() => setVideoOpen(true)}
              className="relative group"
              aria-label="Watch our school video"
            >
              <span className="play-pulse-1 absolute inset-0 rounded-full bg-oak-green/30" />
              <span className="play-pulse-2 absolute inset-0 rounded-full bg-oak-green/20" />
              <span className="relative w-20 h-20 md:w-24 md:h-24 bg-oak-green rounded-full flex items-center justify-center shadow-lg hover:bg-deep-green transition-colors duration-300 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
            <p className="mt-4 text-sm text-slate">Watch Our School Video</p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <InitialAvatar name={faculty[0].name} initials={faculty[0].initials} size="md" color={faculty[0].color} />
            <div className="text-left">
              <p className="font-serif italic text-ink">{faculty[0].name}</p>
              <p className="text-sm text-slate">{faculty[0].role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-ink/90">
          <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full">
            <div className="flex items-center justify-between p-4 border-b border-slate/20">
              <h3 className="font-serif font-bold text-ink">Oakbridge School Video</h3>
              <button onClick={() => setVideoOpen(false)} className="text-slate hover:text-ink transition-colors" aria-label="Close video">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-ink flex items-center justify-center">
              <div className="text-center text-white p-8">
                <svg className="w-16 h-16 mx-auto mb-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-lg font-serif">Video Coming Soon</p>
                <p className="text-sm text-white/60">This is a demonstration video player.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Programme Tabs */}
      <section className="section-padding-school bg-soft-gray">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-deep-green text-sm font-semibold tracking-[0.25em] uppercase mb-3">Our Programmes</p>
            <h2 className="text-4xl font-serif font-bold text-ink">Education for Every Stage</h2>
          </div>
          <ProgrammeTabs />
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-oak-green py-16">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: schoolInfo.stats.students, suffix: '+', label: 'Students' },
              { value: schoolInfo.stats.nationalities, suffix: '+', label: 'Nationalities' },
              { value: schoolInfo.stats.faculty, suffix: '+', label: 'Faculty' },
              { value: schoolInfo.stats.universityPlacement, suffix: '%', label: 'University Placement' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-5xl font-serif font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-sage uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="section-padding-school bg-white">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-ink mb-8">Latest News</h2>
              <div className="space-y-6">
                {featuredNews.map(article => (
                  <div key={article.id} className="flex gap-6 bg-soft-gray rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={article.image} alt={article.title} className="w-32 h-32 md:w-40 md:h-40 object-cover flex-shrink-0" />
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs bg-mint text-oak-green px-2 py-0.5 rounded-full uppercase tracking-wider">{article.category}</span>
                        <span className="text-xs text-slate">{article.date}</span>
                      </div>
                      <h3 className="font-semibold text-ink mb-1">{article.title}</h3>
                      <p className="text-sm text-slate line-clamp-2">{article.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-ink mb-8">Upcoming Events</h2>
              <div className="bg-oak-green rounded-lg p-6">
                <div className="space-y-4">
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="flex gap-4 border-b border-white/10 last:border-0 pb-4 last:pb-0">
                      <div className="w-14 h-14 bg-white text-oak-green rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold leading-none">{event.day}</span>
                        <span className="text-xs uppercase">{event.month}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm mb-1">{event.title}</h4>
                        <p className="text-sage text-xs">{event.time} · {event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/school/news" className="mt-6 inline-block text-gold hover:text-white transition-colors text-sm">
                  View All Events →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding-school bg-soft-gray">
        <div className="container-hotel px-4 md:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <p className="text-deep-green text-sm font-semibold tracking-[0.25em] uppercase mb-3">Parent Voices</p>
          <h2 className="text-3xl font-serif font-bold text-ink mb-8">What Families Say</h2>
          <blockquote className="text-xl md:text-2xl font-serif italic text-ink leading-relaxed mb-6">
            "{testimonials[0].quote}"
          </blockquote>
          <p className="font-semibold text-ink">{testimonials[0].name}</p>
          <p className="text-sm text-slate">{testimonials[0].role}</p>
        </div>
      </section>

      {/* Accreditation Carousel - Dedicated Section */}
      <AccreditationCarousel />

      {/* Final CTA */}
      <section className="bg-oak-green py-16">
        <div className="container-hotel px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Ready to Begin the Journey?</h2>
          <p className="text-white/80 mb-8">Applications for 2025 admission are now open.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/school/admissions" className="bg-gold text-ink px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded hover:bg-ochre transition-colors">
              Apply Now
            </Link>
            <Link to="/school/contact" className="border-2 border-white text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded hover:bg-white/10 transition-colors">
              Download Prospectus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;