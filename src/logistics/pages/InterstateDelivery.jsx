import { Link } from 'react-router-dom';
import LR_SectionHeading from '../components/LR_SectionHeading';
import { services } from '../data/services';
import { hubs } from '../data/routes';

function InterstateDelivery() {
  const service = services.find(s => s.id === 'interstate-delivery');

  return (
    <>
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-lr-black/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <p className="font-mono text-lr-lime text-sm uppercase tracking-widest mb-3">{service.number}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-lr-off-white">{service.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-16">
          <LR_SectionHeading
            eyebrow="Nationwide Network"
            title="Connecting All 36 States"
          />
          <p className="text-lr-off-white/60 text-lg leading-relaxed mt-6">
            {service.fullDescription}
          </p>
        </div>

        {/* Hubs */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-lr-off-white mb-8">Our Hubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hubs.map(hub => (
              <div key={hub.name} className="border border-lr-border p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lr-off-white">{hub.name}</h3>
                  <span className="w-2 h-2 bg-lr-green rounded-full animate-pulse" />
                </div>
                <p className="text-lr-off-white/50 text-sm">{hub.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-lr-off-white mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map(feature => (
              <div key={feature} className="border border-lr-border p-4 flex items-center space-x-3">
                <span className="w-2 h-2 bg-lr-lime flex-shrink-0" />
                <span className="text-lr-off-white/70">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-lr-off-white mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.process.map(step => (
              <div key={step.step} className="border border-lr-border p-4">
                <p className="font-mono text-lr-lime text-sm mb-2">{step.step}</p>
                <h3 className="font-semibold text-lr-off-white mb-2">{step.title}</h3>
                <p className="text-lr-off-white/50 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border border-lr-lime p-8 text-center">
          <h2 className="text-2xl font-bold text-lr-off-white mb-4">Ship Across Nigeria</h2>
          <Link to="/logistics/contact" className="inline-flex bg-lr-lime text-lr-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lr-lime-dark transition-colors">
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}

export default InterstateDelivery;