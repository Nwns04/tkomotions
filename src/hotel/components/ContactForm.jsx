import { useState } from 'react';
import Input from '../../shared/components/Input';
import Select from '../../shared/components/Select';
import Textarea from '../../shared/components/Textarea';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 border border-sand text-center">
        <div className="w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-serif mb-2">Message Sent</h3>
        <p className="text-ink/60">
          Thank you for reaching out. We will respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 border border-sand space-y-4">
      <Input
        label="Full Name"
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <Input
        label="Email"
        type="email"
        placeholder="Your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Input
        label="Phone"
        type="tel"
        placeholder="Your phone number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <Select
        label="Subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        options={[
          { value: 'reservation', label: 'Reservation' },
          { value: 'private-events', label: 'Private Events' },
          { value: 'press', label: 'Press' },
          { value: 'general', label: 'General Enquiry' },
        ]}
      />
      <Textarea
        label="Message"
        placeholder="Your message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />
      <button type="submit" className="btn btn-primary w-full">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;