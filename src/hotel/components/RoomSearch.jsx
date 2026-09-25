import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { rooms } from '../data/rooms';

function RoomSearch() {
  const navigate = useNavigate();
  const { updateBooking, openModal } = useBooking();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    roomType: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBooking(formData);
    
    if (formData.roomType) {
      navigate(`/rooms?type=${formData.roomType}`);
    } else {
      navigate('/rooms');
    }
  };

  const roomTypes = [
    { value: '', label: 'All Room Types' },
    ...rooms.map(room => ({
      value: room.category,
      label: room.category === 'room' ? 'Rooms' : room.category === 'suite' ? 'Suites' : 'Villas',
    })).filter((type, index, self) => 
      self.findIndex(t => t.value === type.value) === index
    ),
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-xl shadow-black/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-xs font-medium text-ink uppercase tracking-wider mb-2">
            Check-In
          </label>
          <input
            type="date"
            value={formData.checkIn}
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
            className="w-full px-3 py-2 border border-sand focus:outline-none focus:border-bronze transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-ink uppercase tracking-wider mb-2">
            Check-Out
          </label>
          <input
            type="date"
            value={formData.checkOut}
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
            className="w-full px-3 py-2 border border-sand focus:outline-none focus:border-bronze transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-ink uppercase tracking-wider mb-2">
            Guests
          </label>
          <div className="flex space-x-2">
            <select
              value={formData.adults}
              onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border border-sand focus:outline-none focus:border-bronze transition-colors"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
              ))}
            </select>
            <select
              value={formData.children}
              onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border border-sand focus:outline-none focus:border-bronze transition-colors"
            >
              {[0, 1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num} Child{num > 1 ? 'ren' : ''}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-ink uppercase tracking-wider mb-2">
            Room Type
          </label>
          <select
            value={formData.roomType}
            onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
            className="w-full px-3 py-2 border border-sand focus:outline-none focus:border-bronze transition-colors"
          >
            {roomTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button type="submit" className="btn btn-primary w-full">
            Check Availability
          </button>
        </div>
      </div>
    </form>
  );
}

export default RoomSearch;