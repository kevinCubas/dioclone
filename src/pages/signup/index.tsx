import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { useForm } from "react-hook-form";

import { Column, TitleSignUp, SubtitleSignUp, LoginText, Row, Wrapper, Privacy, LinkText } from '../../style/signup.style';
import { Container } from '../../style/global';
import { Title } from '../../style/login.style';
import { useRouter } from 'next/router';

interface IFormData {
  name: string,
  email: string,
  password: string
}

export default function SignUp(): JSX.Element {
  const router = useRouter()

  const registerUser = async ({ email, name, password }: IFormData) => {
    const req = await fetch('http://localhost:3000/api/users/', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const res = await req.json()
    alert(res.message)
    router.push('/feed')
  };

  const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const onSubmit = async (formData: IFormData) => {
    const response = await fetch('http://localhost:3000/api/users/')
    const user = await response.json()
    const { data } = user
    const userExist = data.find(data => data.email === formData.email)
    if (userExist !== undefined) {
      alert("Usuário já existe! Faça seu Login.")
      return
    } else {
      registerUser(formData);
    }

  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleSignUp>Comece agora grátis</TitleSignUp>
            <SubtitleSignUp>Crie sua conta e make the change._</SubtitleSignUp>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="name" control={control} />
              {errors.name && <span>Nome é obrigatório</span>}
              <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="password" control={control} />
              {errors.password && <span>Senha é obrigatório</span>}
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
            <Row>
              <Privacy>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Privacy>
            </Row>
            <Row>
              <LoginText>Já tenho conta. <LinkText href="/login">Fazer login</LinkText></LoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}