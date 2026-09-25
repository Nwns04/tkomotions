function SchoolTestimonial({ testimonial }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
      <svg className="w-8 h-8 text-gold mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391C14.017 8.78 16.688 5.834 21 5v2.935c-2.059.417-3.35 1.64-3.874 3.67H21V21h-6.983zM3 21v-7.391C3 8.78 5.688 5.834 10 5v2.935c-2.059.417-3.35 1.64-3.874 3.67H10V21H3z"/>
      </svg>
      <blockquote className="text-ink leading-relaxed mb-4">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-oak-green flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="font-medium text-ink text-sm">{testimonial.name}</p>
          <p className="text-xs text-slate">{testimonial.role}</p>
          <p className="text-xs text-deep-green">{testimonial.nationality}</p>
        </div>
      </div>
    </div>
  );
}

export default SchoolTestimonial;