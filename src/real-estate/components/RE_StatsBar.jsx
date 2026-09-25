import { companyInfo } from '../data/company';

function RE_StatsBar() {
  const stats = [
    { value: companyInfo.stats.propertiesSold, label: 'Properties Sold', suffix: '+' },
    { value: companyInfo.stats.happyClients, label: 'Happy Clients', suffix: '+' },
    { value: companyInfo.stats.activeListings, label: 'Active Listings', suffix: '+' },
    { value: companyInfo.stats.yearsExperience, label: 'Years Experience', suffix: '' },
  ];

  return (
    <div className="bg-navy py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(stat => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-gold">{stat.value}{stat.suffix}</p>
              <p className="text-sm text-white/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RE_StatsBar;