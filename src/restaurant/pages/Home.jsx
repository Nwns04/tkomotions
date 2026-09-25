import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Testimonial from '../components/Testimonial';
import ParallaxImage from '../components/ParallaxImage';
import { testimonials } from '../data/testimonials';
import { restaurantInfo } from '../data/restaurant';
import { menuCategories } from '../data/menu';
import { formatNaira } from '../../shared/utils/formatCurrency';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  // Get signature dishes with their actual images
  const signatureDishes = menuCategories
    .flatMap(cat => cat.dishes)
    .filter(dish => dish.signature)
    .slice(0, 3);

  const experienceItems = [
    {
      title: 'The Fire Kitchen',
      description: 'An open kitchen built around wood-fired grills and charcoal ovens. Watch the brigade work with flame.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    },
    {
      title: "The Chef's Table",
      description: 'Eight seats at the counter, overlooking the pass. A front-row seat to culinary theatre.',
      image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80',
    },
    {
      title: 'The Ember Bar',
      description: 'Cocktails built on African spirits — palm wine, ogogoro, and infused local botanicals.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    },
  ];

  const galleryPreview = [
    { image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80', alt: 'Beef short rib' },
    { image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', alt: 'Fire kitchen' },
    { image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Chef plating' },
    { image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80', alt: 'Private dining' },
    { image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80', alt: 'Grilled fish' },
  ];

  useEffect(() => {
    // Scroll animations for sections
    gsap.utils.toArray('.fade-up').forEach((element) => {
      gsap.fromTo(element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Hero />

      {/* Welcome / Story */}
      <section className="section-padding-restaurant bg-ember-black">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-6 lg:px-8">
          <div className="fade-up">
            <p className="text-ember-orange text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6 leading-tight">
              Born from Fire
            </h2>
            <div className="space-y-4 text-ash leading-relaxed">
              <p>
                Ember began with a simple question: what happens when Nigerian 
                cuisine is treated with the same respect as the world's great 
                culinary traditions?
              </p>
              <p>
                Chef Amara Okafor spent a decade in London kitchens before 
                returning to Abuja with a vision — a restaurant built around 
                fire, smoke, and the bold flavours of home.
              </p>
              <p>
                Today, Ember is that vision realised. A contemporary African 
                kitchen where every dish tells a story of heritage, fire, 
                and unapologetic flavour.
              </p>
            </div>
            <div className="mt-8">
              <p className="font-serif italic text-cream text-xl">Chef Amara Okafor</p>
              <p className="text-ash text-sm">Executive Chef & Founder</p>
            </div>
          </div>
          <div className="fade-up relative">
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&q=80"
              alt="Chef Amara Okafor"
              className="w-full h-[500px] object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-ember-orange text-white p-6 rounded-lg hidden lg:block">
              <p className="text-3xl font-serif font-bold">2022</p>
              <p className="text-sm uppercase tracking-wider">Established</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes - Now with unique images */}
      <section className="section-padding-restaurant bg-charcoal">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Signatures"
            title="Dishes That Define Us"
            description="Three dishes that capture the essence of Ember — fire, flavour, and heritage."
            light
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, index) => (
              <Link
                key={dish.id}
                to="/restaurant/menu"
                className="fade-up group relative overflow-hidden rounded-lg"
              >
                {/* Use dish.image from data */}
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ember-black via-ember-black/40 to-transparent" />
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs bg-ember-orange text-white px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                    Signature
                  </span>
                  <h3 className="text-2xl font-serif italic text-cream mb-2">{dish.name}</h3>
                  <p className="text-ash text-sm mb-3">{dish.description}</p>
                  <p className="text-ember-orange font-medium">
                    {formatNaira(dish.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/restaurant/menu" className="btn-restaurant btn-restaurant-outline">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding-restaurant bg-ember-black">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Experience"
            title="More Than a Meal"
            light
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experienceItems.map((item, index) => (
              <div key={item.title} className={`fade-up ${index % 2 === 1 ? 'md:mt-12' : ''}`}>
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-cream mb-3">{item.title}</h3>
                <p className="text-ash leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Quote */}
      <section className="relative h-[70vh] overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80"
          alt="Fire in the kitchen"
          className="absolute inset-0"
          overlay
        />
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <svg className="w-12 h-12 mx-auto mb-8 text-ember-orange" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391C14.017 8.78 16.688 5.834 21 5v2.935c-2.059.417-3.35 1.64-3.874 3.67H21V21h-6.983zM3 21v-7.391C3 8.78 5.688 5.834 10 5v2.935c-2.059.417-3.35 1.64-3.874 3.67H10V21H3z"/>
            </svg>
            <blockquote className="text-2xl md:text-4xl font-serif italic text-cream leading-relaxed mb-8">
              "Fire is honest. It cannot be faked. When you cook with fire, 
              you are cooking with truth."
            </blockquote>
            <p className="text-ember-orange font-medium">Chef Amara Okafor</p>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding-restaurant bg-charcoal">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="A Glimpse Inside"
            light
            className="mb-16"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryPreview.map((item, index) => (
              <Link
                key={index}
                to="/restaurant/gallery"
                className={`fade-up relative overflow-hidden rounded-lg ${
                  index === 0 || index === 4 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                    index === 0 || index === 4 ? 'h-full min-h-[300px]' : 'h-48'
                  }`}
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/restaurant/gallery" className="btn-restaurant btn-restaurant-outline">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding-restaurant bg-ember-black">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reviews"
            title="What Our Guests Say"
            light
            className="mb-16"
          />
          <Testimonial testimonials={testimonials} />
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section-padding-restaurant bg-charcoal">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 md:px-6 lg:px-8">
          <div className="fade-up">
            <p className="text-ember-orange text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Find Us
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6">
              In the Heart of Maitama
            </h2>
            <p className="text-ash leading-relaxed mb-8">
              {restaurantInfo.address}
            </p>
            <div className="space-y-4 mb-8">
              {restaurantInfo.hours.map(({ day, time }) => (
                <div key={day} className="flex items-center justify-between max-w-md">
                  <span className="text-ash">{day}</span>
                  <span className={`text-cream ${time === 'Closed' ? 'text-ember-orange' : ''}`}>
                    {time}
                  </span>
                </div>
              ))}
            </div>
            <Link to="/restaurant/reservations" className="btn-restaurant btn-restaurant-primary">
              Make a Reservation
            </Link>
          </div>
          <div className="fade-up relative h-[400px] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
              alt="Ember dining room"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

    {/* Final CTA */}
<section className="relative h-[60vh] min-h-[500px] overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
    alt="Table at Ember"
    className="w-full h-full object-cover"
    loading="lazy"
  />
  <div className="absolute inset-0 bg-ember-black/70" />
  <div className="absolute inset-0 flex items-center justify-center px-4">
    <div className="text-center">
      <h2 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-8">
        Your Table Awaits
      </h2>
      <p className="text-lg text-ash mb-10">
        Join us for an evening of fire, flavour, and unforgettable food.
      </p>
      <Link to="/restaurant/reservations" className="btn-restaurant btn-restaurant-primary">
        Reserve Now
      </Link>
    </div>
  </div>
</section>
    </>
  );
}

export default Home;