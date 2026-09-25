import { formatNaira } from '../../shared/utils/formatCurrency';

function ReservationConfirmation({ bookingDetails }) {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-ember-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-ember-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-serif text-cream mb-2">Reservation Request Received</h3>
      <p className="text-ash mb-6">
        Thank you for choosing Ember. Our team will confirm within 2 hours.
      </p>
      
      {bookingDetails && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6 text-left">
          <p className="text-sm font-medium text-cream mb-4">Reservation Summary</p>
          <div className="space-y-2 text-sm text-ash">
            <p>Name: {bookingDetails.name}</p>
            <p>Date: {bookingDetails.date}</p>
            <p>Time: {bookingDetails.time}</p>
            <p>Party Size: {bookingDetails.partySize} guests</p>
            <p>Seating: {bookingDetails.seating}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReservationConfirmation;