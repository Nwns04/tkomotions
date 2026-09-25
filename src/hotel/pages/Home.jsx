import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import RoomSearch from '../components/RoomSearch';
import RoomCard from '../components/RoomCard';
import SectionHeading from '../components/SectionHeading';
import Testimonial from '../components/Testimonial';
import { openBookingModal } from '../components/BookingEnquiryModal';
import { rooms } from '../data/rooms';
import { testimonials } from '../data/testimonials';
import { amenities } from '../data/amenities';
import { hotelInfo } from '../data/hotel';

function Home() {
  const featuredRooms = rooms.filter(room => room.featured).slice(0, 3);
  const previewAmenities = amenities.slice(0, 5);
  const galleryPreview = [
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
  ];

  return (
    <>
      <Hero />

      {/* Booking Search */}
      <div className="relative z-10 -mt-16 container-hotel px-4 md:px-6 lg:px-8">
        <RoomSearch />
      </div>

      {/* Positioning Statement - More spacing */}
      <section className="section-padding-hotel bg-hotel-stone">
        <div className="container-hotel text-center max-w-4xl px-4 md:px-6 lg:px-8">
          <p className="eyebrow-hotel text-hotel-bronze mb-6">The House</p>
          <blockquote className="text-3xl md:text-4xl font-serif font-light italic text-hotel-ink leading-relaxed mb-10">
            "We built Meridian House for people who have seen the world 
            and still want a place to disappear into."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-hotel-bronze" />
            <p className="text-sm text-hotel-ink/50 uppercase tracking-wider">Adaeze Okonkwo, General Manager</p>
            <div className="w-16 h-px bg-hotel-bronze" />
          </div>
        </div>
      </section>

      {/* Featured Rooms - More spacing */}
      <section className="section-padding-hotel bg-white">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Stay With Us"
            title="Featured Rooms & Suites"
            description="Each space has been designed with intention — natural materials, soft light, and a sense of calm that is rare in the city."
            className="mb-16 md:mb-20"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-8">
            {featuredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/hotel/rooms" className="btn-hotel btn-hotel-outline">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Hotel Experience - More spacing */}
      <section className="section-padding-hotel bg-hotel-charcoal text-white">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Experience"
            title="A House of Quiet Rituals"
            description="Morning coffee in the loggia. An afternoon by the pool. A book from the library. Dinner at Ori. These are the rhythms of Meridian House."
            light
            className="mb-16 md:mb-20"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-8">
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80"
                alt="The Library"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <p className="text-white/60 text-sm leading-relaxed">
                The library at midday, when the light falls through the louvers and the city feels far away.
              </p>
            </div>
            <div className="space-y-6 md:mt-12">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
                alt="The Pool"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <p className="text-white/60 text-sm leading-relaxed">
                The pool at dusk, when the water turns gold and the frangipani releases its evening scent.
              </p>
            </div>
            <div className="space-y-6 md:mt-24">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Dining"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <p className="text-white/60 text-sm leading-relaxed">
                A table at Ori, where Chef Tayo Bamidele tells the story of Nigerian coastal cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Preview - More spacing */}
      <section className="section-padding-hotel bg-hotel-stone">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-6 lg:px-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
              alt="Ori Restaurant"
              className="w-full h-[400px] md:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-hotel-bronze text-white p-6 hidden lg:block">
              <p className="text-xs uppercase tracking-wider mb-1">Signature</p>
              <p className="text-2xl font-serif">Ori</p>
            </div>
          </div>
          <div className="lg:pl-8">
            <p className="eyebrow-hotel text-hotel-bronze mb-6">Dining</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">
              A Table at Ori
            </h2>
            <p className="text-lg text-hotel-ink/60 leading-relaxed mb-8">
              Named for the Yoruba word for "head" or "consciousness," Ori is our 
              signature restaurant. Nigerian produce, open fire, and a tasting menu 
              that changes with the seasons.
            </p>
            <p className="text-hotel-ink/60 mb-10">
              The Palm Bar serves vintage champagne and rare whiskies until late.
            </p>
            <Link to="/hotel/dining" className="btn-hotel btn-hotel-dark">
              Explore Dining
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Preview - More spacing */}
      <section className="section-padding-hotel bg-white">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Amenities"
            title="Everything You Need, Nothing You Don't"
            className="mb-16 md:mb-20"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mt-8">
            {previewAmenities.map(amenity => (
              <div key={amenity.id} className="text-center group">
                <div className="h-24 w-24 mx-auto mb-6 overflow-hidden rounded-full">
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-medium">{amenity.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/hotel/amenities" className="btn-hotel btn-hotel-outline">
              View All Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview - More spacing */}
      <section className="section-padding-hotel bg-hotel-stone">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="The House in Pictures"
            className="mb-16 md:mb-20"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
            {galleryPreview.map((image, index) => (
              <Link
                key={index}
                to="/hotel/gallery"
                className="relative h-48 md:h-64 overflow-hidden group"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/hotel/gallery" className="btn-hotel btn-hotel-outline">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - More spacing */}
      <section className="section-padding-hotel bg-white">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <Testimonial testimonials={testimonials} />
        </div>
      </section>

      {/* Location - More spacing */}
      <section className="section-padding-hotel bg-hotel-stone">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-6 lg:px-8">
          <div>
            <p className="eyebrow-hotel text-hotel-bronze mb-6">Location</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">
              The Quiet Side of Lagos
            </h2>
            <p className="text-lg text-hotel-ink/60 leading-relaxed mb-10">
              Meridian House is tucked into a leafy corner of old Ikoyi, 
              minutes from the business of Victoria Island but a world away 
              from its noise.
            </p>
            <ul className="space-y-6">
              {hotelInfo.nearby.map(place => (
                <li key={place.name} className="flex items-center justify-between">
                  <span>{place.name}</span>
                  <span className="text-hotel-ink/40 text-sm">{place.distance}</span>
                </li>
              ))}
            </ul>
            <Link to="/hotel/about" className="btn-hotel btn-hotel-dark mt-10">
              Plan Your Arrival
            </Link>
          </div>
          <div className="relative h-[400px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80"
              alt="The Gardens"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Final CTA - More spacing */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
          alt="Pool at night"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-light text-white mb-8">
              The House is Ready
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Your quiet address in Lagos awaits.
            </p>
            <button 
              onClick={() => openBookingModal()} 
              className="btn-hotel btn-hotel-primary"
            >
              Reserve Your Stay
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;