import { companyInfo } from '../data/company';
import { testimonials } from '../data/testimonials';

function About() {
  return (
    <>
      <div className="bg-light-gray py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-navy">About Apex Properties</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Story */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl font-bold text-navy mb-6">Our Story</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Apex Properties Abuja was founded in 2012 with a simple mission: 
              to bring transparency and professionalism to Abuja's real estate market.
            </p>
            <p>
              Over the past decade, we have grown from a small team of three to 
              become one of the FCT's most trusted property agencies, helping over 
              1,200 families and businesses find their perfect spaces.
            </p>
            <p>
              Today, we specialise in premium residential and commercial properties 
              across Abuja's most desirable locations, from the diplomatic enclaves 
              of Maitama and Asokoro to the rapidly developing districts of Guzape 
              and Katampe.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-navy text-white rounded-lg p-12 mb-16">
          {[
            { value: companyInfo.stats.propertiesSold, label: 'Properties Sold', suffix: '+' },
            { value: companyInfo.stats.happyClients, label: 'Happy Clients', suffix: '+' },
            { value: companyInfo.stats.yearsExperience, label: 'Years Experience', suffix: '' },
            { value: companyInfo.stats.activeListings, label: 'Active Listings', suffix: '+' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-gold">{stat.value}{stat.suffix}</p>
              <p className="text-sm text-white/70 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Transparency', desc: 'Honest pricing, clear communication, no hidden fees.' },
              { title: 'Local Expertise', desc: 'Deep understanding of Abuja\'s unique property market.' },
              { title: 'Client First', desc: 'Your goals are our priority, always.' },
            ].map(value => (
              <div key={value.title} className="bg-light-gray rounded-lg p-8 text-center">
                <h3 className="font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-sm text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white border border-border rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-gold">★</span>
                  ))}
                </div>
                <p className="text-muted leading-relaxed mb-4">"{t.quote}"</p>
                <p className="font-semibold text-dark-gray">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;