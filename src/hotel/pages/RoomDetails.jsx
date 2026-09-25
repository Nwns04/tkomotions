import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { rooms } from '../data/rooms';
import { formatNaira } from '../../shared/utils/formatCurrency';
import { useBooking } from '../context/BookingContext';

import RoomCard from '../components/RoomCard';

function RoomDetails() {
  const { roomId } = useParams();
  const { openModal } = useBooking();
  const [activeImage, setActiveImage] = useState(0);

  const room = rooms.find(r => r.id === roomId);
  const relatedRooms = rooms
    .filter(r => r.id !== roomId && r.category === room?.category)
    .slice(0, 3);

  useEffect(() => {
    if (room) {
      gsap.fromTo('.room-details-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [room]);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">Room Not Found</h1>
          <Link to="/rooms" className="btn btn-primary">
            Back to Rooms
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={room.gallery[activeImage]}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <Link
          to="/rooms"
          className="absolute top-24 left-8 text-white hover:text-champagne transition-colors flex items-center space-x-2"
        >
          <span>←</span>
          <span>All Rooms</span>
        </Link>
        <div className="absolute bottom-12 left-8 right-8">
          <p className="eyebrow text-champagne mb-2">
            {room.category === 'room' ? 'Room' : room.category === 'suite' ? 'Suite' : 'Villa'}
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-light text-white">
            {room.name}
          </h1>
        </div>
      </div>

      {/* Gallery Thumbnails */}
      <div className="container-hotel -mt-16 relative z-10">
        <div className="flex space-x-4">
          {room.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-24 h-24 overflow-hidden border-2 transition-all ${
                activeImage === index ? 'border-bronze' : 'border-white/50'
              }`}
            >
              <img src={image} alt={`${room.name} ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="room-details-content container-hotel py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-light mb-6">About This Room</h2>
            <div className="prose prose-lg max-w-none space-y-4">
              {room.description.split('. ').map((sentence, index, arr) => (
                <p key={index} className="text-ink/70 leading-relaxed">
                  {sentence}{index < arr.length - 1 ? '.' : ''}
                </p>
              ))}
            </div>

            {/* Amenities */}
            <h3 className="text-2xl font-serif font-light mt-12 mb-6">Room Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {room.amenities.map(amenity => (
                <div key={amenity} className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-bronze flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white border border-sand p-6">
              <p className="text-xs text-ink/40 uppercase tracking-wider mb-2">From</p>
              <p className="text-3xl font-serif mb-4">
                {formatNaira(room.price)}
                <span className="text-sm text-ink/40 font-sans"> / night</span>
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-ink/60">Guests</span>
                  <span>{room.capacity} Guests</span>
                </div>
                <div className="w-full h-px bg-sand" />
                <div className="flex items-center justify-between">
                  <span className="text-ink/60">Beds</span>
                  <span>{room.beds}</span>
                </div>
                <div className="w-full h-px bg-sand" />
                <div className="flex items-center justify-between">
                  <span className="text-ink/60">Size</span>
                  <span>{room.size} m²</span>
                </div>
              </div>

              <button
                onClick={() => openModal(room)}
                className="btn btn-primary w-full"
              >
                Reserve This Room
              </button>
            </div>
          </div>
        </div>

        {/* Related Rooms */}
        {relatedRooms.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-serif font-light mb-8">Other Rooms You May Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedRooms.map(relatedRoom => (
                <RoomCard key={relatedRoom.id} room={relatedRoom} />
              ))}
            </div>
          </div>
        )}
      </div>


    </>
  );
}

export default RoomDetails;