import { schoolInfo } from '../data/school';

function AccreditationStrip() {
  return (
    <div className="bg-soft-gray py-8">
      <div className="container-hotel px-4 md:px-6 lg:px-8">
        <p className="text-center text-slate text-sm mb-6">Accredited by</p>
        <div className="flex flex-wrap justify-center gap-8">
          {schoolInfo.accreditations.map(acc => (
            <span key={acc} className="text-oak-green font-serif font-bold text-lg opacity-60 hover:opacity-100 transition-opacity">
              {acc}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccreditationStrip;