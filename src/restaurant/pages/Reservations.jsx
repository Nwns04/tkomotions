import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ReservationForm from '../components/ReservationForm';
import ReservationConfirmation from '../components/ReservationConfirmation';
import { restaurantInfo } from '../data/restaurant';

function Reservations() {
  const [submitted, setSubmitted] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSuccess = (details) => {
    setBookingDetails(details);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <PageHeader
        title="Reservations"
        subtitle="Reserve your table at Ember"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
      />

      <div className="container-hotel py-16 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <ReservationConfirmation bookingDetails={bookingDetails} />
            ) : (
              <ReservationForm onSuccess={handleSuccess} />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Hours */}
            <div className="bg-charcoal border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-serif font-bold text-cream mb-4">Opening Hours</h3>
              <div className="space-y-3">
                {restaurantInfo.hours.map(({ day, time }) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-ash text-sm">{day}</span>
                    <span className={`text-sm ${time === 'Closed' ? 'text-ember-orange' : 'text-cream'}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="bg-charcoal border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-serif font-bold text-cream mb-4">Good to Know</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-ash mb-1">Dress Code</p>
                  <p className="text-cream">{restaurantInfo.dressCode}</p>
                </div>
                <div>
                  <p className="text-ash mb-1">Reservation Policy</p>
                  <p className="text-cream">Tables held for 15 minutes</p>
                </div>
                <div>
                  <p className="text-ash mb-1">Large Parties</p>
                  <p className="text-cream">For groups of 9+, contact us directly</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-charcoal border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-serif font-bold text-cream mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <p className="text-ash">{restaurantInfo.phone}</p>
                <p className="text-ash">{restaurantInfo.email}</p>
                <a
                  href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-ember-orange hover:text-cream transition-colors"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservations;