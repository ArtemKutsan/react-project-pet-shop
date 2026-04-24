// src/features/Map.jsx

export default function Map() {
  return (
    <div className="overflow-hidden rounded-xl">
      <iframe
        title="Exact location map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=13.4020%2C52.5102%2C13.4068%2C52.5122&layer=mapnik&marker=52.511205931591384%2C13.404467871163769"
        className="aspect-square md:aspect-1360/350 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
