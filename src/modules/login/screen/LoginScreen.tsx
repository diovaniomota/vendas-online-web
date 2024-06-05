import { ContainerLogin, EntradaImage, LimitedContainer ,LogoImage, ContainerLoginScreen } from "../styles/loginScreen.styles"
import Input from "../../../shared/components/inputs/input/input";

const LoginScreen =  () => {
    return (
        <ContainerLoginScreen>
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                        <Input title="Uusuário"/>
                        <Input title="Senha"/>
                </LimitedContainer>
            </ContainerLogin>
            <EntradaImage src="./entrada.png"/>
        </ContainerLoginScreen>
    )
}

export default LoginScreen;