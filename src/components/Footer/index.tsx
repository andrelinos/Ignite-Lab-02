import {
  FacebookLogo,
  House,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from 'phosphor-react';

export function Footer() {
  return (
    <div
      className="flex w-full flex-col lg:h-64 mt-20 mb-32 lg:mb-6 border-t-[1px]
      border-brand-gray-600 border-opacity-70 py-16 lg:py-4 px-6"
    >
      <div
        className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-between
          items-center h-14 gap-2"
      >
        <div
          className="flex gap-6 items-center text-lg flex-col lg:flex-row
          text-brand-gray-300 text-center"
        >
          <a
            href="https://www.rocketseat.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/images/logo-rockeat.svg" alt="Rocketseat" />
          </a>
          Rocketseat - Todos os direitos reservados
        </div>
        <a
          href="#policy"
          className="text-lg text-brand-gray-300 hover:text-brand-green-500 transition-colors"
        >
          Política de privacidade
        </a>
      </div>
      <div
        className="flex max-w-2xl h-16 bg-brand-gray-900  bottom-0 right-0 left-0
            px-6 justify-between items-center bg-opacity-80 mx-auto py-8 gap-6 mt-10"
      >
        <button
          type="button"
          className="text-brand-gray-300 hover:text-brand-green-300 transition-all"
        >
          <House size={40} weight="thin" />
        </button>
        <button
          type="button"
          className="text-brand-gray-300 hover:text-brand-green-300 transition-all"
        >
          <WhatsappLogo size={40} weight="thin" />
        </button>
        <button
          type="button"
          className="text-brand-gray-300 hover:text-brand-green-300 transition-all"
        >
          <InstagramLogo size={40} weight="thin" />
        </button>
        <button
          type="button"
          className="text-brand-gray-300 hover:text-brand-green-300 transition-all"
        >
          <FacebookLogo size={40} weight="thin" />
        </button>
        <button
          type="button"
          className="text-brand-gray-300 hover:text-brand-green-300 transition-all"
        >
          <LinkedinLogo size={40} weight="thin" />
        </button>
      </div>
    </div>
  );
}
