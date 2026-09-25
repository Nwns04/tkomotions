import PageHeader from '../components/PageHeader';
import GalleryGrid from '../components/GalleryGrid';

function Gallery() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A visual journey through Ember"
        image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
      />
      <div className="container-hotel py-16 px-4 md:px-6 lg:px-8">
        <GalleryGrid />
      </div>
    </>
  );
}

export default Gallery;