function RE_TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-gold text-lg">★</span>
        ))}
      </div>
      <p className="text-muted leading-relaxed mb-6">"{testimonial.quote}"</p>
      <div className="flex items-center space-x-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-dark-gray text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default RE_TestimonialCard;