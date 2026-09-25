import { Link } from 'react-router-dom';
import LR_SectionHeading from '../components/LR_SectionHeading';
import { services } from '../data/services';
import { companyInfo } from '../data/company';

function Warehousing() {
  const service = services.find(s => s.id === 'warehousing');

  const processSteps = [
    { step: '01', title: 'Receive', description: 'Goods received and logged into our inventory system.' },
    { step: '02', title: 'Store', description: 'Secure storage in our facilities.' },
    { step: '03', title: 'Pick', description: 'Items picked according to orders.' },
    { step: '04', title: 'Pack', description: 'Professional packing for safe transit.' },
    { step: '05', title: 'Dispatch', description: 'Shipped via our nationwide network.' },
  ];

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
            eyebrow="Storage & Fulfillment"
            title="Your Inventory, Managed"
          />
          <p className="text-lr-off-white/60 text-lg leading-relaxed mt-6">
            {service.fullDescription}
          </p>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-lr-off-white mb-8">Fulfillment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map(step => (
              <div key={step.step} className="border border-lr-border p-4 text-center">
                <p className="font-mono text-lr-lime text-sm mb-2">{step.step}</p>
                <h3 className="font-semibold text-lr-off-white mb-2">{step.title}</h3>
                <p className="text-lr-off-white/50 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warehouse Image */}
        <div className="mb-16">
          <img src={companyInfo.images.warehouse} alt="SwiftRoute warehouse" className="w-full h-96 object-cover" loading="lazy" />
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

        {/* CTA */}
        <div className="border border-lr-lime p-8 text-center">
          <h2 className="text-2xl font-bold text-lr-off-white mb-4">Need Storage Solutions?</h2>
          <Link to="/logistics/contact" className="inline-flex bg-lr-lime text-lr-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lr-lime-dark transition-colors">
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}

export default Warehousing;