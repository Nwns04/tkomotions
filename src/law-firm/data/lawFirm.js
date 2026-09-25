export const firm = {
  name: 'Adeyemi & Partners',
  shortName: 'A&P',
  proposition: 'Clear counsel for decisions that carry weight.',
  description: 'A corporate law firm helping organisations understand complex matters, protect what matters, and move forward with considered counsel.',
  phone: '+234 (0) 1 700 2480',
  email: 'enquiries@adeyemipartners.com',
  images: {
    office: '/images/law-firm-office.svg',
    documents: '/images/law-firm-documents.svg',
    meeting: '/images/law-firm-meeting.svg',
  },
  offices: [
    { name: 'Lagos', address: '4B Adeola Odeku Street, Victoria Island', phone: '+234 (0) 1 700 2480' },
    { name: 'Abuja', address: '18 Agadez Crescent, Wuse 2', phone: '+234 (0) 9 460 2480' },
  ],
};

export const matterRoutes = [
  { id: 'transaction', label: 'A transaction or restructuring', detail: 'Entering, negotiating, acquiring, or reorganising a business.', practices: ['Corporate Law', 'Commercial Law', 'Tax Advisory'] },
  { id: 'dispute', label: 'A dispute or threatened claim', detail: 'Protecting a position, resolving conflict, or preparing for proceedings.', practices: ['Litigation', 'Commercial Law', 'Employment'] },
  { id: 'property', label: 'A property decision', detail: 'Acquiring, developing, leasing, financing, or protecting real estate.', practices: ['Real Estate', 'Corporate Law', 'Tax Advisory'] },
  { id: 'workplace', label: 'An employment matter', detail: 'Managing workplace risk, senior appointments, exits, or policy.', practices: ['Employment', 'Litigation', 'Commercial Law'] },
  { id: 'intellectual-property', label: 'An idea, brand, or asset to protect', detail: 'Structuring ownership and protecting intellectual property.', practices: ['Intellectual Property', 'Commercial Law', 'Litigation'] },
  { id: 'tax', label: 'A tax structure or exposure', detail: 'Understanding tax implications before a decision is made.', practices: ['Tax Advisory', 'Corporate Law', 'Real Estate'] },
];

export const practices = [
  { slug: 'corporate-law', name: 'Corporate Law', index: '01', image: 'documents', summary: 'Counsel for the decisions that shape an organisation: formation, investment, governance, restructuring, and growth.', matters: ['Acquisitions and disposals', 'Investment and shareholder arrangements', 'Governance and company secretarial matters'], lawyers: ['Tunde Adeyemi', 'Nneka Okafor'], related: ['Commercial Law', 'Tax Advisory'] },
  { slug: 'commercial-law', name: 'Commercial Law', index: '02', image: 'meeting', summary: 'Practical advice for the agreements, relationships, and obligations that keep business moving.', matters: ['Commercial contracts', 'Joint ventures and strategic relationships', 'Supply, distribution, and technology agreements'], lawyers: ['Nneka Okafor', 'David Mensah'], related: ['Corporate Law', 'Intellectual Property'] },
  { slug: 'real-estate', name: 'Real Estate', index: '03', image: 'office', summary: 'Legal direction across the acquisition, development, leasing, and protection of valuable property interests.', matters: ['Acquisitions and disposals', 'Development and construction arrangements', 'Leasing, title, and property finance'], lawyers: ['Amaka Bello', 'Tunde Adeyemi'], related: ['Corporate Law', 'Tax Advisory'] },
  { slug: 'litigation', name: 'Litigation', index: '04', summary: 'Prepared representation when a dispute requires strategy, judgment, and a clear position.', matters: ['Commercial disputes', 'Regulatory and shareholder disputes', 'Pre-action strategy and proceedings'], lawyers: ['David Mensah', 'Nneka Okafor'], related: ['Employment', 'Commercial Law'] },
  { slug: 'employment', name: 'Employment', index: '05', summary: 'Advice for employers navigating people, policy, senior appointments, and workplace disputes.', matters: ['Employment contracts and policies', 'Executive appointments and exits', 'Workplace investigations and disputes'], lawyers: ['Amaka Bello', 'David Mensah'], related: ['Litigation', 'Commercial Law'] },
  { slug: 'intellectual-property', name: 'Intellectual Property', index: '06', summary: 'Protecting the ideas, brands, content, and systems that give a business its value.', matters: ['Brand and trade mark strategy', 'Licensing and commercialisation', 'Content, technology, and ownership disputes'], lawyers: ['Nneka Okafor', 'Amaka Bello'], related: ['Commercial Law', 'Litigation'] },
  { slug: 'tax-advisory', name: 'Tax Advisory', index: '07', summary: 'Tax perspective integrated into transactions, structures, property decisions, and business planning.', matters: ['Transaction structuring', 'Corporate tax planning', 'Property and investment tax matters'], lawyers: ['Tunde Adeyemi', 'Amaka Bello'], related: ['Corporate Law', 'Real Estate'] },
];

export const lawyers = [
  { slug: 'tunde-adeyemi', name: 'Tunde Adeyemi', role: 'Managing Partner', focus: 'Corporate transactions, governance, and investment', office: 'Lagos', practices: ['Corporate Law', 'Tax Advisory', 'Real Estate'], matters: ['A transaction or restructuring', 'A property decision'], bio: 'Tunde advises founders, boards, and investors on the legal decisions behind growth, ownership, and long-term structure.', credential: 'Called to the Nigerian Bar in 2004' },
  { slug: 'nneka-okafor', name: 'Nneka Okafor', role: 'Partner', focus: 'Commercial relationships, technology, and intellectual property', office: 'Lagos', practices: ['Commercial Law', 'Intellectual Property', 'Corporate Law'], matters: ['A transaction or restructuring', 'An idea, brand, or asset to protect'], bio: 'Nneka helps businesses turn important relationships into workable agreements and protect the assets those relationships create.', credential: 'Called to the Nigerian Bar in 2008' },
  { slug: 'david-mensah', name: 'David Mensah', role: 'Partner', focus: 'Commercial disputes and contentious employment matters', office: 'Abuja', practices: ['Litigation', 'Employment', 'Commercial Law'], matters: ['A dispute or threatened claim', 'An employment matter'], bio: 'David represents organisations when a dispute needs a clear position, careful preparation, and a route toward resolution.', credential: 'Called to the Nigerian Bar in 2007' },
  { slug: 'amaka-bello', name: 'Amaka Bello', role: 'Senior Associate', focus: 'Real estate, employment, and tax-sensitive decisions', office: 'Lagos', practices: ['Real Estate', 'Employment', 'Tax Advisory'], matters: ['A property decision', 'An employment matter', 'A tax structure or exposure'], bio: 'Amaka works across property and workplace matters where legal decisions have immediate operational and financial consequences.', credential: 'Called to the Nigerian Bar in 2013' },
];

export const insights = [
  { slug: 'before-the-signature', type: 'Corporate Law', matter: 'A transaction or restructuring', date: '12 August 2026', title: 'Before the signature: five questions for a business acquisition', summary: 'The legal work before an acquisition is often where the most important decisions are made. A practical starting point for boards and founders.', author: 'Tunde Adeyemi', read: '6 min read' },
  { slug: 'commercial-relationships', type: 'Commercial Law', matter: 'A transaction or restructuring', date: '28 July 2026', title: 'When a commercial relationship changes shape', summary: 'Long-term supply and distribution relationships need more than a contract. They need a clear way to handle change, pressure, and responsibility.', author: 'Nneka Okafor', read: '5 min read' },
  { slug: 'property-due-diligence', type: 'Real Estate', matter: 'A property decision', date: '03 July 2026', title: 'The property question that should come before the price', summary: 'A short briefing on title, use, obligations, and the questions that shape a sound property decision.', author: 'Amaka Bello', read: '4 min read' },
  { slug: 'workplace-investigations', type: 'Employment', matter: 'An employment matter', date: '19 June 2026', title: 'A fair process is part of the outcome', summary: 'How employers can approach sensitive workplace investigations with structure, care, and a defensible record.', author: 'David Mensah', read: '7 min read' },
];