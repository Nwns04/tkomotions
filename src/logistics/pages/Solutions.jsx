import { useState } from 'react';
import LR_SectionHeading from '../components/LR_SectionHeading';
import { solutions } from '../data/solutions';

function Solutions() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id);
  const active = solutions.find(s => s.id === activeSolution);

  return (
    <>
      <div className="bg-lr-surface border-b border-lr-border py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LR_SectionHeading
            eyebrow="Industry Solutions"
            title="Built for Your Industry"
            description="We understand the unique logistics challenges of different industries."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Solution List */}
          <div className="space-y-1">
            {solutions.map(solution => (
              <button
                key={solution.id}
                onClick={() => setActiveSolution(solution.id)}
                className={`w-full text-left px-4 py-4 border-l-2 transition-colors ${
                  activeSolution === solution.id
                    ? 'border-lr-lime bg-lr-surface text-lr-lime'
                    : 'border-lr-border text-lr-off-white/60 hover:text-lr-off-white hover:border-lr-off-white/30'
                }`}
              >
                <p className="font-semibold">{solution.name}</p>
              </button>
            ))}
          </div>

          {/* Active Solution Content */}
          {active && (
            <div className="lg:col-span-2">
              <div className="h-80 overflow-hidden mb-6">
                <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-3xl font-bold text-lr-off-white mb-4">{active.name}</h2>
              <p className="text-lr-off-white/60 text-lg leading-relaxed">{active.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Solutions;