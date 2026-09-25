import { useState } from 'react';

function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {faqs.map(faq => (
        <div key={faq.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => toggle(faq.id)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-mint/30 transition-colors"
          >
            <span className="font-medium text-ink">{faq.question}</span>
            <span className={`text-deep-green transition-transform duration-300 ${
              openId === faq.id ? 'rotate-45' : ''
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          {openId === faq.id && (
            <div className="px-5 pb-5">
              <p className="text-slate leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;