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
          Web Javascript Fullstack Engineer
        </h3>
        <p className="text-md py-1 text-gray-800 md:text-xl mt-5">
          Graduated in Information Systems and IT Management, with over 8 years
          of experience as a full-stack developer and tech lead, primarily
          focused on NodeJS and ReactJS.{" "}
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
          Services I have expertise in and can assist you with:
        </h1>
        <p className="mt-1 text-md mb-10">
          I possess substantial experience in developing end-to-end applications
          (full-stack) from prototyping, architecture, database design, API
          development, frontend, to configuration and deployment on cloud
          servers like AWS. I am well-versed in agile methodologies such as
          Scrum.
        </p>

        <div className="mt-4 flex flex-col md:flex-row gap-8">
          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src={software} className="w-48" alt="gambar" />
            <h2 className="text-xl">Frontend Web e Mobile</h2>
            <p className="text-gray-500">
              Always prioritizing the use of best practices and cutting-edge
              technologies to ensure the quality, performance, and scalability
              of frontends and mobile applications.
            </p>
            <p className="text-xl ">Tools</p>
            <ul>
              <li>ReactJS</li>
              <li>React Native</li>
              <li>NextJS</li>
              <li>Typescript</li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src={cloud} className="w-48" alt="gambar" />
            <h2 className="text-xl">Backend, API's & Integrations</h2>
            <p className="text-gray-500">
              With a keen focus on quality and scalability, my approach to
              backend development centers around precision in description and
              responsibility. This is particularly crucial when addressing the
              intricacies of client data and internal security.
            </p>
            <p className="text-xl">Tools</p>
            <ul>
              <li>NodeJS</li>
              <li>NestJS</li>
              <li>Database SQL e noSQL</li>
              <li>Typescript</li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src={trophy} className="w-48" alt="gambar" />
            <h2 className="text-xl">Agile Methodologies</h2>
            <p className="text-gray-500">
              Throughout my career, I've had the opportunity to work with Agile
              methodologies, serving as a Scrum team member, Product Owner (PO),
              and Scrum Master. I believe that these skills can not only
              contribute to the execution of my tasks but also enhance the
              overall effectiveness of the team.
            </p>
            <p className="text-xl ">Tools</p>
            <ul>
              <li>Scrum</li>
              <li>Kanban</li>
              <li>Azure devops</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="license" className="mt-10">
        <h1 className="text-xl font-medium">Portfolio</h1>
        <p className="mt-1 text-md">
          Here are some of the projects in which I've had the opportunity to
          participate:
        </p>

        <div className="flex flex-col md:flex-row gap-8 mt-3">
          <div className="w-full md:w-2/6 shadow-md rounded ">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img src={planoSaude} />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium">Healthcare Tools</h1>
              <p className="">
                Engaged in the maintenance and development of tools for one of
                the largest health plans in Brazil, including streaming projects
                such as remote patient care.
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
                Hybrid Customer Service Portal via WhatsApp
              </h1>
              <p className="">
                SaaS customer service portal capable of operating either
                automatically (using a bot) or through attendants and segmented
                departments.
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
                Production Control and Validation System for Pharmaceutical
                Products
              </h1>
              <p className="">
                An ERP system tailored for the pharmaceutical industry,
                overseeing the entire workflow of a drug manufacturing facility.
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
                Fleet Management ERP with Geolocation Integration
              </h1>
              <p className="">
                An application designed to monitor and control the client's
                (multinational) fleet in real-time using geolocation technology.
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
                Tech Lead for Call Center Management ERP
              </h1>
              <p className="">
                Led the development of an ERP system for the control and
                management of call centers (both outbound and inbound). In this
                project, I had the opportunity to work on integrations with VoIP
                PBX systems.
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
                Commercial Automation SaaS
              </h1>
              <p className="">
                Developed an ERP solution for companies, providing comprehensive
                control over accounts, inventory, invoices, and overall internal
                processes.
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
            Do you have any questions or would you like to get in touch
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
            <a href="#"> Álvaro Ferreira </a>. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
