import MC_PageHeader from '../components/MC_PageHeader';
import MC_DepartmentSection from '../components/MC_DepartmentSection';
import { departments } from '../data/departments';

export default function Departments() {
  return <><MC_PageHeader eyebrow="Departments" title="Connected care, under one roof." description="Our teams collaborate across primary, preventive, pediatric, women's, and specialist care." /><section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"><MC_DepartmentSection departments={departments} /></section></>;
}
