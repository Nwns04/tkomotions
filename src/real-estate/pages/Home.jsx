import { Link } from 'react-router-dom';
import RE_SearchBar from '../components/RE_SearchBar';
import RE_PropertyCard from '../components/RE_PropertyCard';
import RE_AgentCard from '../components/RE_AgentCard';
import RE_ViewingRequestModal from '../components/RE_ViewingRequestModal';
import { properties } from '../data/properties';
import { locations } from '../data/locations';
import { agents } from '../data/agents';
import { companyInfo } from '../data/company';

function Home() {
  const featuredProperties = properties.filter(p => p.featured).slice(0, 6);
  const latestProperties = properties.filter(p => p.isNew).slice(0, 3);
  const featuredAgents = agents.slice(0, 3);

  return (
    <>
      {/* Hero with Search */}
      <section className="relative py-20 bg-light-gray">
        <div className="absolute inset-0">
          <img src={companyInfo.image} alt="Apex Properties" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Find Your Perfect Property in Abuja
          </h1>
          <p className="text-muted text-lg mb-8">
            Premium homes, apartments, and commercial spaces across the FCT.
          </p>
          <RE_SearchBar />
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <p className="text-3xl font-bold text-navy">{companyInfo.stats.propertiesSold}+</p>
              <p className="text-sm text-muted">Properties Sold</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">{companyInfo.stats.happyClients}+</p>
              <p className="text-sm text-muted">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">{companyInfo.stats.yearsExperience} Years</p>
              <p className="text-sm text-muted">Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy">Featured Properties</h2>
            <Link to="/real-estate/properties" className="text-navy font-semibold hover:text-gold transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map(property => (
              <RE_PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Location */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">Browse by Location</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {locations.map(loc => (
              <Link
                key={loc.id}
                to={`/real-estate/properties?location=${loc.name.toLowerCase()}`}
                className="flex-shrink-0 w-56 group"
              >
                <div className="h-40 overflow-hidden rounded-lg mb-3">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <p className="font-semibold text-dark-gray group-hover:text-navy transition-colors">{loc.name}</p>
                <p className="text-sm text-muted">{loc.count} properties</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">Latest Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestProperties.map(property => (
              <RE_PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Apex */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Apex</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Local Expertise', desc: 'Deep knowledge of Abuja\'s property market.' },
              { title: 'Transparency', desc: 'Honest advice with no hidden fees.' },
              { title: 'Premium Service', desc: 'Personalised support at every step.' },
              { title: 'Trusted Network', desc: 'Verified listings and reliable partners.' },
            ].map(item => (
              <div key={item.title} className="text-center">
                <p className="font-semibold text-gold mb-2">{item.title}</p>
                <p className="text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy">Our Agents</h2>
            <Link to="/real-estate/agents" className="text-navy font-semibold hover:text-gold transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredAgents.map(agent => (
              <RE_AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

   {/* CTA Section */}
<section className="py-16 bg-gold">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-white mb-4">Looking to Sell or Rent Your Property?</h2>
    <p className="text-white/90 mb-8">List with Apex and reach thousands of qualified buyers and tenants.</p>
    <Link 
      to="/real-estate/list-property" 
      className="inline-flex bg-white text-gold px-8 py-3 font-semibold rounded hover:bg-navy hover:text-white transition-colors"
    >
      List Your Property
    </Link>
  </div>
</section>

      <RE_ViewingRequestModal />
    </>
  );
}

export default Home;