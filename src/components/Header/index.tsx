import { Logo } from './Logo';

export function Header() {
  return (
    <header
      className="w-full py-5 flex justify-center items-center bg-brand-gray-700
        border-brand-gray-600 fixed"
    >
      <Logo />
    </header>
  );
}
