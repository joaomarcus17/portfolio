import React from 'react';
import { NavBar, DivCont, DivPai, DivImg, ImgBanner, ImgProgrammer, DivFilho } from './stylePort/style.js';
import banner from './images/banner.png'
import programmer from './images/programmer.png'

function App() {
    return (
        <DivPai>
            <DivFilho>
            <header>
                <NavBar>
                    <a href="#">Home</a>
                    <a href="#">Sobre mim</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contatos</a>

                </NavBar>
            </header>
            <DivImg>
                <ImgBanner src={banner} />
                <ImgProgrammer src={programmer} />
            </DivImg>
            <DivCont>
                <h1>Sobre mim</h1>

            </DivCont>

            <section class="Portfolio">
                <h1>Portfolio</h1>
            </section>
            </DivFilho>
        </DivPai>
    );
}

export default App;
