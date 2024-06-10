import { ContainerLogin, EntradaImage, LimitedContainer ,LogoImage, ContainerLoginScreen, TitleLogin } from "../styles/loginScreen.styles"
import Input from "../../../shared/components/inputs/input/input";
import Button from "../../../shared/buttons/button/Button";
import { useState } from "react";


const LoginScreen =  () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        alert({
            username,
            password,
        });
    };
    
    return (
        <ContainerLoginScreen>
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                        <TitleLogin level={2} type="secondary">Login</TitleLogin>
                        <Input title="Uusuário" margin="32px 0px 0px " onChange={handleUsername} value={username}/>
                        <Input
                        type="password"
                         title="Senha"
                          margin="32px 0px 0px" 
                          onChange={handlePassword} value={password}/>
                        <Button type="primary" margin="20px 8px 16px 8px" onClick={handleLogin}>Entrar</Button>
                </LimitedContainer>
            </ContainerLogin>
            <EntradaImage src="./entrada.png"/>
        </ContainerLoginScreen>
    )
}

export default LoginScreen;