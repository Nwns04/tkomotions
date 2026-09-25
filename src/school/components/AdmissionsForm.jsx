import { useState } from 'react';

function AdmissionsForm({ onSuccess }) {
  const [formData, setFormData] = useState({ childName: '', dateOfBirth: '', yearGroup: '', parentName: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const reference = `CFA-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
      onSuccess({ ...formData, reference });
      setSubmitting(false);
    }, 500);
  };

  const yearGroups = [
    'Creche / Early Years', 'Nursery', 'Reception', 'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6',
    'JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2', 'SS 3',
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div><label className="block text-sm font-medium text-ink mb-2">Child's Full Name</label><input type="text" value={formData.childName} onChange={(e) => setFormData({ ...formData, childName: e.target.value })} className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green transition-colors rounded" placeholder="Child's name" required /></div>
        <div><label className="block text-sm font-medium text-ink mb-2">Date of Birth</label><input type="date" value={formData.dateOfBirth} onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })} className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green transition-colors rounded" required /></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div><label className="block text-sm font-medium text-ink mb-2">Applying For</label><select value={formData.yearGroup} onChange={(e) => setFormData({ ...formData, yearGroup: e.target.value })} className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green transition-colors rounded bg-white" required><option value="">Select class / level</option>{yearGroups.map(group => <option key={group} value={group}>{group}</option>)}</select></div>
        <div><label className="block text-sm font-medium text-ink mb-2">Parent / Guardian Name</label><input type="text" value={formData.parentName} onChange={(e) => setFormData({ ...formData, parentName: e.target.value })} className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green transition-colors rounded" placeholder="Your name" required /></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div><label className="block text-sm font-medium text-ink mb-2">Email</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green transition-colors rounded" placeholder="you@example.com" required /></div>
        <div><label className="block text-sm font-medium text-ink mb-2">Phone / WhatsApp</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green transition-colors rounded" placeholder="0800 000 0000" required /></div>
      </div>
      <div><label className="block text-sm font-medium text-ink mb-2">Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green transition-colors rounded resize-none" rows={4} placeholder="Questions, preferred entry term, or anything the admissions team should know..." /></div>
      <button type="submit" disabled={submitting} className="btn-school btn-school-primary w-full disabled:opacity-60">{submitting ? 'Submitting Demo Enquiry…' : 'Submit Admission Enquiry'}</button>
      <p className="text-xs text-slate text-center">Demo workflow — no personal information is transmitted or stored.</p>
    </form>
  );
}

export default AdmissionsForm;
