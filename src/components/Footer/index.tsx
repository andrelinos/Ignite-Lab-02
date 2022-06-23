export function Footer() {
  return (
    <div className="w-full mt-20 mb-6 border-t-[1px] border-brand-gray-600 border-opacity-70">
      <div className="flex w-full max-w-6xl mx-auto justify-between items-center  h-14">
        <div className="flex gap-6 items-center text-lg text-brand-gray-300">
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
    </div>
  );
}
