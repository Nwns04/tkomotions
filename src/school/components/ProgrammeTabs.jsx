import { useState } from 'react';
import { Link } from 'react-router-dom';
import { programs } from '../data/programs';

function ProgrammeTabs() {
  const [activeTab, setActiveTab] = useState('nursery');
  const activeProgram = programs[activeTab];

  return (
    <div>
      {/* Tabs */}
      <div className="flex border-b border-slate/20 mb-8">
        {Object.values(programs).map(program => (
          <button
            key={program.id}
            onClick={() => setActiveTab(program.id)}
            className={`px-6 py-3 font-medium text-sm uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === program.id
                ? 'border-oak-green text-oak-green'
                : 'border-transparent text-slate hover:text-ink'
            }`}
          >
            {program.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-deep-green font-semibold mb-2">{activeProgram.ageRange}</p>
          <h3 className="text-3xl font-serif font-bold text-ink mb-4">{activeProgram.name}</h3>
          <p className="text-slate leading-relaxed mb-6">{activeProgram.description}</p>
          
          <div className="bg-soft-gray rounded-lg p-6 mb-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate mb-1">Curriculum</p>
                <p className="font-medium text-ink">{activeProgram.curriculum}</p>
              </div>
              <div>
                <p className="text-slate mb-1">Class Size</p>
                <p className="font-medium text-ink">{activeProgram.classSize}</p>
              </div>
              <div>
                <p className="text-slate mb-1">Teacher Ratio</p>
                <p className="font-medium text-ink">{activeProgram.teacherRatio}</p>
              </div>
              <div>
                <p className="text-slate mb-1">Hours</p>
                <p className="font-medium text-ink">{activeProgram.hours}</p>
              </div>
            </div>
          </div>

          <Link
            to={`/school/${activeProgram.id}`}
            className="inline-flex bg-oak-green text-white px-6 py-3 text-sm font-semibold rounded hover:bg-deep-green transition-colors"
          >
            Learn More About {activeProgram.name}
          </Link>
        </div>
        
        <div>
          <h4 className="font-semibold text-ink mb-4">Key Features</h4>
          <ul className="space-y-3 mb-6">
            {activeProgram.features.map(feature => (
              <li key={feature} className="flex items-start text-slate">
                <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <h4 className="font-semibold text-ink mb-4">Facilities</h4>
          <div className="flex flex-wrap gap-2">
            {activeProgram.facilities.map(facility => (
              <span key={facility} className="bg-mint text-oak-green text-sm px-3 py-1 rounded-full">
                {facility}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgrammeTabs;