function RE_FeatureItem({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/70">{description}</p>
    </div>
  );
}

export default RE_FeatureItem;