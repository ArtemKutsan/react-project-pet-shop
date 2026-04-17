// src/features/Map/index.jsx

export default function Map() {
  return (
    <div className="overflow-hidden rounded-xl">
      <iframe
        title="Pet shop location map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=13.399%2C52.509%2C13.417%2C52.518&layer=mapnik&marker=52.5135%2C13.408"
        className="h-80 w-full border-0 md:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
