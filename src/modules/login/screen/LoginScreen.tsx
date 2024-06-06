import { ContainerLogin, EntradaImage, LimitedContainer ,LogoImage, ContainerLoginScreen, TitleLogin } from "../styles/loginScreen.styles"
import Input from "../../../shared/components/inputs/input/input";
import Button from "../../../shared/buttons/button/Button";


const LoginScreen =  () => {
    return (
        <ContainerLoginScreen>
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                        <TitleLogin level={2} type="secondary">Login</TitleLogin>
                        <Input title="Uusuário" margin="32px 0px 0px "/>
                        <Input title="Senha" margin="32px 0px 0px"/>
                        <Button type="primary" margin="20px 8px 16px 8px">Entrar</Button>
                </LimitedContainer>
            </ContainerLogin>
            <EntradaImage src="./entrada.png"/>
        </ContainerLoginScreen>
    )
}

export default LoginScreen;