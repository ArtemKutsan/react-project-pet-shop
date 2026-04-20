import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="py-14 md:py-20">
      <div className="container max-w-380 grid justify-items-center gap-6 text-center">
        <div className="grid grid-cols-[1fr_auto_1fr] items-end">
          <p className="text-[120px] font-extrabold leading-none text-blue-600 md:text-[240px]">
            4
          </p>
          <img
            src="/images/not-found.png"
            alt="Dog on the 404 page"
            className="w-20 self-center object-contain md:w-64"
          />
          <p className="text-[120px] font-bold leading-none text-blue-600 md:text-[240px]">4</p>
        </div>

        <div className="grid max-w-xl gap-4">
          <h2>Page Not Found</h2>
          <p className="text-lg text-gray-500">
            We&apos;re sorry, the page you requested could not be found. Please go back to the
            homepage.
          </p>
        </div>

        <Link
          to="/"
          className="flex min-h-14 items-center justify-center rounded-sm bg-blue-600 px-8 text-xl font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
