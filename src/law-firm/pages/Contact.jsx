import { useState } from 'react';
import { firm, matterRoutes } from '../data/lawFirm';
import { Arrow, RouteLabel } from '../components/LF_Layout';

const emptyForm = { matter: '', context: '', name: '', email: '' };

export default function Contact() {
  const initialMatter = new URLSearchParams(window.location.search).get('matter') || '';
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ ...emptyForm, matter: initialMatter });

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const next = (event) => { event.preventDefault(); setStep(2); };
  const submit = (event) => { event.preventDefault(); setSubmitted(true); };
  const reset = () => { setSubmitted(false); setStep(1); setForm(emptyForm); };

  return <div className="lf-page">
    <div className="lf-container lf-page-heading">
      <RouteLabel>Next step</RouteLabel>
      <h1>Tell us enough to understand the matter.</h1>
      <p>Please do not include confidential information until an engagement has been confirmed. An enquiry does not establish a client relationship.</p>
    </div>
    <section className="lf-section lf-paper-section">
      <div className="lf-container lf-contact-grid">
        <div className="lf-enquiry-form">
          <div className="lf-step-label"><span className={step === 1 ? 'is-current' : 'is-complete'}>01 Matter</span><span className={step === 2 ? 'is-current' : ''}>02 Your details</span></div>
          {submitted ? <div className="lf-form-success"><RouteLabel>Enquiry received</RouteLabel><h2>We have your starting point.</h2><p>A member of the relevant team will review the information provided. Please remember that this acknowledgement does not establish a client relationship.</p><button type="button" className="lf-text-action" onClick={reset}>Start another enquiry <Arrow /></button></div> : step === 1 ? <form onSubmit={next}>
            <label htmlFor="matter">What is the matter closest to?</label>
            <select id="matter" name="matter" value={form.matter} onChange={update} required><option value="">Select a matter route</option>{matterRoutes.map((route) => <option key={route.id} value={route.label}>{route.label}</option>)}</select>
            <label htmlFor="context">A short description</label>
            <textarea id="context" name="context" value={form.context} onChange={update} placeholder="Share the practical context, without confidential information." required />
            <button className="lf-form-action" type="submit">Continue to your details <Arrow /></button>
          </form> : <form onSubmit={submit}>
            <div className="lf-selected-matter"><span>Selected matter</span><strong>{form.matter}</strong></div>
            <label htmlFor="name">Name</label><input id="name" name="name" value={form.name} onChange={update} required />
            <label htmlFor="email">Work email</label><input id="email" name="email" type="email" value={form.email} onChange={update} required />
            <div className="lf-form-actions"><button className="lf-back-action" type="button" onClick={() => setStep(1)}>Back</button><button className="lf-form-action" type="submit">Review and submit <Arrow /></button></div>
          </form>}
        </div>
        <aside className="lf-contact-aside"><RouteLabel>Offices</RouteLabel>{firm.offices.map((office) => <div className="lf-office" key={office.name}><h3>{office.name}</h3><p>{office.address}</p><a href={`tel:${office.phone}`}>{office.phone}</a></div>)}<RouteLabel>Direct contact</RouteLabel><a href={`mailto:${firm.email}`} className="lf-contact-link">{firm.email}</a></aside>
      </div>
    </section>
  </div>;
}