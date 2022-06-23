import { Link } from 'react-router-dom';

import { Books, MonitorPlay } from 'phosphor-react';

import { Button } from '~/components/Button';
import { Card } from '~/components/Video/Card';

export default function Home() {
  return (
    <div className="w-full h-full bg-brand-gray-900 bg-home items-center">
      <div className="flex w-full h-full flex-col">
        <div
          className="w-full max-w-[1440px] mx-auto h-full flex p-32 gap-10
          bg-[url('assets/images/logo-react.svg')] bg-no-repeat bg-[center_top_5rem]"
        >
          <div className="flex flex-col gap-8">
            <img className="w-52" src="assets/images/logo.svg" alt="logo" />
            <div className="flex flex-1 flex-col text-4xl gap-4 text-brand-gray-100">
              <div>
                Construa uma
                <span className="text-brand-blue-500">aplicação completa,</span>
              </div>
              <div>
                do zero, com
                <span className="text-brand-blue-500"> React JS</span>
              </div>
              <p className="text-lg text-brand-gray-300">
                Em apenas uma semana você vai dominar na prática uma das
                tecnologias mais utilizadas e com alta demanda para acessar as
                melhores oportunidades do mercado.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-96 h-80 p-6 border border-brand-gray-600 rounded-md">
            <h1 className="text-brand-gray-100 text-xl py-6 font-bold">
              Inscreva-se gratuitamente
            </h1>
            <div className="flex flex-col gap-2">
              <input
                className="w-80 p-4 rounded-md bg-brand-gray-900"
                type="text"
                placeholder="Seu nome completo"
              />
              <input
                className="w-80 p-4 rounded-md bg-brand-gray-900 mb-6"
                type="text"
                placeholder="Digite seu e-mail"
              />
              <Button title="GARANTIR MINHA VAGA" url="" />
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-8 mt-20 max-w-7xl mx-auto mb-20">
          <Card
            title="Acessar evento"
            url="/event"
            icon={<MonitorPlay size={40} weight="thin" />}
            text="Acesse o evento agora mesmo!"
          />
        </div>
      </div>
    </div>
  );
}
