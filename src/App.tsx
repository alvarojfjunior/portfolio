//import "./App.css";
import Navbar from "./components/Navbar";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
  AiFillEnvironment,
  AiFillPhone,
} from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import profile from "./assets/profile.jpg";
import software from "./assets/software.png";
import cloud from "./assets/cloud.png";
import trophy from "./assets/trophy.png";
import farmaceutica from "./assets/farmaceutica.jpg";
import geolocalizacao from "./assets/geolocalizacao.jpg";
import planoSaude from "./assets/plano-saude.jpg";
import callCenter from "./assets/call-center.jpg";
import whatsapp from "./assets/whatsapp.jpeg";
import comercio from "./assets/comercio.jpg";

function App() {
  return (
    <main className="px-8 md:px-20 lg:px-40">
      <Navbar />

      <section
        id="home"
        className="min-h-screen text-center mt-4 flex flex-col justify-center "
      >
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-5 mt-20">
          <img src={profile} />
        </div>
        <h1 className="text-3xl md:text-5xl font-medium text-teal-500 mb-2">
          ÁLVARO FERREIRA
        </h1>
        <h3 className="text-xl md:text-2xl text-teal-500 mb-2">
          Desenvolvedor fullstack Web & Mobile
        </h3>
        <p className="text-md py-1 text-gray-800 md:text-xl mt-5">
          Graduado em sistemas de informações e Gestão de T.I. e com mais de 8
          anos de experiencia como desenvolvedor fullstack e techlead focado
          principalmente em NodeJS e ReactJS.{" "}
        </p>

        <div className="text-5xl py-4 flex justify-center gap-10">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alvarojfjunior/"
            rel="noreferrer"
          >
            <AiFillLinkedin className="cursor-pointer text-gray-600" />
          </a>
          <a
            target="_blank"
            href="https://github.com/alvarojfjunior/"
            rel="noreferrer"
          >
            <AiFillGithub className="cursor-pointer text-gray-600" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/alvarojfjunior/"
            rel="noreferrer"
          >
            <AiFillInstagram className="cursor-pointer text-gray-600" />
          </a>
          <a
            target="_blank"
            href="https://wa.me/5538991611042?text=Ol%C3%A1+%C3%81lvaro%2C+vi+seu+portf%C3%B3lio+e+queria+saber+um+pouco+mais+sobre+voc%C3%AA%21"
            rel="noreferrer"
          >
            <FaWhatsappSquare className="cursor-pointer text-gray-600" />
          </a>
        </div>
      </section>

      <section id="service" className="">
        <h1 className="text-xl font-medium">
          Serviços que tenho experiencia e posso te ajudar:
        </h1>
        <p className="mt-1 text-md mb-10">
          Tenho sólida experiencia em desenvolvimento de aplicações completas
          (full-stack) da prototipação, arquitetura, banco de dados, api,
          frontend a configuração e deploy em servidores cloud como AWS com a
          utilização de metodologias ágeis como o scrum.
        </p>

        <div className="mt-4 flex flex-col md:flex-row gap-8">
          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src={software} className="w-48" alt="gambar" />
            <h2 className="text-xl">Frontend Web e Mobile</h2>
            <p className="text-gray-500">
              Sempre priorizando a utilização das melhores praticas e
              tecnologias para manter a qualidade, desempenho e escalabilidade
              dos frontends e aplicações mobile.
            </p>
            <p className="text-xl ">Ferramentas que uso</p>
            <ul>
              <li>ReactJS</li>
              <li>React Native</li>
              <li>NextJS</li>
              <li>Typescript</li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src={cloud} className="w-48" alt="gambar" />
            <h2 className="text-xl">Backend, API's & Integrações</h2>
            <p className="text-gray-500">
              Também pensando em qualidade e escalabilidade, ao desenvolver os
              backends priorizo a descrição e responsabilidade para tratar de
              dados e seguranaça interna dos clientes.
            </p>
            <p className="text-xl">Ferramentas que uso</p>
            <ul>
              <li>NodeJS</li>
              <li>NestJS</li>
              <li>Banco de dados SQL e noSQL</li>
              <li>Typescript</li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src={trophy} className="w-48" alt="gambar" />
            <h2 className="text-xl">Gestão Ágil</h2>
            <p className="text-gray-500">
              Ao decorrer da carreira tive a oportunidade de trabalhar com Ágil
              como scrum team, PO e scrum master. Acredito que tais habilidades
              podem não só colaborar para a execução de minhas atividades, mas
              também ajudar o time como um todo.
            </p>
            <p className="text-xl ">Ferramentas que uso</p>
            <ul>
              <li>Scrum</li>
              <li>Kanban</li>
              <li>Azure devops</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="license" className="mt-10">
        <h1 className="text-xl font-medium">Portfólio</h1>
        <p className="mt-1 text-md">
          Aqui estão alguns dos projetos que já tive a oportunidade de atuar
        </p>

        <div className="flex flex-col md:flex-row gap-8 mt-3">
          <div className="w-full md:w-2/6 shadow-md rounded ">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img src={planoSaude} />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium">
                Ferramentas para plano de saúde
              </h1>
              <p className="">
                Manutenção e criação de ferramentas para um dos maiores planos
                de saúde do brasil, incluindo projetos de stream como
                atendimento de paciente remoto.
              </p>
              <p className="text-sm text-gray-500 mt-5">2022 - 2023</p>
            </div>
          </div>

          <div className="w-full md:w-2/6 shadow-md rounded ">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img src={whatsapp} />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium">
                Portal de atendimento híbrido via whatsapp
              </h1>
              <p className="">
                Saas de atendimento ao cliente podendo ser de forma automática
                (bot), ou por atendente e setores.
              </p>
              <br />
              <p className="text-sm text-gray-500 mt-2">2022</p>
            </div>
          </div>

          <div className="w-full md:w-2/6 shadow-md rounded ">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img src={farmaceutica} />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium">
                Sistema de controle de produção e validação de produtos
                farmaceuticos
              </h1>
              <p className="">
                ERP na área farmaceutica controla todo o fluxo de uma fabrica de
                medicamentos.
              </p>
              <br />
              <p className="text-sm text-gray-500">2022</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-3">
          <div className="w-full md:w-2/6 shadow-md rounded ">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img src={geolocalizacao} />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium">
                ERP de gestão de frotas utilizando geolocalização.
              </h1>
              <p className="">
                Aplicação que monitora e controla em tempo real a frota do
                cliente (multinacional).
              </p>
              <br />
              <p className="text-sm text-gray-500">2021</p>
            </div>
          </div>

          <div className="w-full md:w-2/6 shadow-md rounded ">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img src={callCenter} />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium">
                Teachlead de ERP de gestão de Call Center.
              </h1>
              <p className="">
                ERP de controle e gestão de call center (ativo e passivo). Neste
                projeto tive a oportunidade de trabalhar com integrações de Pabx
                voip.
              </p>
              <p className="text-sm text-gray-500">2020 - 2021</p>
            </div>
          </div>

          <div className="w-full md:w-2/6 shadow-md rounded ">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img src={comercio} />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium">
                Saas de automação comercial.
              </h1>
              <p className="">
                ERP para empresas com controle de contas, estoque, notas, e
                processos internos em geral.
              </p>
              <br />
              <p className="text-sm text-gray-500 pt-7">2019 - 2020</p>
            </div>
          </div>
        </div>
      </section>

      <section id="footer" className="mt-5 rounded bg-black py-8 px-8">
        <div className="text-white md:text-center">
          <h1 className="font-medium text-lg text-white text-center">
            Contact Me
          </h1>
          <p className="text-center">
            Ficou com alguma dúvida, ou quer falar comigo?
          </p>

          <ul className="md:flex justify-center gap-10 mt-5 mb-5">
            <li className="flex justify-center gap-2">
              <AiFillMail className="mt-1" />
              <p>alvarojfjunior@gmail.com</p>
            </li>
            <li className="flex justify-center gap-2">
              <AiFillEnvironment className="mt-1" />
              <p>Montes Claros, MG. Brasil</p>
            </li>
            <li className="flex justify-center gap-2">
              <AiFillPhone className="mt-1" />
              <p>+55 38 99161-1042</p>
            </li>
          </ul>

          <div className="flex justify-center text-xl text-white gap-4 mt-2 md:justify-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alvarojfjunior/"
              rel="noreferrer"
            >
              <AiFillLinkedin className="cursor-pointer text-gray-300" />
            </a>
            <a
              target="_blank"
              href="https://github.com/alvarojfjunior/"
              rel="noreferrer"
            >
              <AiFillGithub className="cursor-pointer text-gray-300" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/alvarojfjunior/"
              rel="noreferrer"
            >
              <AiFillInstagram className="cursor-pointer text-gray-300" />
            </a>
            <a
              target="_blank"
              href="https://wa.me/5538991611042?text=Ol%C3%A1+%C3%81lvaro%2C+vi+seu+portf%C3%B3lio+e+queria+saber+um+pouco+mais+sobre+voc%C3%AA%21"
              rel="noreferrer"
            >
              <FaWhatsappSquare className="cursor-pointer text-gray-300" />
            </a>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <p className="text-center text-sm text-gray-300 sm:text-center">
            © 2022
            <a href="#"> Álvaro Ferreira </a>. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
