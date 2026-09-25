import MC_PageHeader from '../components/MC_PageHeader';
import MC_CorporateSection from '../components/MC_CorporateSection';

export default function About() {
  return <>
    <MC_PageHeader eyebrow="About MediCore" title="A calmer standard of private healthcare in Abuja." description="MediCore Abuja was imagined for people who value expert medicine and an experience that feels considered from the moment they arrive." />
    <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
      <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" alt="Bright healthcare facility interior" className="h-[460px] w-full rounded-[28px] object-cover" />
      <div className="self-center"><p className="text-lg leading-8 text-[#5F5E5A]">Our approach is simple: listen carefully, explain clearly, and make every decision with the whole person in mind. Our clinicians work together so patients and families feel supported, not passed around.</p><p className="mt-6 text-lg leading-8 text-[#5F5E5A]">This fictional demonstration brings the warmth of a private medical center together with the clarity and accessibility modern patients expect.</p></div>
    </section>
    <MC_CorporateSection />
  </>;
}
