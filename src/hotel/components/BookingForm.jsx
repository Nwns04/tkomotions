import { useState } from 'react';
import { rooms } from '../data/rooms';
import { formatNaira } from '../../shared/utils/formatCurrency';
import Input from '../../shared/components/Input';
import Textarea from '../../shared/components/Textarea';

function BookingForm({ selectedRoom: initialRoom, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    specialRequests: '',
  });

  const [selectedRoom, setSelectedRoom] = useState(initialRoom || rooms[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate nights and total
    const nights = calculateNights();
    const total = selectedRoom ? selectedRoom.price * nights : 0;
    
    // Prepare booking details
    const bookingDetails = {
      roomName: selectedRoom?.name || '',
      checkIn: formData.checkIn || 'Not specified',
      checkOut: formData.checkOut || 'Not specified',
      adults: formData.adults,
      children: formData.children,
      nights: nights,
      total: formatNaira(total),
      guestName: formData.name,
    };
    
    // Simulate booking submission
    setTimeout(() => {
      onSuccess(bookingDetails);
    }, 800);
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      const diff = end - start;
      return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    }
    return 1;
  };

  const nights = calculateNights();
  const totalPrice = selectedRoom ? selectedRoom.price * nights : 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Room Selection */}
      <div>
        <label className="block text-sm font-medium text-hotel-ink mb-2">
          Room Type
        </label>
        <select
          value={selectedRoom?.id || ''}
          onChange={(e) => {
            const room = rooms.find(r => r.id === e.target.value);
            setSelectedRoom(room);
          }}
          className="w-full px-4 py-3 border border-hotel-sand rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-bronze/50 focus:border-hotel-bronze transition-all"
          required
        >
          {rooms.map(room => (
            <option key={room.id} value={room.id}>
              {room.name} — {formatNaira(room.price)}/night
            </option>
          ))}
        </select>
      </div>

      {/* Room Summary */}
      {selectedRoom && (
        <div className="flex items-center space-x-4 p-4 bg-hotel-stone border border-hotel-sand">
          <img
            src={selectedRoom.image}
            alt={selectedRoom.name}
            className="w-20 h-20 object-cover"
          />
          <div className="flex-1">
            <p className="font-serif text-lg">{selectedRoom.name}</p>
            <p className="text-sm text-hotel-ink/60">
              {nights} night{nights > 1 ? 's' : ''} · {formData.adults} adult{formData.adults > 1 ? 's' : ''}
              {formData.children > 0 && ` · ${formData.children} child${formData.children > 1 ? 'ren' : ''}`}
            </p>
          </div>
          <div className="text-right">
            <p className="font-medium">{formatNaira(totalPrice)}</p>
            <p className="text-xs text-hotel-ink/40">Total</p>
          </div>
        </div>
      )}

      {/* Date Selection */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-hotel-ink mb-2">
            Check-In
          </label>
          <input
            type="date"
            value={formData.checkIn}
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
            className="w-full px-4 py-3 border border-hotel-sand rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-bronze/50 focus:border-hotel-bronze transition-all"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-hotel-ink mb-2">
            Check-Out
          </label>
          <input
            type="date"
            value={formData.checkOut}
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
            className="w-full px-4 py-3 border border-hotel-sand rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-bronze/50 focus:border-hotel-bronze transition-all"
            required
          />
        </div>
      </div>

      {/* Guests */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-hotel-ink mb-2">
            Adults
          </label>
          <select
            value={formData.adults}
            onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) })}
            className="w-full px-4 py-3 border border-hotel-sand rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-bronze/50 focus:border-hotel-bronze transition-all"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-hotel-ink mb-2">
            Children
          </label>
          <select
            value={formData.children}
            onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) })}
            className="w-full px-4 py-3 border border-hotel-sand rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-bronze/50 focus:border-hotel-bronze transition-all"
          >
            {[0, 1, 2, 3, 4].map(num => (
              <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Contact Details */}
      <Input
        label="Full Name"
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="Your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      
      <Input
        label="Phone"
        type="tel"
        placeholder="Your phone number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      
      <Textarea
        label="Special Requests"
        placeholder="Any special requests or requirements?"
        value={formData.specialRequests}
        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
      />

      {/* Submit Button */}
      <button type="submit" className="btn-hotel btn-hotel-primary w-full">
        Confirm Booking
      </button>
      <p className="text-xs text-hotel-ink/40 text-center">
        This is a demonstration. No actual booking will be made.
      </p>
    </form>
  );
}

export default BookingForm;