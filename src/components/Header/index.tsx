export function Header() {
  return (
    <header
      className="flex w-full justify-start lg:justify-center p-6 items-center
      bg-brand-gray-700 border-brand-gray-600 fixed z-40"
    >
      <a href="/">
        <img
          src="/assets/images/logo.svg"
          alt="Logo Ignite lab"
          className="w-[80%]"
        />
      </a>
    </header>
  );
}
