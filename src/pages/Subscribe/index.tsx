import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { MonitorPlay, Planet } from 'phosphor-react';

import { Button } from '~/components/Button';
import { ButtonCard } from '~/components/ButtonCard';
import { useCreateSubscriberMutationMutation } from '~/graphql/generated';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutationMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div
        className="w-full lg:max-w-[1100px] flex flex-col lg:flex-row items-center
        justify-between mt-16 lg:mt-20 mx-auto"
      >
        <div
          className="flex max-w-[500px] xl:max-w-[640px] flex-1 flex-col text-[2.5rem]
           gap-4 leading-tight text-brand-gray-100 px-8 xl:px-2"
        >
          <h1 className="lg:max-w-2xl text-center lg:text-left">
            Construa uma
            <strong className="text-brand-blue-500 pl-2">
              aplicação completa
            </strong>
            , do zero
            {',  '}
            <strong className="text-brand-blue-500">com React</strong>
          </h1>
          <p className="max-w-2xl text-lg text-center lg:text-left text-brand-gray-200">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div
          className="flex w-full lg:w-80 flex-col p-8 mt-10 lg:mt-0 lg:mr-8 xl:mr-0 bg-brand-gray-900
          lg:bg-gray-700 lg:border lg:border-gray-500 lg:rounded"
        >
          <strong className="text-2xl mb-6 text-center lg:block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full pt-4 pb-8 lg:pt-0 lg:pb-0"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />

            <Button
              type="button"
              title="GARANTIR MINHA VAGA"
              onClick={handleSubscribe}
              disabled={loading}
            />
          </form>
        </div>
      </div>
      <img src="/assets/images/code-mockup.png" className="mt-10" alt="" />
      <div
        className="w-full max-w-[1440px] grid justify-center grid-cols-1 md:grid-cols-2
          2xl:grid-cols-3 gap-8 mt-20 mx-auto mb-20 p-8"
      >
        <ButtonCard
          title="Acessar evento"
          url="/event"
          icon={<MonitorPlay size={40} weight="thin" />}
          text="Acesse o evento agora mesmo!"
        />
        <ButtonCard
          title="Projeto no Github"
          url="https://www.github.com/andrelinos/Ignite-Lab-02"
          route="out"
          icon={<MonitorPlay size={40} weight="thin" />}
          text="Acesse o projeto no github"
        />
        <ButtonCard
          title="Site do auto"
          url="https://andrelino.dev"
          route="out"
          icon={<Planet size={32} weight="thin" />}
          text="Acesse o site do autor desta obra"
        />
      </div>
    </div>
  );
}
