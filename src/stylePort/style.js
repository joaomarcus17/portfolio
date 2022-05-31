import styled from "styled-components";
import banner from "../images/banner.png";

export const DivPai = styled.div`
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivFilho = styled.div`
  width: 1600px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const DivLogo = styled.div`
  display: flex;
`;
export const NavBar = styled.div`
  display: flex;
  margin: 0.5em;
  justify-content: space-between;
`;
export const DivLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15em;
`;
export const Links = styled.a`
  text-decoration: none;
  color: #990285;
`;

export const DivCont = styled.div`
  display: flex;
  justify-content: center;
  color: #990285;
`;
export const DivFundo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  background-image: url(${banner});
  background-size: cover;

  div {
    text-align: center;
    padding: 0 50px;
  }
`;

export const ImgProgrammer = styled.img``;

export const LetrasBanner = styled.h1`
  color: #c4c4c4;
  font-size: 6em;
  margin-top: 1em;
`;

export const LetrasP = styled.p`
  color: #c4c4c4;
  font-size: 3em;
  text-align: center;
  margin-top: -1em;
  margin-left: -0.5em;
`;

export const DivFotoT = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  color: #373737;

  p {
    margin-left: 150px;
    font-size: 30px;
    padding-right: 20px;
  }

  img{
    width: 400px;
    border-radius: 100%;
    height: 400px;
    padding-left: 20px;
  }
`;
export const Habilidades = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
export const LetrasDeitadas = styled.p`
  transform: rotate(-90deg);
  font-size: 1.5rem;
  color: #2b0e64;
  width: fit-content;
`;

export const HabiCont = styled.div`
  display: inline-block;
  justify-content: space-around;
  color: #373737;
  font-size: 1rem;
  margin-right: 15px;
`;

export const HabilidadePai = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #990285;
`;

export const HabiNeto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
`;

export const Port = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #990285;
  margin-top: 10px;
`;

export const ConTs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #990285;
  margin-top: 10px;
`;

export const Card = styled.div`

`

export const Projetos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

`

export const ProjetosBox =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 5px solid black;
  padding: 15px;
  min-height: 350px;

  img{
    width: 300px;
  }

`