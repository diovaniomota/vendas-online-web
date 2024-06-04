import styled from "styled-components";


export const EntradaImage = styled.img `
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
`;

export const LoginImage = styled.img `

`;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D9D9D9;
    width: 100%;
    height: 100vh;
    max-width: 646px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
`;

export const LimitedContainer = styled.div `
    width: 100%;
    max-width: 498px;
    display: flex;
    justify-content: center;
`;