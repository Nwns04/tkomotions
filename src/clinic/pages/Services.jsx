import MC_PageHeader from "../components/MC_PageHeader";
import MC_ServiceList from "../components/MC_ServiceList";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <MC_PageHeader
        eyebrow="Care, thoughtfully delivered"
        title="Services for everyday health and long-term wellbeing."
        description="From a first consultation to ongoing specialist support, our services are designed around clarity and continuity."
      />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <MC_ServiceList services={services} />
      </section>
    </>
  );
}
