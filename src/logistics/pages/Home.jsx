import { Link } from 'react-router-dom';
import LR_Hero from '../components/LR_Hero';
import LR_StatsBar from '../components/LR_StatsBar';
import LR_ServiceRow from '../components/LR_ServiceRow';
import LR_SectionHeading from '../components/LR_SectionHeading';
import LR_QuoteCalculator from '../components/LR_QuoteCalculator';
import { services } from '../data/services';
import { solutions } from '../data/solutions';
import { companyInfo } from '../data/company';

function Home() {
  const featuredServices = services;
  const featuredSolutions = solutions.slice(0, 3);

  return (
    <>
      <LR_Hero />
      <LR_StatsBar />

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LR_SectionHeading
            eyebrow="Our Services"
            title="Logistics Built for Business"
            description="From same-day delivery to nationwide distribution, we move your business forward."
          />
          <div className="mt-12 divide-y divide-lr-border">
            {featuredServices.map(service => (
              <LR_ServiceRow key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why SwiftRoute */}
      <section className="py-20 border-t border-lr-border bg-lr-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LR_SectionHeading
            eyebrow="Why SwiftRoute"
            title="Precision. Speed. Reliability."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-lr-border">
            {[
              { title: 'Real-Time Visibility', desc: 'Track every shipment from pickup to delivery with GPS-enabled fleet tracking.' },
              { title: 'Nationwide Coverage', desc: 'Six hubs across Nigeria connecting all 36 states with scheduled departures.' },
              { title: 'Professional Fleet', desc: '85+ vehicles maintained to the highest standards with trained drivers.' },
            ].map((item, index) => (
              <div key={index} className="py-8 px-6">
                <p className="font-mono text-lr-lime text-sm mb-3">0{index + 1}</p>
                <h3 className="text-xl font-bold text-lr-off-white mb-2">{item.title}</h3>
                <p className="text-lr-off-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Logistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <LR_SectionHeading
              eyebrow="Corporate Solutions"
              title="Your Logistics Partner"
              description="We don't just deliver packages. We become your logistics department — managing fleet, inventory, and distribution so you can focus on your core business."
            />
            <div className="mt-8">
              <Link to="/logistics/services/corporate-logistics" className="bg-lr-lime text-lr-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lr-lime-dark transition-colors inline-block">
                Talk to Our Logistics Team
              </Link>
            </div>
          </div>
          <div className="h-96 overflow-hidden">
            <img src={companyInfo.images.fleet} alt="SwiftRoute fleet" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-20 border-t border-lr-border bg-lr-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LR_SectionHeading
            eyebrow="Industry Solutions"
            title="Built for Your Industry"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSolutions.map(solution => (
              <Link key={solution.id} to="/logistics/solutions" className="group border border-lr-border hover:border-lr-lime transition-colors">
                <div className="h-48 overflow-hidden">
                  <img src={solution.image} alt={solution.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-lr-off-white group-hover:text-lr-lime transition-colors mb-2">{solution.name}</h3>
                  <p className="text-lr-off-white/60 text-sm leading-relaxed">{solution.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="py-20" id="quote">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LR_SectionHeading
            eyebrow="Get an Estimate"
            title="Calculate Your Delivery Cost"
            align="center"
          />
          <div className="mt-12">
            <LR_QuoteCalculator />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;