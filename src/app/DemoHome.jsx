import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { demosList } from './demoRegistry';

function DemoHome() {
  const gridRef = useRef(null);

  useEffect(() => {
    document.title = 'TKO Motions — Premium Website Demos';
    
    // Animate cards on load
    gsap.fromTo('.demo-card',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">TKO Motions</h1>
              <p className="text-sm text-gray-500 mt-1">Premium Website Demos</p>
            </div>
            <a 
              href="https://tkomotions.com" 
              className="text-sm text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our Site →
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Demo Collection
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our premium website templates across various industries. 
            Each demo is fully functional and ready for customization.
          </p>
        </div>

        {/* Demo Grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {demosList.map((demo) => (
            <Link
              key={demo.slug}
              to={`/${demo.slug}`}
              className="demo-card group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl">{demo.icon}</span>
                </div>
                {demo.featured && (
                  <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
                <span className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {demo.techStack.join(' · ')}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {demo.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {demo.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    demo.featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {demo.featured ? 'Ready' : 'Coming Soon'}
                  </span>
                  <span className="text-sm text-blue-600 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            What's Included?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Fully Responsive</h4>
              <p className="text-sm text-gray-600">
                Every demo is optimized for mobile, tablet, and desktop viewing.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Modern Tech Stack</h4>
              <p className="text-sm text-gray-600">
                Built with React, Tailwind CSS v4, and GSAP animations.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Easy to Customize</h4>
              <p className="text-sm text-gray-600">
                Clean code structure with modular components for quick edits.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 TKO Motions. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Premium web design & development
          </p>
        </div>
      </footer>
    </div>
  );
}

export default DemoHome;