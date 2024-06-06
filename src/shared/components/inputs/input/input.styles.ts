import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const BoxInput = styled.div `  //aqui no mexe no campo onde preenche email e senha
        width: 100%;

`;


export const TitleInput = styled(Text) ` // aqui mexe no texto que fica em cima do campo de senha e email 
    margin: 8px;
`;