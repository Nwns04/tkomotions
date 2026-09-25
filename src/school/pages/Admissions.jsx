import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Sidebar from '../components/Sidebar';
import AdmissionsForm from '../components/AdmissionsForm';
import FAQAccordion from '../components/FAQAccordion';
import { faqs } from '../data/faq';
import { schoolInfo } from '../data/school';

function Admissions() {
  const [submission, setSubmission] = useState(null);
  const phone = schoolInfo.whatsapp.replace(/[^0-9]/g, '');
  const whatsappText = encodeURIComponent(`Hello ${schoolInfo.name}, I would like to continue an admissions enquiry.`);

  const sidebarLinks = [
    { label: 'Application Process', path: '/school/admissions#process' },
    { label: 'Fees & Enrolment', path: '/school/admissions#fees' },
    { label: 'Admission Enquiry', path: '/school/admissions#enquiry' },
    { label: 'FAQ', path: '/school/admissions#faq' },
  ];

  const processSteps = [
    { step: 1, title: 'Enquiry', description: 'Tell us the class and entry session you are considering.' },
    { step: 2, title: 'School Tour', description: 'Visit the campus and speak with the admissions team.' },
    { step: 3, title: 'Application', description: 'Submit the required student and guardian information.' },
    { step: 4, title: 'Assessment', description: 'Complete any age-appropriate assessment or meeting.' },
    { step: 5, title: 'Offer & Enrolment', description: 'Receive next steps, fee information, and enrolment guidance.' },
  ];

  return (
    <div className="bg-school-cream">
      <div className="bg-oak-green text-white py-12"><div className="container-hotel px-4 md:px-6 lg:px-8"><Breadcrumbs items={[{ label: 'Admissions' }]} /><h1 className="text-4xl font-serif font-bold">Admissions</h1><p className="text-sage mt-2">A clear, parent-friendly path from first enquiry to enrolment.</p></div></div>
      <div className="container-hotel py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1"><Sidebar title="Admissions Links" links={sidebarLinks} /></div>
          <div className="lg:col-span-3 space-y-16">
            <section id="process"><h2 className="text-3xl font-serif font-bold text-ink mb-6">Application Process</h2><div className="grid grid-cols-1 md:grid-cols-5 gap-4">{processSteps.map(step => <div key={step.step} className="bg-white border border-slate/20 rounded-lg p-4 text-center"><div className="w-10 h-10 bg-oak-green text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">{step.step}</div><h3 className="font-semibold text-ink text-sm mb-1">{step.title}</h3><p className="text-xs text-slate">{step.description}</p></div>)}</div></section>
            <section id="fees"><div className="bg-white border border-slate/20 rounded-xl p-8"><p className="text-deep-green text-sm font-semibold tracking-[0.2em] uppercase mb-2">Fees & Enrolment</p><h2 className="text-3xl font-serif font-bold text-ink mb-4">Request the Current Fee Schedule</h2><p className="text-slate leading-relaxed mb-6">Schools can choose whether to publish fees publicly or provide them on request. This demo uses the more flexible approach: parents request the current fee guide from admissions.</p><div className="flex flex-col sm:flex-row gap-3"><a href={`https://wa.me/${phone}?text=${encodeURIComponent(`Hello ${schoolInfo.name}, please send me the current school fee and enrolment information.`)}`} target="_blank" rel="noreferrer" className="btn-school btn-school-primary text-center">Request Fees on WhatsApp</a><a href={`mailto:${schoolInfo.email}?subject=Fee%20and%20Enrolment%20Enquiry`} className="btn-school btn-school-outline text-center">Request by Email</a></div></div></section>
            <section id="enquiry"><h2 className="text-3xl font-serif font-bold text-ink mb-6">Admissions Enquiry</h2>{submission ? <div className="bg-mint p-8 rounded-lg"><h3 className="text-2xl font-serif font-bold text-oak-green mb-2">Demo Enquiry Received</h3><p className="text-slate mb-2">Reference: <strong>{submission.reference}</strong></p><p className="text-slate mb-6">On a live school website this can notify admissions, save the enquiry to a dashboard, send an acknowledgement, and continue the conversation on WhatsApp.</p><div className="flex flex-col sm:flex-row gap-3"><a href={`https://wa.me/${phone}?text=${whatsappText}`} target="_blank" rel="noreferrer" className="btn-school btn-school-primary text-center">Continue on WhatsApp</a><button onClick={() => setSubmission(null)} className="btn-school btn-school-outline">Submit Another Demo</button></div></div> : <AdmissionsForm onSuccess={setSubmission} />}</section>
            <section id="faq"><h2 className="text-3xl font-serif font-bold text-ink mb-6">Frequently Asked Questions</h2><FAQAccordion faqs={faqs} /></section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
