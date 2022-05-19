import React from 'react';
import { NavBar, DivCont, DivPai, ImgProgrammer, DivFilho, DivLogo, DivLinks, Links, LetrasBanner, DivFundo, LetrasP} from './stylePort/style.js';
import programmer from './images/programmer.png'
import eu from './images/eu.png'


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
               
        
                    <p>Olá, sou João Marcus, tenho 22 anos e sou um estudante de Análise e Desenvolvimento de Sistemas da Faminas - Muriaé e um futuro Programador Web. Gosto de ler, ouvir musica, aprender coisas novas e de desafios.</p>

                
                <section class="Portfolio">
                    <h1>Portfolio</h1>
                </section>
            </DivFilho>
        </DivPai>
    );
}

export default App;
