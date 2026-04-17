export default function MainLayout({ children }) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header>Header</header>
        <main className="container grow">{children}</main>
      </div>
      <footer>Footer</footer>
    </>
  );
}
