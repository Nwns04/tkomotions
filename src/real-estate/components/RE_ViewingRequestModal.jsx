import { useState } from 'react';
import { usePropertyContext } from '../context/PropertyContext';

function RE_ViewingRequestModal() {
  const { viewingProperty, isViewingModalOpen, closeViewingModal } = usePropertyContext();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', time: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isViewingModalOpen || !viewingProperty) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeViewingModal();
      setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/60" onClick={closeViewingModal} />
      <div className="relative bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-dark-gray">Request Viewing</h3>
          <button onClick={closeViewingModal} className="text-muted hover:text-dark-gray" aria-label="Close">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="font-semibold text-dark-gray mb-2">Request Received</h4>
            <p className="text-sm text-muted">Our team will contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-muted mb-4">Viewing request for: <span className="font-semibold text-dark-gray">{viewingProperty.title}</span></p>
            
            <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded" required />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded" required />
            <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded" required />
            
            <div className="grid grid-cols-2 gap-3">
              <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded" required />
              <input type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded" required />
            </div>
            
            <textarea placeholder="Additional message (optional)" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded resize-none" rows={3} />
            
            <button type="submit" className="w-full bg-gold text-white px-6 py-3 text-sm font-semibold rounded hover:bg-navy transition-colors">
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default RE_ViewingRequestModal;