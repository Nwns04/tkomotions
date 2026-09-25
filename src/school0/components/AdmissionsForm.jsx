import { useState } from 'react';

function AdmissionsForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    childName: '',
    dateOfBirth: '',
    yearGroup: '',
    parentName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      onSuccess(formData);
    }, 800);
  };

  const yearGroups = [
    'Nursery (18 months – 4 years)',
    'Reception (4 – 5 years)',
    'Year 1 (5 – 6 years)',
    'Year 2 (6 – 7 years)',
    'Year 3 (7 – 8 years)',
    'Year 4 (8 – 9 years)',
    'Year 5 (9 – 10 years)',
    'Year 6 (10 – 11 years)',
    'Year 7 (11 – 12 years)',
    'Year 8 (12 – 13 years)',
    'Year 9 (13 – 14 years)',
    'Year 10 (14 – 15 years)',
    'Year 11 (15 – 16 years)',
    'Year 12 (16 – 17 years)',
    'Year 13 (17 – 18 years)',
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-ink mb-2">Child's Full Name</label>
          <input
            type="text"
            value={formData.childName}
            onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
            className="w-full px-4 py-3 border border-slate/30 text-ink placeholder-slate/50 focus:outline-none focus:border-oak-green transition-colors rounded"
            placeholder="Child's name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-2">Date of Birth</label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green transition-colors rounded"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-ink mb-2">Year Group</label>
          <select
            value={formData.yearGroup}
            onChange={(e) => setFormData({ ...formData, yearGroup: e.target.value })}
            className="w-full px-4 py-3 border border-slate/30 text-ink focus:outline-none focus:border-oak-green transition-colors rounded bg-white"
            required
          >
            <option value="">Select Year Group</option>
            {yearGroups.map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-2">Parent/Guardian Name</label>
          <input
            type="text"
            value={formData.parentName}
            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            className="w-full px-4 py-3 border border-slate/30 text-ink placeholder-slate/50 focus:outline-none focus:border-oak-green transition-colors rounded"
            placeholder="Your name"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-ink mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-slate/30 text-ink placeholder-slate/50 focus:outline-none focus:border-oak-green transition-colors rounded"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-2">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-slate/30 text-ink placeholder-slate/50 focus:outline-none focus:border-oak-green transition-colors rounded"
            placeholder="Your phone"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-slate/30 text-ink placeholder-slate/50 focus:outline-none focus:border-oak-green transition-colors rounded resize-none"
          rows={4}
          placeholder="Any questions or additional information..."
        />
      </div>

      <button type="submit" className="btn-school btn-school-primary w-full">
        Submit Enquiry
      </button>
      <p className="text-xs text-slate text-center">
        This is a demonstration. No actual enquiry will be sent.
      </p>
    </form>
  );
}

export default AdmissionsForm;