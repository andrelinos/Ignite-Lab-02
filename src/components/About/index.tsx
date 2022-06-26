import { Button } from '../Button';

export function About() {
  const [button, html, css, javascript, iframe] = document.querySelectorAll(
    'button, textarea, iframe',
  );

  return (
    <div className="flex flex-col gap-4 text-white p-8">
      <h1 className="text-2xl text-center my-24">
        Para iniciar sua jornada, acesse as aulas no menu aulas.
      </h1>
      <span className="h-[2px] bg-brand-blue-500 mb-20" />

      <h1 className="text-4xl text-center mb-8">
        Conheça o
        <strong className="text-brand-blue-500 font-bold"> React</strong>
      </h1>
      <p className="text-center">
        Uma biblioteca JavaScript para criar interfaces de usuário
      </p>
      <p />

      <div className="flex gap-4 flex-wrap justify-center">
        <span className="flex w-[20rem] flex-col gap-2">
          <h1 className="text-2xl font-bold">Declarativo</h1>
          <p>
            React faz com que a criação de UIs interativas seja uma tarefa
            fácil. Crie views simples para cada estado na sua aplicação, e o
            React irá atualizar e renderizar de forma eficiente apenas os
            componentes necessários na medida em que os dados mudam.
          </p>
          <p>
            Views declarativas fazem com que seu código seja mais previsível e
            simples de depurar.
          </p>
        </span>
        <span className="flex w-[20rem] flex-col gap-2">
          <h1 className="text-2xl font-bold">Baseado em componentes</h1>
          <p>
            Crie componentes encapsulados que gerenciam seu próprio estado e
            então, combine-os para criar UIs complexas.
          </p>
          <p>
            Como a lógica do componente é escrita em JavaScript e não em
            templates, você pode facilmente passar diversos tipos de dados ao
            longo da sua aplicação e ainda manter o estado fora do DOM.
          </p>
        </span>
        <span className="flex w-[20rem] flex-col gap-2">
          <h1 className="text-2xl font-bold">
            Aprenda uma vez, use em qualquer lugar
          </h1>
          <p>
            Não fazemos suposições sobre as outras tecnologias da sua stack,
            assim você pode desenvolver novos recursos com React sem reescrever
            o código existente.
          </p>
          <p>
            O React também pode ser renderizado no servidor, usando Node, e ser
            usado para criar aplicações mobile, através do
            <a
              href="https://reactnative.dev/"
              target="_blank"
              aria-label="React Native"
              rel="noreferrer"
            >
              {' '}
              React Native.
            </a>
          </p>
        </span>
        <div className="flex w-[20rem] flex-col gap-2">
          <h1 className="text-2xl font-bold">Vá mais além!</h1>
          <p>
            Você pode criar desde pequenas aplicações a sistemas complexos e de
            grande sucesso.
          </p>
          <span className="flex flex-col gap-4 py-6">
            <a
              href="https://pt-br.reactjs.org/docs/getting-started.html"
              className="text-brand-gray-900 flex justify-center items-center
              p-4 text-sm transition-colors disabled:opacity-70 rounded font-bold
              uppercase gap-2 bg-brand-blue-500 border border-brand-blue-500
              hover:border-brand-blue-500 hover:bg-transparent hover:text-brand-gray-100"
            >
              Comece a Usar
            </a>

            <Button
              url="https://pt-br.reactjs.org/tutorial/tutorial.html"
              title="Faça o Tutorial"
              variant="secondary"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
