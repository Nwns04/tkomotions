import { useState } from 'react';
import { eventTypes, privateSpaces } from '../data/privateDining';

function PrivateDiningForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Corporate Dinner',
    date: '',
    guests: '8',
    space: 'chefs-table',
    specialRequests: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      onSuccess(formData);
    }, 800);
  };

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
          <label className="block text-sm font-medium text-cream mb-2">Event Type</label>
          <select
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream focus:outline-none focus:border-ember-orange transition-colors rounded"
          >
            {eventTypes.map(type => (
              <option key={type} value={type} className="bg-ember-black">{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        <div>
          <label className="block text-sm font-medium text-cream mb-2">Number of Guests</label>
          <select
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream focus:outline-none focus:border-ember-orange transition-colors rounded"
          >
            {[6, 8, 10, 12, 14, 16, 18, 20, 24].map(size => (
              <option key={size} value={size} className="bg-ember-black">{size} guests</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-cream mb-2">Preferred Space</label>
        <select
          value={formData.space}
          onChange={(e) => setFormData({ ...formData, space: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream focus:outline-none focus:border-ember-orange transition-colors rounded"
        >
          {privateSpaces.map(space => (
            <option key={space.id} value={space.id} className="bg-ember-black">{space.name}</option>
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
          placeholder="Menu preferences, dietary requirements, AV needs..."
        />
      </div>

      <button type="submit" className="btn-restaurant btn-restaurant-primary w-full">
        Submit Enquiry
      </button>
      <p className="text-xs text-ash/60 text-center">
        This is a demonstration. No actual enquiry will be sent.
      </p>
    </form>
  );
}

export default PrivateDiningForm;