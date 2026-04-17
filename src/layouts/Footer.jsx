// src/layouts/Footer/index.jsx
import Contact from '../features/Contact';
import Map from '../features/Map';

export default function Footer() {
  return (
    <footer className="bg-white py-14 md:py-20">
      <div className="container max-w-380 space-y-8">
        <h2 className="mb-10">Contact</h2>
        <Contact />
        <Map />
      </div>
    </footer>
  );
}
