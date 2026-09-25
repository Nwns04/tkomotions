import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { hotelInfo } from '../data/hotel';
import BookingEnquiryModal from '../components/BookingEnquiryModal';

function Contact() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="We would love to hear from you"
        image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80"
      />

      <div className="container-hotel py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif font-light mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-light mb-6">Get in Touch</h2>
            
            <div className="space-y-8">
              <div>
                <p className="eyebrow text-bronze mb-3">Address</p>
                <p className="text-ink/70">14 Meridian Close</p>
                <p className="text-ink/70">Old Ikoyi, Lagos</p>
                <p className="text-ink/70">Nigeria</p>
              </div>

              <div>
                <p className="eyebrow text-bronze mb-3">Phone</p>
                <p className="text-ink/70">{hotelInfo.phone}</p>
              </div>

              <div>
                <p className="eyebrow text-bronze mb-3">Email</p>
                <p className="text-ink/70">{hotelInfo.email}</p>
              </div>

              <div>
                <p className="eyebrow text-bronze mb-3">Reception</p>
                <p className="text-ink/70">Open 24 hours</p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-sand h-64 flex items-center justify-center border border-sand">
                <div className="text-center">
                  <svg className="w-12 h-12 text-bronze/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-ink/50 text-sm">14 Meridian Close, Old Ikoyi, Lagos</p>
                </div>
              </div>

              {/* Getting There */}
              <div className="bg-stone p-6 border border-sand">
                <h3 className="text-xl font-serif mb-4">Getting There</h3>
                <ul className="space-y-3 text-ink/60">
                  <li>45 minutes from Murtala Muhammed International Airport</li>
                  <li>Private driver service available on request</li>
                  <li>Helipad access for private helicopter transfers</li>
                  <li>Secure parking available for guests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}

export default Contact;