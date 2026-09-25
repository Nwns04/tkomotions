import { Link } from 'react-router-dom';
import LR_SectionHeading from '../components/LR_SectionHeading';
import LR_WhatsAppCTA from '../components/LR_WhatsAppCTA';
import { services } from '../data/services';

function SameDayDelivery() {
  const service = services.find(s => s.id === 'same-day-delivery');

  return (
    <>
      {/* Hero */}
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
        {/* Description */}
        <div className="max-w-3xl mb-16">
          <LR_SectionHeading
            eyebrow="Overview"
            title="Urgent Deliveries, Handled"
          />
          <p className="text-lr-off-white/60 text-lg leading-relaxed mt-6">
            {service.fullDescription}
          </p>
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

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-lr-off-white mb-8">Frequently Asked</h2>
          <div className="space-y-4">
            {service.faqs.map(faq => (
              <div key={faq.question} className="border border-lr-border p-6">
                <h3 className="font-semibold text-lr-off-white mb-2">{faq.question}</h3>
                <p className="text-lr-off-white/60 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border border-lr-lime p-8 text-center">
          <h2 className="text-2xl font-bold text-lr-off-white mb-4">Need Same-Day Delivery?</h2>
          <p className="text-lr-off-white/60 mb-6">Get a quote now or chat with our team.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/logistics/contact" className="bg-lr-lime text-lr-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lr-lime-dark transition-colors">
              Get a Quote
            </Link>
            <a
              href={`https://wa.me/2340000000000`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-lr-lime text-lr-lime px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lr-lime hover:text-lr-black transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SameDayDelivery;