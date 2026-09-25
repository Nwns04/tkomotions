import { useState } from 'react';
import { Link } from 'react-router-dom';
import RE_PageHeader from '../components/RE_PageHeader';

function ListProperty() {
  const [formData, setFormData] = useState({
    propertyType: 'house',
    listingType: 'for-sale',
    title: '',
    location: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    size: '',
    description: '',
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      propertyType: 'house',
      listingType: 'for-sale',
      title: '',
      location: '',
      price: '',
      bedrooms: '',
      bathrooms: '',
      size: '',
      description: '',
      name: '',
      email: '',
      phone: '',
    });
  };

  const locations = ['Maitama', 'Asokoro', 'Wuse', 'Garki', 'Guzape', 'Katampe', 'Jahi', 'Gwarinpa', 'Lugbe', 'Jabi'];

  return (
    <>
      <RE_PageHeader 
        title="List Your Property" 
        subtitle="Let us help you sell or rent your property" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {submitted ? (
          <div className="bg-green/10 rounded-lg p-12 text-center">
            <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2">Listing Request Received</h2>
            <p className="text-muted mb-6">Our team will contact you within 24 hours to schedule a property inspection.</p>
            <Link to="/real-estate" className="text-gold font-semibold hover:text-navy transition-colors">
              ← Back to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-border rounded-lg p-8 space-y-6">
            {/* Property Details */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-4">Property Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded"
                    required
                  >
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="land">Land</option>
                    <option value="office">Office Space</option>
                    <option value="shop">Shop/Retail</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">Listing Type</label>
                  <select
                    value={formData.listingType}
                    onChange={(e) => setFormData({ ...formData, listingType: e.target.value })}
                    className="w-full px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded"
                    required
                  >
                    <option value="for-sale">For Sale</option>
                    <option value="for-rent">For Rent</option>
                    <option value="commercial-sale">Commercial Sale</option>
                    <option value="commercial-rent">Commercial Rent</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-dark-gray mb-2">Property Title</label>
                <input
                  type="text"
                  placeholder="e.g., 4 Bedroom Detached Duplex in Maitama"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-border text-dark-gray placeholder-muted/50 focus:outline-none focus:border-navy rounded"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">Location</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border border-border text-dark-gray focus:outline-none focus:border-navy rounded"
                    required
                  >
                    <option value="">Select Location</option>
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">Price (₦)</label>
                  <input
                    type="number"
                    placeholder="e.g., 250000000"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-3 border border-border text-dark-gray placeholder-muted/50 focus:outline-none focus:border-navy rounded"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">Bedrooms</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                    className="w-full px-4 py-3 border border-border text-dark-gray placeholder-muted/50 focus:outline-none focus:border-navy rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">Bathrooms</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={formData.bathrooms}
                    onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                    className="w-full px-4 py-3 border border-border text-dark-gray placeholder-muted/50 focus:outline-none focus:border-navy rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">Size (m²)</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full px-4 py-3 border border-border text-dark-gray placeholder-muted/50 focus:outline-none focus:border-navy rounded"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-dark-gray mb-2">Property Description</label>
              <textarea
                placeholder="Describe your property, features, and any special details..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 border border-border text-dark-gray placeholder-muted/50 focus:outline-none focus:border-navy rounded resize-none"
                rows={4}
                required
              />
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-4">Your Contact Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border text-dark-gray placeholder-muted/50 focus:outline-none focus:border-navy rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border text-dark-gray placeholder-muted/50 focus:outline-none focus:border-navy rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-border text-dark-gray placeholder-muted/50 focus:outline-none focus:border-navy rounded"
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-gold text-white px-6 py-4 font-semibold rounded hover:bg-navy transition-colors">
              Submit Listing Request
            </button>
            <p className="text-xs text-muted text-center">
              This is a demonstration. No actual listing will be created.
            </p>
          </form>
        )}
      </div>
    </>
  );
}

export default ListProperty;