import { useParams, Link } from 'react-router-dom';
import RE_PropertyGallery from '../components/RE_PropertyGallery';
import RE_ViewingRequestModal from '../components/RE_ViewingRequestModal';
import RE_PropertyCard from '../components/RE_PropertyCard';
import { properties } from '../data/properties';
import { agents } from '../data/agents';
import { usePropertyContext } from '../context/PropertyContext';
import { formatNaira } from '../../shared/utils/formatCurrency';

function PropertyDetails() {
  const { slug } = useParams();
  const { openViewingModal } = usePropertyContext();
  const property = properties.find(p => p.slug === slug);
  
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Property Not Found</h1>
          <Link to="/real-estate/properties" className="text-gold font-semibold">← Back to Properties</Link>
        </div>
      </div>
    );
  }

  const agent = agents.find(a => a.id === property.agent);
  const similarProperties = properties
    .filter(p => p.id !== property.id && p.location === property.location)
    .slice(0, 3);

  const statusLabels = {
    'for-sale': 'For Sale',
    'for-rent': 'For Rent',
    'commercial-sale': 'Commercial Sale',
    'commercial-rent': 'Commercial Rent',
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted mb-6">
          <Link to="/real-estate" className="hover:text-navy">Home</Link> / 
          <Link to="/real-estate/properties" className="hover:text-navy"> Properties</Link> / 
          <span className="text-dark-gray"> {property.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-bold text-navy mb-2">{property.title}</h1>
        <p className="text-muted mb-4">📍 {property.location}, Abuja</p>

        {/* Price and Status */}
        <div className="flex items-center gap-4 mb-8">
          <p className="text-3xl font-bold text-gold">{formatNaira(property.price)}</p>
          <span className="bg-navy text-white text-sm px-3 py-1 rounded-full">{statusLabels[property.status]}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gallery and Description */}
          <div className="lg:col-span-2">
            <RE_PropertyGallery images={property.images} title={property.title} />

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Description</h2>
              <p className="text-muted leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map(feature => (
                  <div key={feature} className="bg-light-gray rounded-lg p-3 text-sm text-dark-gray">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Card */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-border rounded-lg p-6 sticky top-24">
              <p className="text-2xl font-bold text-gold mb-4">{formatNaira(property.price)}</p>
              
              <div className="grid grid-cols-3 gap-3 text-center mb-6 border-b border-border pb-6">
                {property.bedrooms > 0 && (
                  <div>
                    <p className="font-bold text-dark-gray">{property.bedrooms}</p>
                    <p className="text-xs text-muted">Beds</p>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div>
                    <p className="font-bold text-dark-gray">{property.bathrooms}</p>
                    <p className="text-xs text-muted">Baths</p>
                  </div>
                )}
                <div>
                  <p className="font-bold text-dark-gray">{property.size}</p>
                  <p className="text-xs text-muted">m²</p>
                </div>
              </div>

              {/* Agent */}
              {agent && (
                <div className="mb-6">
                  <h3 className="font-semibold text-dark-gray mb-3">Listed By</h3>
                  <div className="flex items-center space-x-3">
                    <img src={agent.image} alt={agent.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-dark-gray text-sm">{agent.name}</p>
                      <p className="text-xs text-muted">{agent.role}</p>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={() => openViewingModal(property)}
                className="w-full bg-gold text-white px-6 py-3 font-semibold rounded mb-3 hover:bg-navy transition-colors"
              >
                Request Viewing
              </button>
              
              {agent && (
                <a
                  href={`https://wa.me/${agent.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green text-white px-6 py-3 font-semibold rounded block text-center hover:bg-green-600 transition-colors"
                >
                  WhatsApp Agent
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-navy mb-6">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map(prop => (
                <RE_PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        )}
      </div>

      <RE_ViewingRequestModal />
    </>
  );
}

export default PropertyDetails;