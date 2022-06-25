import { Logo } from './Logo';

export function Header() {
  return (
    <header
      className="flex w-full h-24 justify-start lg:justify-center p-6 items-center
      bg-brand-gray-700 border-brand-gray-600 fixed z-40"
    >
      <a href="/">
        <img src="/assets/images/logo.svg" alt="Logo Ignite lab" />
      </a>
    </header>
  );
}
