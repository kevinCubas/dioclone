import Image from 'next/image';
import { Header } from '../components/Header';
import {
  TextContent,
  TitleHighlight,
  Title
} from "../style/home.style";
import banner from "../assets/banner.png";
import { Button } from '../components/Button';
import { Container } from '../style/global';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu Futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts;
          </TextContent>
          <Link href="/login"><Button title='Começar agora' variant='secondary'/></Link>
        </div>
        <div>
          <Image src={banner} alt="" />
        </div>
      </Container>
    </>
  )
};
