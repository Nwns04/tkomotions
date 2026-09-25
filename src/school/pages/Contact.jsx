import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { schoolInfo } from '../data/school';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: 'General', message: '' });
  };

  const departments = [
    { name: 'Admissions Office', email: 'admissions@oakbridge.edu.ng', phone: '+234 000 000 0001' },
    { name: 'Primary School Office', email: 'primary@oakbridge.edu.ng', phone: '+234 000 000 0002' },
    { name: 'Secondary School Office', email: 'secondary@oakbridge.edu.ng', phone: '+234 000 000 0003' },
    { name: 'Bursary', email: 'bursary@oakbridge.edu.ng', phone: '+234 000 000 0004' },
  ];

  return (
    <div className="bg-school-cream">
      <div className="bg-oak-green text-white py-12">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <h1 className="text-4xl font-serif font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="container-hotel py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-mint p-8 rounded-lg text-center">
                <h3 className="text-2xl font-serif font-bold text-oak-green mb-2">Message Sent</h3>
                <p className="text-slate">Thank you for reaching out. We will respond within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate/20 rounded-lg p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Full Name</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green rounded" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green rounded" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Phone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Subject</label>
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green rounded bg-white">
                      {['General', 'Admissions', 'Feedback', 'Press', 'Careers'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Message</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green rounded resize-none" rows={6} required />
                </div>
                <button type="submit" className="w-full bg-oak-green text-white px-6 py-3 text-sm font-semibold rounded hover:bg-deep-green transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-slate/20 rounded-lg p-6">
              <h3 className="font-serif font-bold text-ink mb-4">Contact Information</h3>
              <p className="text-slate text-sm mb-2">{schoolInfo.address}</p>
              <p className="text-slate text-sm mb-2">{schoolInfo.phone}</p>
              <p className="text-slate text-sm">{schoolInfo.email}</p>
            </div>

            <div className="bg-soft-gray rounded-lg p-6">
              <h3 className="font-serif font-bold text-ink mb-4">Departments</h3>
              <div className="space-y-4">
                {departments.map(dept => (
                  <div key={dept.name} className="border-b border-slate/10 last:border-0 pb-3 last:pb-0">
                    <p className="font-medium text-ink text-sm">{dept.name}</p>
                    <p className="text-slate text-xs">{dept.email}</p>
                    <p className="text-slate text-xs">{dept.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;