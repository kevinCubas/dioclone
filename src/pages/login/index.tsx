import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {useRouter} from "next/router"

import { Header } from '../../components/Header';

import {
  Title,
  Column,
  Row,
  CreateText,
  ForgotText,
  SubtitleLogin,
  TitleLogin,
  Wrapper
} from "../../style/login.style";
import { Container } from '../../style/global';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {MdEmail, MdLock} from "react-icons/md"

interface IFormInputs {
  email: string,
  password: number
}


const schema = yup.object({
  email: yup.string().email('email não é válido').required('Campo obrigatório!'),
  password: yup.string().min(3, "No minímo 3 caracteres").required('Campo obrigatório!'),
}).required();

export default function Login(): JSX.Element {
  const router = useRouter();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  console.log(isValid, errors)
  const onSubmit: SubmitHandler<IFormInputs>= async ({email, password}) => {
    const response = await fetch('http://localhost:3000/api/users/')
    const user = await response.json()
    const {data} = user
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if(element.email === email && element.password === password) {
        router.push('/feed') 
      }
     }
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" control={control} leftIcon={<MdEmail />} placeholder='E-mail'/>
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input name="password" control={control} leftIcon={<MdLock />} placeholder='Senha' type="password"/>
              {errors.password && <span>Senha é obrigatório</span>}
              <Button type="submit" title='Entrar' variant='secondary' />
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