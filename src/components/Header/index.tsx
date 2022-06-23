import { Logo } from './Logo';

export function Header() {
  return (
    <header
      className="w-full h-24 py-5 flex justify-center items-center bg-brand-gray-700
        border-brand-gray-600 fixed z-10"
    >
      <a href="/">
        <Logo />
      </a>
    </header>
  );
}
