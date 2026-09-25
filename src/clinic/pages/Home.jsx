import MC_Hero from '../components/MC_Hero';
import MC_TrustBar from '../components/MC_TrustBar';
import MC_SectionHeading from '../components/MC_SectionHeading';
import MC_Doctors from '../components/MC_Doctors';
import MC_AppointmentForm from '../components/MC_AppointmentForm';
import MC_Resources from '../components/MC_Resources';
import { clinicInfo } from '../data/clinic';
import { services } from '../data/services';
import { doctors } from '../data/doctors';
import { resources } from '../data/resources';

const quickAccess = [
  {
    label: 'Emergency care',
    detail: 'Immediate support for urgent concerns and same-day medical attention.',
    action: 'Call now',
    href: 'tel:08000000000',
  },
  {
    label: 'Primary care',
    detail: 'Routine consultations, long-term support, and everyday family wellbeing.',
    action: 'Book consult',
    href: '#appointment',
  },
  {
    label: 'Diagnostics',
    detail: 'Clear investigation and faster answers to support confident treatment.',
    action: 'Learn more',
    href: '#services',
  },
  {
    label: 'Corporate care',
    detail: 'Healthcare support for teams, employers, and growing businesses.',
    action: 'Ask us',
    href: '#appointment',
  },
];

const careJourney = [
  { step: '01', title: 'Tell us what you need', text: 'Share the concern, symptoms, or reason for your visit.' },
  { step: '02', title: 'Get matched to the right care', text: 'We guide you to the appropriate doctor or department.' },
  { step: '03', title: 'See a clinician and move forward', text: 'Clear treatment options, follow-up planning, and support.' },
];

const patientPathways = [
  {
    title: 'New patient',
    text: 'Starting care for the first time? We help you choose the right clinician, understand the process, and plan a confident first visit.',
  },
  {
    title: 'Family care',
    text: 'From childhood checkups to ongoing adult health, we support the routines, concerns, and milestones that shape family wellbeing.',
  },
  {
    title: 'Preventive health',
    text: 'Routine screening and early guidance help catch issues sooner and keep treatment more manageable over time.',
  },
  {
    title: 'Urgent concern',
    text: 'If your concern needs prompt attention, contact the clinic for a clear, same-day pathway and immediate medical direction.',
  },
];

function ClinicHome() {
  return (
    <div className="bg-[#FAFAF8] text-[#2C2C2A]">
      <MC_Hero />
      <MC_TrustBar />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <MC_SectionHeading
          eyebrow="Start here"
          title="Choose the care path that fits your next step"
          description="Whether you need urgent attention, preventive guidance, or a specialist consultation, our clinic keeps the next step simple and reassuring."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickAccess.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group rounded-[24px] border border-[#E8E6E0] bg-white p-6 transition hover:-translate-y-1 hover:border-[#2A6B6E] hover:shadow-[0_24px_50px_rgba(42,107,110,0.08)]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2A6B6E]">{item.label}</p>
              <p className="mt-4 text-lg leading-7 text-[#2C2C2A]">{item.detail}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2A6B6E]">
                {item.action}
                <span aria-hidden="true">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="services" className="bg-[#F5F2EC] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MC_SectionHeading
            eyebrow="Our services"
            title="Comprehensive care for everyday health and long-term wellbeing"
            description="From first consultations to specialist follow-up, we offer clear, compassionate care shaped around patient needs rather than a one-size-fits-all model."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.id}
                className="rounded-[24px] border border-[#E8E6E0] bg-[#FAFAF8] p-6 transition hover:border-[#CEDCD8] hover:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2A6B6E]">
                      {String(service.id).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {service.name}
                    </h3>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D9D4CD] text-lg text-[#2A6B6E]">
                    →
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-[#5F5E5A]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <MC_SectionHeading
          eyebrow="How care works"
          title="Simple steps, clear guidance, better outcomes"
          description="We keep the experience respectful, direct, and reassuring from the first conversation to follow-up care."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {careJourney.map((item) => (
            <div key={item.step} className="rounded-[24px] border border-[#E8E6E0] bg-[#F9F7F4] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2A6B6E]">{item.step}</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#5F5E5A]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <MC_SectionHeading
          eyebrow="Patient pathways"
          title="A better patient journey starts with the right first step"
          description="We organise access around real-life situations so patients know the best place to begin and what the next move should be."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {patientPathways.map((item) => (
            <div key={item.title} className="rounded-[24px] border border-[#E8E6E0] bg-[#FAFAF8] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2A6B6E]">Patient path</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#5F5E5A]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F2EC] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MC_SectionHeading
            eyebrow="Why patients choose us"
            title="Private care designed around clarity, not confusion"
            description="We combine trusted clinical expertise with a calmer experience so patients feel informed, supported, and confident at every step."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#E8E6E0] bg-[#FAFAF8] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2A6B6E]">01</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif' }}>Thoughtful clinical support</h3>
              <p className="mt-4 text-base leading-7 text-[#5F5E5A]">Every consultation is shaped around listening carefully, explaining clearly, and recommending next steps with confidence.</p>
            </div>

            <div className="rounded-[24px] border border-[#E8E6E0] bg-[#FAFAF8] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2A6B6E]">02</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif' }}>Modern diagnostics</h3>
              <p className="mt-4 text-base leading-7 text-[#5F5E5A]">We bring together clinical expertise and practical testing so patients can move from questions to action without delays.</p>
            </div>

            <div className="rounded-[24px] border border-[#E8E6E0] bg-[#FAFAF8] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2A6B6E]">03</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif' }}>A calmer experience</h3>
              <p className="mt-4 text-base leading-7 text-[#5F5E5A]">From the first contact to follow-up care, we aim to reduce stress and make the process feel more understandable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EDF3F2] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MC_SectionHeading
            eyebrow="Our doctors"
            title="Experienced clinicians who put people at ease"
            description="Our care team brings together medical expertise, calm communication, and practical support for families and professionals alike."
            align="center"
          />
          <div className="mt-12">
            <MC_Doctors doctors={doctors} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <MC_SectionHeading
              eyebrow="Private care"
              title="A softer, more thoughtful patient experience"
              description="MediCore Abuja brings together expert clinicians, modern diagnostics, and a calm environment designed to reduce uncertainty and help patients feel supported at every stage."
            />
            <div className="mt-8 space-y-5">
              {clinicInfo.stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between border-b border-[#E8E6E0] pb-4">
                  <span className="text-[#5F5E5A]">{stat.label}</span>
                  <span className="text-2xl font-semibold text-[#2A6B6E]" style={{ fontFamily: 'Manrope, sans-serif' }}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[#E8E6E0] bg-white shadow-[0_28px_80px_rgba(26,33,31,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
              alt="Medical consultation room"
              className="h-full min-h-[460px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="appointment" className="bg-[#EDF3F2] py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div>
            <MC_SectionHeading
              eyebrow="Book a visit"
              title="Request your appointment"
              description="Tell us what you need, and our team will help you choose the right appointment and clinic fit."
            />
            <div className="mt-8 mb-8 rounded-[22px] border border-[#D7E4E2] bg-[#F8FAF9] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[#2A6B6E]">Clinic details</p>
              <ul className="mt-5 space-y-3 text-base text-[#4E4C48]">
                <li>{clinicInfo.address}</li>
                <li>{clinicInfo.hours}</li>
                <li>{clinicInfo.email}</li>
              </ul>
            </div>
          </div>

          <MC_AppointmentForm />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <MC_SectionHeading
          eyebrow="Resources"
          title="Guidance that helps patients feel informed"
          description="A few practical articles to make care decisions clearer and everyday health routines easier to manage."
          align="center"
        />
        <div className="mt-12">
          <MC_Resources resources={resources} />
        </div>
      </section>
    </div>
  );
}

export default ClinicHome;
