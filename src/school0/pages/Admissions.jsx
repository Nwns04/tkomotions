import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Sidebar from '../components/Sidebar';
import AdmissionsForm from '../components/AdmissionsForm';
import FAQAccordion from '../components/FAQAccordion';
import { feeStructure } from '../data/programs';
import { faqs } from '../data/faq';
import { formatNaira } from '../../shared/utils/formatCurrency';

function Admissions() {
  const [submitted, setSubmitted] = useState(false);

  const sidebarLinks = [
    { label: 'Application Process', path: '/school/admissions#process' },
    { label: 'Tuition Fees', path: '/school/admissions#fees' },
    { label: 'Scholarships', path: '/school/admissions#scholarships' },
    { label: 'FAQ', path: '/school/admissions#faq' },
  ];

  const processSteps = [
    { step: 1, title: 'Enquiry', description: 'Complete the online enquiry form.' },
    { step: 2, title: 'Application', description: 'Submit full application with documents.' },
    { step: 3, title: 'Assessment', description: 'Age-appropriate assessment.' },
    { step: 4, title: 'Interview', description: 'Family meeting with Head of School.' },
    { step: 5, title: 'Offer', description: 'Receive offer letter.' },
  ];

  return (
    <div className="bg-school-cream">
      <div className="bg-oak-green text-white py-12">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Admissions' }]} />
          <h1 className="text-4xl font-serif font-bold">Admissions</h1>
        </div>
      </div>

      <div className="container-hotel py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Sidebar title="Admissions Links" links={sidebarLinks} />
          </div>

          <div className="lg:col-span-3 space-y-16">
            {/* Process */}
            <section id="process">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Application Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {processSteps.map(step => (
                  <div key={step.step} className="bg-white border border-slate/20 rounded-lg p-4 text-center">
                    <div className="w-10 h-10 bg-oak-green text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-ink text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-slate">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Fee Table */}
            <section id="fees">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Tuition Fees 2024/2025</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-slate/20">
                  <thead className="bg-oak-green text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm">Year Group</th>
                      <th className="px-4 py-3 text-left text-sm">Tuition (per term)</th>
                      <th className="px-4 py-3 text-left text-sm">Lunch (per term)</th>
                      <th className="px-4 py-3 text-left text-sm">Total (per annum)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map(fee => (
                      <tr key={fee.yearGroup} className="border-b border-slate/10 last:border-0">
                        <td className="px-4 py-3 font-medium text-ink">{fee.yearGroup}</td>
                        <td className="px-4 py-3 text-slate">{formatNaira(fee.tuitionPerTerm)}</td>
                        <td className="px-4 py-3 text-slate">{formatNaira(fee.lunchPerTerm)}</td>
                        <td className="px-4 py-3 text-slate">{formatNaira(fee.totalPerAnnum)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Enquiry Form */}
            <section id="enquiry">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Admissions Enquiry</h2>
              {submitted ? (
                <div className="bg-mint p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-serif font-bold text-oak-green mb-2">Enquiry Received</h3>
                  <p className="text-slate">Our admissions team will contact you within 48 hours.</p>
                </div>
              ) : (
                <AdmissionsForm onSuccess={() => setSubmitted(true)} />
              )}
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Frequently Asked Questions</h2>
              <FAQAccordion faqs={faqs} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admissions;