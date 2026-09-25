import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import AnimatedCounter from '../components/AnimatedCounter';
import { restaurantInfo } from '../data/restaurant';

function About() {
  const timelineEvents = [
    {
      year: '2019',
      title: 'The Return',
      description: 'Chef Amara Okafor returns to Abuja after a decade in London, determined to elevate Nigerian cuisine.',
    },
    {
      year: '2020',
      title: 'Pop-Up Dinners',
      description: 'A series of underground pop-up dinners across Abuja build a devoted following.',
    },
    {
      year: '2021',
      title: 'The Space',
      description: 'A former warehouse in Maitama is discovered and transformed into Ember.',
    },
    {
      year: '2022',
      title: 'Ember Opens',
      description: 'The doors open with a 48-seat dining room and the fire kitchen at its heart.',
    },
    {
      year: '2023',
      title: 'The Tasting Room',
      description: "An eight-seat chef's table is added, offering intimate tasting menu experiences.",
    },
    {
      year: '2024',
      title: 'Recognition',
      description: 'Named Best New Restaurant at the Abuja Food Awards and featured in international press.',
    },
  ];

  const teamMembers = [
    {
      name: 'Amara Okafor',
      role: 'Executive Chef & Founder',
      bio: 'Trained at Le Cordon Bleu London. Worked at The Ledbury and Dinner by Heston before returning home.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
    {
      name: 'Ibrahim Musa',
      role: 'Head of Fire Kitchen',
      bio: 'A master of open-flame cooking, Ibrahim brings 15 years of experience with Nigerian grilling traditions.',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&q=80',
    },
    {
      name: 'Ngozi Eze',
      role: 'Pastry Chef',
      bio: 'Trained in Paris, Ngozi reimagines Nigerian desserts with French technique and local ingredients.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
    {
      name: 'David Adeyemi',
      role: 'Sommelier',
      bio: 'David curates a wine list that bridges old world classics with emerging African vineyards.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    },
  ];

  const philosophy = [
    {
      title: 'Fire',
      description: 'Everything starts with flame. Our wood-fired grills and charcoal ovens are the soul of the kitchen.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    },
    {
      title: 'Flavour',
      description: 'Bold, unapologetic seasoning. We do not temper our spices for timid palates.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    },
    {
      title: 'Heritage',
      description: 'Respect for Nigerian ingredients, techniques, and traditions. Our food has roots.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    },
  ];

  return (
    <>
      <PageHeader
        title="Our Story"
        subtitle="The journey of Ember"
        image="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1920&q=80"
      />

      {/* The Beginning */}
      <div className="container-hotel py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-ember-orange text-xs font-medium tracking-[0.3em] uppercase mb-4">
            The Beginning
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-8">
            A Homecoming
          </h2>
          <div className="space-y-6 text-ash leading-relaxed text-left">
            <p>
              Chef Amara Okafor spent a decade in some of London's most 
              demanding kitchens. She learned technique, discipline, and the 
              art of fine dining. But she never forgot the flavours of home — 
              the suya spice, the jollof rice, the pepper soup that warmed 
              her childhood.
            </p>
            <p>
              When she returned to Abuja in 2019, she brought with her a 
              conviction: Nigerian cuisine deserved a place on the world's 
              culinary stage. Not as "fusion" or "inspired by," but as itself — 
              confident, complex, and deeply rooted.
            </p>
            <p>
              The name "Ember" came to her late one night. An ember is what 
              remains after the fire has done its work — glowing, alive, 
              capable of igniting something new. It is the perfect metaphor 
              for a cuisine that has always been here, waiting to be seen 
              with fresh eyes.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-charcoal p-8 md:p-12 rounded-lg mb-20">
          <div className="text-center">
            <AnimatedCounter value={restaurantInfo.stats.yearFounded} className="text-4xl md:text-5xl font-serif font-bold text-ember-orange mb-2" />
            <p className="text-sm text-ash uppercase tracking-wider">Founded</p>
          </div>
          <div className="text-center">
            <AnimatedCounter value={restaurantInfo.stats.dishesServed} className="text-4xl md:text-5xl font-serif font-bold text-ember-orange mb-2" />
            <p className="text-sm text-ash uppercase tracking-wider">Dishes Served</p>
          </div>
          <div className="text-center">
            <AnimatedCounter value={restaurantInfo.stats.tastingMenuCourses} className="text-4xl md:text-5xl font-serif font-bold text-ember-orange mb-2" />
            <p className="text-sm text-ash uppercase tracking-wider">Tasting Courses</p>
          </div>
          <div className="text-center">
            <AnimatedCounter value={restaurantInfo.stats.teamMembers} className="text-4xl md:text-5xl font-serif font-bold text-ember-orange mb-2" />
            <p className="text-sm text-ash uppercase tracking-wider">Team Members</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="Our Journey"
            title="From Pop-Up to Institution"
            light
            className="mb-16"
          />
          <Timeline events={timelineEvents} />
        </div>

        {/* Philosophy */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="What We Believe"
            title="Three Pillars"
            light
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ember-black via-ember-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-serif font-bold text-cream mb-2">{item.title}</h3>
                  <p className="text-ash text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="The People"
            title="Meet the Team"
            light
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-ember-orange/30">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-serif font-bold text-cream mb-1">{member.name}</h3>
                <p className="text-ember-orange text-xs uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-ash text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="bg-charcoal rounded-lg p-8 md:p-12">
          <SectionHeading
            eyebrow="Recognition"
            title="Awards & Press"
            light
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-3xl font-serif italic text-ember-orange mb-2">"Best New Restaurant"</p>
              <p className="text-ash text-sm">Abuja Food Awards 2023</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif italic text-ember-orange mb-2">"Top 50 in Africa"</p>
              <p className="text-ash text-sm">Continental Dining Guide 2024</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif italic text-ember-orange mb-2">"Chef of the Year"</p>
              <p className="text-ash text-sm">Nigerian Culinary Awards</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;