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
} from "./stylePort/style.js";
import programmer from "./images/programmer.png";
import eu from "./images/eu.png";

function App() {
  return (
    <DivPai>
      <DivFilho>
        <header>
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
        </header>
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
              <LetrasDeitadas>Front-End</LetrasDeitadas>
            </div>
            <HabiCont>
              <p>CSS</p>
              <p>HTML</p>
              <p>JAVASCRIPT</p>
              <p>REACT</p>
            </HabiCont>
          </HabiNeto>
        </Habilidades>
        <div>
          <h1>Portfolio</h1>
        </div>
      </DivFilho>
    </DivPai>
  );
}

export default App;
