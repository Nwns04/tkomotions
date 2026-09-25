import PageHeader from '../components/PageHeader';
import { diningVenues, privateDining } from '../data/dining';
import { openBookingModal } from '../components/BookingEnquiryModal';

function Dining() {
  return (
    <>
      <PageHeader
        title="Dining"
        subtitle="Nigerian coastal cuisine in a refined setting"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
      />

      {/* Venues */}
      <div className="container-hotel py-16 px-4 md:px-6 lg:px-8">
        {diningVenues.map((venue, index) => (
          <div
            key={venue.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 last:mb-16 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="relative overflow-hidden group">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <p className="eyebrow-hotel text-hotel-bronze mb-6">{venue.type}</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">{venue.name}</h2>
              <p className="text-hotel-ink/70 leading-relaxed mb-8">{venue.description}</p>
              
              <div className="space-y-3 mb-10 bg-hotel-stone p-6 rounded-lg border border-hotel-sand">
                <p className="text-sm text-hotel-ink/70 flex items-center">
                  <svg className="w-4 h-4 text-hotel-bronze mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {venue.hours}
                </p>
                <p className="text-sm text-hotel-ink/70 flex items-center">
                  <svg className="w-4 h-4 text-hotel-bronze mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Dress: {venue.dress}
                </p>
              </div>

              <div className="border-t border-hotel-sand pt-8">
                <h3 className="font-medium text-lg mb-6">Highlights</h3>
                <ul className="space-y-4">
                  {venue.dishes.map(dish => (
                    <li key={dish} className="text-hotel-ink/70 flex items-start">
                      <span className="w-2 h-2 bg-hotel-bronze rotate-45 mt-2 mr-4 flex-shrink-0" />
                      <span>{dish}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Private Dining - Redesigned with Image Background */}
        <div className="relative overflow-hidden rounded-lg mt-16">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1920&q=80"
              alt="Private dining at Meridian House"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-hotel-charcoal/90" />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-hotel-charcoal/95 via-hotel-charcoal/85 to-hotel-charcoal/70" />
          </div>

          {/* Content */}
          <div className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <p className="eyebrow-hotel text-hotel-champagne mb-6">Private Events</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
                {privateDining.title}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-12">
                {privateDining.description}
              </p>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {privateDining.options.map((option) => (
                  <div 
                    key={option} 
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-hotel-champagne rotate-45 mr-4 flex-shrink-0" />
                      <p className="text-white text-sm md:text-base">{option}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => openBookingModal()} 
                className="btn-hotel bg-white text-hotel-ink hover:bg-hotel-champagne"
              >
                Enquire for Private Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dining;