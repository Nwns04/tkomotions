import { useState } from 'react';
import MC_PageHeader from '../components/MC_PageHeader';
import MC_DoctorCard from '../components/MC_DoctorCard';
import MC_DoctorProfile from '../components/MC_DoctorProfile';
import { doctors } from '../data/doctors';

export default function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  return <><MC_PageHeader eyebrow="Our medical team" title="Experienced clinicians who listen first." description="Meet the fictional MediCore team bringing careful expertise and human attention to every consultation." /><section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid gap-12 sm:grid-cols-2">{doctors.map((doctor) => <MC_DoctorCard key={doctor.id} doctor={doctor} onSelect={setSelectedDoctor} />)}</div></section><MC_DoctorProfile doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} /></>;
}
