// src/features/Map.jsx

export default function Map() {
  return (
    <div className="overflow-hidden rounded-xl">
      <iframe
        title="Pet shop location map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=13.399%2C52.509%2C13.417%2C52.518&layer=mapnik&marker=52.5135%2C13.408"
        className="aspect-square md:aspect-1360/350 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
