import MC_PageHeader from '../components/MC_PageHeader';
import MC_ResourceCard from '../components/MC_ResourceCard';
import MC_FAQAccordion from '../components/MC_FAQAccordion';
import { resources } from '../data/resources';
import { faq } from '../data/faq';

export default function HealthResources() {
  return <><MC_PageHeader eyebrow="Health resources" title="Clear information for more confident health decisions." description="Practical guidance from the MediCore team, written to help you prepare, prevent, and participate in your care." /><section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid gap-7 md:grid-cols-3">{resources.map((resource) => <MC_ResourceCard key={resource.id} resource={resource} />)}</div><div className="mx-auto mt-24 max-w-3xl"><h2 className="mb-8 text-4xl text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}>Questions, answered</h2><MC_FAQAccordion items={faq} /></div></section></>;
}
