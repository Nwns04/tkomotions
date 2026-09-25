function FacultyCard({ member }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <div className="h-64 overflow-hidden bg-slate/10">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-serif font-bold text-ink mb-1">{member.name}</h3>
        <p className="text-deep-green text-sm font-medium mb-3">{member.role}</p>
        <p className="text-slate text-sm leading-relaxed">{member.bio}</p>
        {member.quote && (
          <div className="mt-4 pt-4 border-t border-slate/20">
            <p className="text-sm italic text-slate">"{member.quote}"</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FacultyCard;