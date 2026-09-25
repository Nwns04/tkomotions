import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import AnimatedCounter from '../components/AnimatedCounter';
import { hotelInfo } from '../data/hotel';
import { openBookingModal } from '../components/BookingEnquiryModal';

function About() {
  const timelineEvents = [
    {
      year: '2018',
      title: 'Land Acquired',
      description: 'A rare plot in old Ikoyi is secured — 1.2 acres of established gardens and mature trees, hidden behind a wall of bougainvillea.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    },
    {
      year: '2019',
      title: 'Design Begins',
      description: 'Architect Tunde Adeyemi begins work on a design inspired by late modernist Lagos — low, horizontal, and deeply connected to the landscape.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    },
    {
      year: '2021',
      title: 'Ground Broken',
      description: 'Construction begins. The old house on the plot is carefully deconstructed, its materials preserved and incorporated into the new build.',
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?w=800&q=80',
    },
    {
      year: '2023',
      title: 'First Guests Welcomed',
      description: 'Meridian House opens its doors with 48 rooms and a clear vision of quiet luxury in the heart of Lagos.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    },
    {
      year: '2024',
      title: 'Ori Restaurant Opens',
      description: 'Chef Tayo Bamidele joins to create Ori, our signature restaurant celebrating Nigerian coastal cuisine.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    },
  ];

  const values = [
    {
      title: 'Discretion',
      description: 'What happens at Meridian stays at Meridian. Our staff are trained in the art of invisible service.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      number: '01',
    },
    {
      title: 'Craft',
      description: 'Every detail, chosen with intention. From the linens to the lighting, nothing is accidental.',
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80',
      number: '02',
    },
    {
      title: 'Place',
      description: 'We are Lagos. We do not pretend otherwise. The house celebrates its context rather than escaping it.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
      number: '03',
    },
  ];

  return (
    <>
      <PageHeader
        title="Our Story"
        subtitle="The story of Meridian House"
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
      />

      {/* Story */}
      <div className="container-hotel py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow-hotel text-hotel-bronze mb-4">The Idea</p>
            <h2 className="text-4xl font-serif font-light mb-6">
              A Private Residence That Happens to Welcome Guests
            </h2>
          </div>
          <div className="space-y-6 text-hotel-ink/70 leading-relaxed">
            <p>
              Meridian House began with a simple observation: the world's finest hotels 
              often feel less like hotels and more like private homes. They are places 
              where the staff know your name, where the routine is relaxed, and where 
              you can truly disappear.
            </p>
            <p>
              The house was designed by architect Tunde Adeyemi, whose work draws on 
              the late modernist buildings of Lagos — low, horizontal structures that 
              embrace their tropical context rather than fighting it. The result is a 
              building that feels inevitable, as if it has always been here.
            </p>
            <p>
              The name "Meridian" refers to the line between day and night, between 
              city and sanctuary. It is the moment of transition, the quiet pause. 
              It is what we hope to offer our guests.
            </p>
            <p>
              Today, Meridian House is home to 48 rooms, 70 staff, and a spirit of 
              understated excellence. We are proud to be of Lagos, and we are honored 
              to share this house with those who pass through.
            </p>
          </div>
        </div>

        {/* Stats with Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 bg-hotel-stone p-8 md:p-12 rounded-lg">
          <div className="text-center">
            <AnimatedCounter 
              value={hotelInfo.stats.rooms} 
              className="text-4xl md:text-5xl font-serif text-hotel-bronze mb-2" 
            />
            <p className="text-sm text-hotel-ink/50 uppercase tracking-wider">Rooms</p>
          </div>
          <div className="text-center">
            <AnimatedCounter 
              value={hotelInfo.stats.acres} 
              suffix=" acres"
              isDecimal={true}
              className="text-4xl md:text-5xl font-serif text-hotel-bronze mb-2" 
            />
            <p className="text-sm text-hotel-ink/50 uppercase tracking-wider">Gardens</p>
          </div>
          <div className="text-center">
            <AnimatedCounter 
              value={hotelInfo.stats.yearFounded} 
              className="text-4xl md:text-5xl font-serif text-hotel-bronze mb-2" 
            />
            <p className="text-sm text-hotel-ink/50 uppercase tracking-wider">Founded</p>
          </div>
          <div className="text-center">
            <AnimatedCounter 
              value={hotelInfo.stats.staff} 
              className="text-4xl md:text-5xl font-serif text-hotel-bronze mb-2" 
            />
            <p className="text-sm text-hotel-ink/50 uppercase tracking-wider">Staff</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Our Journey"
            title="From Ground to House"
            description="Five years in the making — each moment chosen with care."
            className="mb-16"
          />
          <Timeline events={timelineEvents} />
        </div>

        {/* Values with Shimmer Effect */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="What We Believe"
            title="Three Principles"
            description="The quiet foundations upon which Meridian House stands."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="group relative bg-white border border-hotel-sand overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-hotel-bronze/20 hover:-translate-y-2"
              >
                {/* Shimmer Border Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 border-2 border-transparent" style={{
                    backgroundImage: 'linear-gradient(90deg, transparent, rgba(154, 123, 79, 0.3), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 2s linear infinite',
                  }} />
                </div>
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  
                  {/* Number */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-light tracking-widest">{value.number}</p>
                  </div>
                  
                  {/* Bronze Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-hotel-bronze group-hover:w-full transition-all duration-500" />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-medium text-hotel-ink mb-4 group-hover:text-hotel-bronze transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-hotel-ink/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-start space-x-6 bg-white p-6 rounded-lg border border-hotel-sand">
            <div className="w-24 h-24 bg-hotel-sand rounded-full overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                alt="Adaeze Okonkwo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-1">Adaeze Okonkwo</h3>
              <p className="text-sm text-hotel-bronze uppercase tracking-wider mb-3">General Manager</p>
              <p className="text-hotel-ink/60 leading-relaxed">
                "Luxury is not about things. It is about how you feel when you 
                are here. Our job is to make you feel at home — perhaps more 
                at home than anywhere else."
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6 bg-white p-6 rounded-lg border border-hotel-sand">
            <div className="w-24 h-24 bg-hotel-sand rounded-full overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&q=80"
                alt="Chef Tayo Bamidele"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-1">Tayo Bamidele</h3>
              <p className="text-sm text-hotel-bronze uppercase tracking-wider mb-3">Head Chef</p>
              <p className="text-hotel-ink/60 leading-relaxed">
                "Nigerian food is some of the most complex and rewarding in the 
                world. At Ori, we treat it with the respect it deserves — and 
                introduce it to those who have never experienced it."
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button 
            onClick={() => openBookingModal()} 
            className="btn-hotel btn-hotel-primary"
          >
            Experience Meridian House
          </button>
        </div>
      </div>
    </>
  );
}

export default About;