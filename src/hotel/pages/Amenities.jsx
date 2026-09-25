import PageHeader from '../components/PageHeader';
import { amenities, roomAmenities } from '../data/amenities';
import BookingEnquiryModal from '../components/BookingEnquiryModal';

function Amenities() {
  return (
    <>
      <PageHeader
        title="Amenities"
        subtitle="Everything you need, nothing you don't"
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
      />

      <div className="container-hotel py-16">
        {/* Amenities List */}
        <div className="space-y-20">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? '' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  src={amenity.image}
                  alt={amenity.name}
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="eyebrow text-bronze mb-4">{amenity.category}</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">{amenity.name}</h2>
                <p className="text-ink/60 leading-relaxed mb-8">{amenity.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {amenity.details.map(detail => (
                    <div key={detail} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-bronze rotate-45" />
                      <span className="text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* In-Room Amenities */}
        <div className="mt-20 bg-stone p-8 md:p-12">
          <div className="text-center mb-12">
            <p className="eyebrow text-bronze mb-4">In Every Room</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light">
              Standard In-Room Amenities
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {roomAmenities.map(amenity => (
              <div key={amenity} className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-bronze flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  );
}

export default Amenities;