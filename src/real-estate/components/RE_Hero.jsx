import RE_SearchBar from './RE_SearchBar';
import { companyInfo } from '../data/company';

function RE_Hero() {
  return (
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
  );
}

export default RE_Hero;