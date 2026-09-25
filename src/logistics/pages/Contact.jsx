import { useState } from 'react';
import LR_SectionHeading from '../components/LR_SectionHeading';
import { companyInfo } from '../data/company';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Same-Day Delivery',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', company: '', email: '', phone: '', service: 'Same-Day Delivery', message: '' });
  };

  const services = ['Same-Day Delivery', 'Interstate Delivery', 'Corporate Logistics', 'Warehousing', 'Other'];

  return (
    <>
      <div className="bg-lr-surface border-b border-lr-border py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LR_SectionHeading
            eyebrow="Contact"
            title="Let's Move Your Business Forward"
            description="Get in touch with our logistics team."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="border border-lr-lime p-8 text-center">
                <h3 className="text-2xl font-bold text-lr-lime mb-2">Message Sent</h3>
                <p className="text-lr-off-white/60">Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-lr-surface border border-lr-border text-lr-off-white placeholder-lr-off-white/30 focus:outline-none focus:border-lr-lime transition-colors"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-lr-surface border border-lr-border text-lr-off-white placeholder-lr-off-white/30 focus:outline-none focus:border-lr-lime transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-lr-surface border border-lr-border text-lr-off-white placeholder-lr-off-white/30 focus:outline-none focus:border-lr-lime transition-colors"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-lr-surface border border-lr-border text-lr-off-white placeholder-lr-off-white/30 focus:outline-none focus:border-lr-lime transition-colors"
                    required
                  />
                </div>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-lr-surface border border-lr-border text-lr-off-white focus:outline-none focus:border-lr-lime transition-colors"
                >
                  {services.map(service => (
                    <option key={service} value={service} className="bg-lr-black">{service}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Tell us about your logistics needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-lr-surface border border-lr-border text-lr-off-white placeholder-lr-off-white/30 focus:outline-none focus:border-lr-lime transition-colors resize-none"
                  rows={5}
                  required
                />
                <button type="submit" className="w-full bg-lr-lime text-lr-black px-6 py-4 font-semibold uppercase tracking-wider hover:bg-lr-lime-dark transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="border border-lr-border p-6">
              <h3 className="font-semibold text-lr-off-white mb-4">Headquarters</h3>
              <p className="text-lr-off-white/60 text-sm">{companyInfo.address}</p>
            </div>
            <div className="border border-lr-border p-6">
              <h3 className="font-semibold text-lr-off-white mb-4">Contact</h3>
              <p className="text-lr-off-white/60 text-sm mb-2">{companyInfo.phone}</p>
              <p className="text-lr-off-white/60 text-sm mb-2">{companyInfo.email}</p>
              <p className="text-lr-off-white/60 text-sm">{companyInfo.businessHours}</p>
            </div>
            <div className="border border-lr-border p-6">
              <h3 className="font-semibold text-lr-off-white mb-4">WhatsApp</h3>
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lr-lime hover:text-lr-lime-dark transition-colors"
              >
                Chat with SwiftRoute →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;