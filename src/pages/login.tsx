import { Header } from '../components/Header';

import {
  Title,
  Column,
  Row,
  CreateText,
  ForgotText,
  SubtitleLogin,
  TitleLogin,
  Wrapper
} from "../style/login.style";
import { Container } from '../style/global';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import {MdEmail, MdLock} from "react-icons/md"
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Header />
      <Container >
        <Column>
          <Title>
            A plataforma para você aprender com experts,
            dominar as principais tecnologias e entrar mais
            rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
            <form>
              <Input leftIcon={<MdEmail />} name='' placeholder='E-mail'/>
              <Input leftIcon={<MdLock />} name='' placeholder='Senha' type="password"/>
              <Link href="/feed"><Button title='Entrar' variant='secondary'/></Link>
            </form>
            <Row>
              <ForgotText>Esqueci minha senha</ForgotText>
              <CreateText>Criar conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
};
