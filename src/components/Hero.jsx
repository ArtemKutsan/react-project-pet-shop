import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-150 flex bg-[url(/images/hero.jpg)] bg-cover bg-center">
      <div className="relative container max-w-380">
        <h1 className="mt-20 max-w-5xl text-white">Amazing Discounts on Pets Products!</h1>
        <Link
          to="/all-sales"
          className="mt-8 px-14 button text-xl font-semibold button-primary min-h-14"
        >
          Check out
        </Link>
      </div>
    </section>
  );
}
