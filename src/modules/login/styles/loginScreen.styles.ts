import styled from "styled-components";
import { Typography } from "antd";


const { Title } = Typography;


export const ContainerLoginScreen = styled.div `
    width: 100%;
    display: flex;
    justify-content: right;
`;

export const EntradaImage = styled.img `
    position: absolute;
    left: 0;
    top: auto;
    width: 100;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
`;

export const LogoImage = styled.img `
    width: 200px;

`;

export const TitleLogin = styled(Title) `
    color: #251e38

`;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D9D9D9;
    width: 100%;
    padding: 22px;
    height: 100vh;
    max-width: 646px;
   
`;

export const LimitedContainer = styled.div `
    width: 100%;
    max-width: 498px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;