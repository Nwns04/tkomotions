import { useState } from 'react';
import { restaurantInfo } from '../data/restaurant';

function ReservationForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    partySize: '2',
    seating: 'main',
    specialRequests: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      onSuccess(formData);
    }, 800);
  };

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
  ];

  const seatingOptions = [
    { value: 'main', label: 'Main Dining Room' },
    { value: 'fire-kitchen', label: 'Fire Kitchen Counter' },
    { value: 'bar', label: 'The Ember Bar' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-cream mb-2">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream placeholder-ash/50 focus:outline-none focus:border-ember-orange transition-colors rounded"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-cream mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream placeholder-ash/50 focus:outline-none focus:border-ember-orange transition-colors rounded"
            placeholder="Your email"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-cream mb-2">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream placeholder-ash/50 focus:outline-none focus:border-ember-orange transition-colors rounded"
            placeholder="Your phone"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-cream mb-2">Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream placeholder-ash/50 focus:outline-none focus:border-ember-orange transition-colors rounded"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-cream mb-2">Time</label>
          <select
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream focus:outline-none focus:border-ember-orange transition-colors rounded"
          >
            {timeSlots.map(time => (
              <option key={time} value={time} className="bg-ember-black">{time}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-cream mb-2">Party Size</label>
          <select
            value={formData.partySize}
            onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream focus:outline-none focus:border-ember-orange transition-colors rounded"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(size => (
              <option key={size} value={size} className="bg-ember-black">
                {size} {size === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-cream mb-2">Seating Preference</label>
        <select
          value={formData.seating}
          onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream focus:outline-none focus:border-ember-orange transition-colors rounded"
        >
          {seatingOptions.map(option => (
            <option key={option.value} value={option.value} className="bg-ember-black">
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-cream mb-2">Special Requests</label>
        <textarea
          value={formData.specialRequests}
          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream placeholder-ash/50 focus:outline-none focus:border-ember-orange transition-colors rounded resize-none"
          rows={4}
          placeholder="Allergies, celebrations, accessibility needs..."
        />
      </div>

      <button type="submit" className="btn-restaurant btn-restaurant-primary w-full">
        Confirm Reservation
      </button>
      <p className="text-xs text-ash/60 text-center">
        This is a demonstration. No actual reservation will be made.
      </p>
    </form>
  );
}

export default ReservationForm;