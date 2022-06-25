import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { MonitorPlay, Planet } from 'phosphor-react';

import { Button } from '~/components/Button';
import { ButtonCard } from '~/components/ButtonCard';
import { useCreateSubscriberMutationMutation } from '~/graphql/generated';

export default function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutationMutation();

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  }

  return (
    <div className="w-full h-full bg-brand-gray-900 bg-home items-center bg-blur bg-no-repeat">
      <div className="flex w-full h-full flex-col">
        <div className="w-full max-w-[1440px] mx-auto h-full flex  justify-between pt-28 px-8 pb-8 gap-10">
          <div className="flex flex-col gap-8">
            <div
              className="flex flex-1 flex-col text-[2.5rem] gap-4 leading-tight
             text-brand-gray-100"
            >
              <h1 className="max-w-2xl">
                Construa uma
                <strong className="text-brand-blue-500 pl-2">
                  aplicação completa
                </strong>
                , do zero
                {',  '}
                <strong className="text-brand-blue-500">com React</strong>
              </h1>
              <p className="max-w-2xl text-lg text-brand-gray-300">
                Em apenas uma semana você vai dominar na prática uma das
                tecnologias mais utilizadas e com alta demanda para acessar as
                melhores oportunidades do mercado.
              </p>
            </div>
          </div>
          <form className="flex flex-col w-96 h-80 p-6 border border-brand-gray-600 rounded-md">
            <h1 className="text-brand-gray-100 text-xl py-6 font-bold">
              Inscreva-se gratuitamente
            </h1>
            <div className="flex flex-col gap-2">
              <input
                className="w-80 p-4 rounded-md bg-brand-gray-900"
                type="text"
                placeholder="Seu nome completo"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="w-80 p-4 rounded-md bg-brand-gray-900 mb-6"
                type="text"
                placeholder="Digite seu e-mail"
                onChange={(event) => setEmail(event.target.value)}
              />

              <Button
                type="button"
                title="GARANTIR MINHA VAGA"
                onClick={handleSubscribe}
                disabled={loading}
              />
            </div>
          </form>
        </div>

        <div
          className="w-full max-w-[1440px] grid justify-center grid-cols-auto lg:grid-cols-2 2xl:grid-cols-3 gap-8 mt-20 mx-auto
            mb-20 p-8"
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
    </div>
  );
}
