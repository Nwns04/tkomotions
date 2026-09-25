import { useState } from 'react';
import { companyInfo } from '../data/company';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: 'General', message: '' });
  };

  return (
    <>
      <div className="bg-light-gray py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-navy">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-green/10 rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold text-green mb-2">Message Sent</h3>
                <p className="text-muted">We will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-border rounded-lg p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded" required />
                  <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded" />
                  <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded bg-white">
                    {['General', 'Buying', 'Renting', 'Selling', 'Commercial'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded resize-none" rows={6} required />
                <button type="submit" className="w-full bg-gold text-white px-6 py-3 font-semibold rounded hover:bg-navy transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="font-semibold text-navy mb-4">Office Information</h3>
              <p className="text-muted text-sm mb-2">{companyInfo.address}</p>
              <p className="text-muted text-sm mb-2">{companyInfo.phone}</p>
              <p className="text-muted text-sm mb-2">{companyInfo.email}</p>
              <p className="text-muted text-sm">{companyInfo.officeHours}</p>
            </div>

            <div className="bg-light-gray rounded-lg p-6 h-64 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 text-navy/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-muted text-sm">{companyInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;