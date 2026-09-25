const credentials = [
  { name: 'Approved Curriculum', description: 'Show the school’s real curriculum, examination pathway, and academic framework here.', icon: 'book' },
  { name: 'External Examinations', description: 'Add verified examination bodies and approved centres only where applicable.', icon: 'award' },
  { name: 'Teacher Development', description: 'Highlight staff training, professional development, and quality assurance processes.', icon: 'users' },
  { name: 'Safeguarding & Welfare', description: 'Explain child protection, student welfare, first aid, and campus safety procedures.', icon: 'shield' },
];

const iconPaths = {
  book: 'M4 19.5A2.5 2.5 0 016.5 17H20V5H6.5A2.5 2.5 0 004 7.5v12zm0 0A2.5 2.5 0 006.5 22H20',
  award: 'M12 15l-3.5 2 1-4-3-2.5 4-.5L12 6l1.5 4 4 .5-3 2.5 1 4-3.5-2z',
  users: 'M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2m11-10a4 4 0 10-8 0 4 4 0 008 0zm7 10v-2a4 4 0 00-3-3.87',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
};

function AccreditationCarousel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {credentials.map(item => (
        <div key={item.name} className="bg-white border border-slate/20 rounded-lg p-6">
          <div className="w-12 h-12 rounded-full bg-mint text-oak-green flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPaths[item.icon]} /></svg>
          </div>
          <h3 className="font-semibold text-ink mb-2">{item.name}</h3>
          <p className="text-sm text-slate leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AccreditationCarousel;
