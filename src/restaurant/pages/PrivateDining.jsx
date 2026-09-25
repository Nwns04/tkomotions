import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import PrivateDiningCard from '../components/PrivateDiningCard';
import PrivateDiningForm from '../components/PrivateDiningForm';
import { privateSpaces } from '../data/privateDining';

function PrivateDining() {
  const [submitted, setSubmitted] = useState(false);
  const [enquiryDetails, setEnquiryDetails] = useState(null);

  const handleSuccess = (details) => {
    setEnquiryDetails(details);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHeader
        title="Private Dining"
        subtitle="Intimate spaces for memorable occasions"
        image="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80"
      />

      <div className="container-hotel py-16 px-4 md:px-6 lg:px-8">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-ember-orange text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Private Events
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6">
            Host With Us
          </h2>
          <p className="text-ash leading-relaxed">
            From intimate chef's table experiences to corporate dinners, 
            Ember offers private spaces for every occasion. Our team will 
            work with you to create a bespoke menu and atmosphere.
          </p>
        </div>

        {/* Spaces */}
        {privateSpaces.map((space, index) => (
          <PrivateDiningCard key={space.id} space={space} index={index} />
        ))}

        {/* Enquiry Form */}
        <div className="max-w-3xl mx-auto mt-20">
          <SectionHeading
            eyebrow="Enquire"
            title="Plan Your Event"
            light
            className="mb-12"
          />

          {submitted ? (
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-ember-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-ember-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-cream mb-2">Enquiry Received</h3>
              <p className="text-ash mb-4">
                Thank you for your interest in private dining at Ember.
              </p>
              <p className="text-ash text-sm">
                Our events team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <PrivateDiningForm onSuccess={handleSuccess} />
          )}
        </div>
      </div>
    </>
  );
}

export default PrivateDining;