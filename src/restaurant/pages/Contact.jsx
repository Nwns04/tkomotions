import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { restaurantInfo } from '../data/restaurant';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: 'General', message: '' });
  };

  const subjects = ['General', 'Feedback', 'Press', 'Careers', 'Partnerships'];

  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="We would love to hear from you"
        image="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
      />

      <div className="container-hotel py-16 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-cream mb-8">Send a Message</h2>
            
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-ember-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-ember-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-cream mb-2">Message Sent</h3>
                <p className="text-ash">
                  Thank you for reaching out. We will respond within 48 hours.
                </p>
              </div>
            ) : (
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
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cream mb-2">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream focus:outline-none focus:border-ember-orange transition-colors rounded"
                    >
                      {subjects.map(subject => (
                        <option key={subject} value={subject} className="bg-ember-black">{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-cream mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream placeholder-ash/50 focus:outline-none focus:border-ember-orange transition-colors rounded resize-none"
                    rows={6}
                    placeholder="Your message"
                    required
                  />
                </div>

                <button type="submit" className="btn-restaurant btn-restaurant-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-cream mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div>
                <p className="text-ember-orange text-xs uppercase tracking-wider mb-3">Address</p>
                <p className="text-ash">{restaurantInfo.address}</p>
              </div>

              <div>
                <p className="text-ember-orange text-xs uppercase tracking-wider mb-3">Phone</p>
                <p className="text-ash">{restaurantInfo.phone}</p>
              </div>

              <div>
                <p className="text-ember-orange text-xs uppercase tracking-wider mb-3">Email</p>
                <p className="text-ash">{restaurantInfo.email}</p>
              </div>

              <div>
                <p className="text-ember-orange text-xs uppercase tracking-wider mb-3">WhatsApp</p>
                <a
                  href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ash hover:text-ember-orange transition-colors"
                >
                  {restaurantInfo.whatsapp}
                </a>
              </div>

              <div>
                <p className="text-ember-orange text-xs uppercase tracking-wider mb-3">Social Media</p>
                <div className="flex space-x-4">
                  <a href={restaurantInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-ash hover:text-ember-orange transition-colors">
                    Instagram
                  </a>
                  <a href={restaurantInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="text-ash hover:text-ember-orange transition-colors">
                    Facebook
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-charcoal h-64 rounded-lg flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <svg className="w-12 h-12 text-ember-orange/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-ash text-sm">14 Ember Lane, Maitama, Abuja</p>
                </div>
              </div>

              {/* Careers */}
              <div className="bg-charcoal border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-serif font-bold text-cream mb-2">Careers</h3>
                <p className="text-ash text-sm mb-3">
                  Join our team. Send your CV to careers@ember.ng
                </p>
              </div>

              {/* Press */}
              <div className="bg-charcoal border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-serif font-bold text-cream mb-2">Press</h3>
                <p className="text-ash text-sm mb-3">
                  For media enquiries, contact press@ember.ng
                </p>
                <button className="text-ember-orange text-sm hover:text-cream transition-colors">
                  Download Press Kit →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;