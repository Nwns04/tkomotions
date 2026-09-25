function EventCard({ event }) {
  return (
    <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-oak-green text-white rounded-lg flex flex-col items-center justify-center flex-shrink-0">
        <span className="text-lg font-bold leading-none">19</span>
        <span className="text-xs uppercase">Oct</span>
      </div>
      <div>
        <h4 className="font-medium text-ink mb-1">{event.title}</h4>
        <p className="text-xs text-slate mb-1">{event.time} · {event.location}</p>
        <p className="text-xs text-slate/70">{event.description}</p>
      </div>
    </div>
  );
}

export default EventCard;