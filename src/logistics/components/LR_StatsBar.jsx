import { companyInfo } from '../data/company';

function LR_StatsBar() {
  const stats = [
    { value: '250K+', label: 'Deliveries Completed' },
    { value: '36', label: 'States Covered' },
    { value: '98.7%', label: 'On-Time Delivery' },
    { value: '24/7', label: 'Shipment Visibility' },
  ];

  return (
    <div className="border-y border-lr-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-lr-border">
          {stats.map((stat, index) => (
            <div key={index} className="py-8 px-6">
              <p className="text-3xl md:text-4xl font-bold text-lr-off-white mb-1">{stat.value}</p>
              <p className="text-xs font-mono uppercase tracking-wider text-lr-off-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LR_StatsBar;