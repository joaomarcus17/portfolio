import React from "react";
import {
  NavBar,
  DivCont,
  DivPai,
  ImgProgrammer,
  DivFilho,
  DivLogo,
  DivLinks,
  Links,
  LetrasBanner,
  DivFundo,
  LetrasP,
  DivFotoT,
  Habilidades,
  LetrasDeitadas,
  HabiCont,
  HabilidadePai,
  HabiNeto,
  Port,
  ConTs,
  Projetos,
  ProjetosBox,
  ContsBox,
  RedesSocias,
  GlobalStyle,
} from "./stylePort/style.js";
import programmer from "./images/programmer.png";
import eu from "./images/eu.png";
import thai_tanic from "./images/thai_tanic.png";
import BabyCare from "./images/BabyCare.png";
import react from "./images/react.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import email from "./images/email.png";
import github from "./images/github.png";
import whatsapp from "./images/whatsapp.png";
import logo from "./images/logo.jpg";

function App() {
  return (
    <DivPai>
      <GlobalStyle/>
      <DivFilho>
          <NavBar>
            <DivLogo>
              <Links href="#">Home</Links>
            </DivLogo>
            <DivLinks>
              <Links href="#">Sobre mim</Links>
              <Links href="#">Portfolio</Links>
              <Links href="#">Contatos</Links>
            </DivLinks>
          </NavBar>
        <DivFundo>
          <ImgProgrammer src={programmer} />
          <div>
            <LetrasBanner>João Marcus</LetrasBanner>
            <LetrasP>Programador Web</LetrasP>
          </div>
        </DivFundo>
        <DivCont>
          <h1>Sobre mim</h1>
        </DivCont>
        <DivFotoT>
          <div>
            <img src={eu} />
          </div>
          <p>
            Olá, sou João Marcus, tenho 22 anos e sou um estudante de Análise e
            Desenvolvimento de Sistemas da Faminas - Muriaé e um futuro
            Programador Web. Gosto de ler, ouvir musica, aprender coisas novas e
            de desafios.
          </p>
        </DivFotoT>
        <HabilidadePai>
          <h2>Habilidades</h2>
        </HabilidadePai>
        <Habilidades>
          <HabiNeto>
            <div>
              <LetrasDeitadas>Front-End</LetrasDeitadas>
            </div>
            <HabiCont>
              <p>CSS</p>
              <p>HTML</p>
              <p>JAVASCRIPT</p>
              <p>REACT</p>
            </HabiCont>
          </HabiNeto>
          <HabiNeto>
            <div>
              <LetrasDeitadas>Back-End</LetrasDeitadas>
            </div>
            <HabiCont>
              <p>PHP</p>
              <p>JAVA</p>
              <p>PYTHON</p>
            </HabiCont>
          </HabiNeto>
          <HabiNeto>
            <div>
              <LetrasDeitadas>Design</LetrasDeitadas>
            </div>
            <HabiCont>
              <p>FIGMA</p>
            </HabiCont>
          </HabiNeto>
        </Habilidades>
        <Port>
          <h1>Portfolio</h1>
        </Port>
        <Projetos>
          <ProjetosBox>
            <img src={thai_tanic} />
            <p>Thai Tanic</p>
          </ProjetosBox>
          <ProjetosBox>
            <img src={BabyCare} />
            <p>BabyCare</p>
          </ProjetosBox>
          <ProjetosBox>
            <img src={react} />
            <p>Whyzap</p>
          </ProjetosBox>
        </Projetos>
        <ConTs>
          <h1>Contatos</h1>
        </ConTs>
        <RedesSocias>
          <ContsBox>
            <img src={instagram} />
            <p>Instagram</p>
          </ContsBox>
          <ContsBox>
            <img src={linkedin} />
            <p>Likedin</p>
          </ContsBox>
          <ContsBox>
            <img src={email} />
            <p>Email</p>
          </ContsBox>
          <ContsBox>
            <img src={github} />
            <p>GitHub</p>
          </ContsBox>
          <ContsBox>
            <img src={whatsapp} />
            <p>Whatsapp</p>
          </ContsBox>
        </RedesSocias>
      </DivFilho>
    </DivPai>
  );
}

export default App;
