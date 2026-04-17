import Header from './Header';

export default function MainLayout({ children }) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="grow">{children}</main>
      </div>
      <footer>Footer</footer>
    </>
  );
}
