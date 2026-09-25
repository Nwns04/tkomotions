import PageHeader from '../components/PageHeader';
import GalleryGrid from '../components/GalleryGrid';
import BookingEnquiryModal from '../components/BookingEnquiryModal';

function Gallery() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="The house in pictures"
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
      />

      <div className="container-hotel py-16">
        <GalleryGrid />
      </div>

      
    </>
  );
}

export default Gallery;