import styled from "styled-components";
import banner from "../images/banner.png";

export const DivPai = styled.div`
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivFilho = styled.div`
  width: 80em;
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
  font-size: 5em;
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
  justify-content: space-around;
`;
