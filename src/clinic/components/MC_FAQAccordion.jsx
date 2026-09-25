import { useState } from 'react';

export default function MC_FAQAccordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id);

  return (
    <div className="border-t border-[#E8E6E0]">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-b border-[#E8E6E0]">
            <button type="button" onClick={() => setOpenId(isOpen ? null : item.id)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
              <span className="text-lg font-semibold text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.question}</span>
              <span className="text-2xl font-light text-[#2A6B6E]">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <p className="max-w-2xl pb-6 pr-10 leading-7 text-[#5F5E5A]">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
