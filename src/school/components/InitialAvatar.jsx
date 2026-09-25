function InitialAvatar({ name, initials, size = 'lg', color = '#1B4332' }) {
  const sizes = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-16 h-16 text-lg',
    lg: 'w-24 h-24 text-2xl',
    xl: 'w-32 h-32 text-3xl',
  };

  return (
    <div 
      className={`${sizes[size]} rounded-full flex items-center justify-center border-2 border-gold`}
      style={{ backgroundColor: color }}
    >
      <span className="text-white font-serif font-bold">
        {initials || name.split(' ').map(n => n[0]).join('')}
      </span>
    </div>
  );
}

export default InitialAvatar;