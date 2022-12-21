import Image from 'next/image';
import { Button } from '../Button';
import logo from "../../assets/logo-dio.png";

import {
  SearchInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper
} from './style';
import { UserPicture } from '../Card/style';
import Link from 'next/link';

interface IHeaderProp {
  authenticated?: boolean
}

export function Header({authenticated }: IHeaderProp) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Image src={logo} alt='Logo DIO'/>
          {authenticated &&
          <>
            <SearchInputContainer>
              <Input placeholder='Buscar...'/>
            </SearchInputContainer>
            <Menu href="/">Live Code</Menu>
            <Menu href="/">Global</Menu>
          </>
          }  
        </Row>
        <Row>
          {authenticated ? (
            <UserPicture 
              src="https://avatars.githubusercontent.com/u/61201131?s=400&u=f1d2c757917dd5abaaaeec6aa4a0236aefbe914e&v=4" 
              alt=""
              width={32}
              height={32}
            />
          ) : (
            <>
              <MenuRight href='/'>Home</MenuRight>
              <Link href="/feed"><Button title='Entrar'/></Link>
              <Link href="/login"><Button title='Cadastrar'/></Link>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}