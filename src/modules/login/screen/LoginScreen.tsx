import { ContainerLogin, EntradaImage, LimitedContainer ,LoginImage } from "../styles/loginScreen.styles"
const LoginScreen = () => {
    return (<div>
        <EntradaImage src="./entrada.png"/>
        <ContainerLogin>
        <LimitedContainer>
            <LoginImage src="./logo.png"/>
            
        </LimitedContainer>
        </ContainerLogin>
        </div>)
}

export default LoginScreen



//feito por Diovanio 