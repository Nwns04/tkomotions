import LR_SectionHeading from '../components/LR_SectionHeading';
import LR_ServiceRow from '../components/LR_ServiceRow';
import { services } from '../data/services';

function Services() {
  return (
    <>
      <div className="bg-lr-surface border-b border-lr-border py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LR_SectionHeading
            eyebrow="Services"
            title="What We Do"
            description="Comprehensive logistics services designed for businesses of every size."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="divide-y divide-lr-border">
          {services.map(service => (
            <LR_ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;