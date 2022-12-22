import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserRank } from '../../components/UserRank';
import { Column, Container, Title, TitleHighlight } from '../../style/feed.style';

export default function Home() {
  return (
    <>
      <Header authenticated={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserRank image='https://avatars.githubusercontent.com/u/61201131?s=400&u=f1d2c757917dd5abaaaeec6aa4a0236aefbe914e&v=4' name='Kevin C' percentual={100} />
          <UserRank image='https://avatars.githubusercontent.com/u/61201131?s=400&u=f1d2c757917dd5abaaaeec6aa4a0236aefbe914e&v=4' name='Kevin C' percentual={50} />
          <UserRank image='https://avatars.githubusercontent.com/u/61201131?s=400&u=f1d2c757917dd5abaaaeec6aa4a0236aefbe914e&v=4' name='Kevin C' percentual={45} />
          <UserRank image='https://avatars.githubusercontent.com/u/61201131?s=400&u=f1d2c757917dd5abaaaeec6aa4a0236aefbe914e&v=4' name='Kevin C' percentual={30} />
          <UserRank image='https://avatars.githubusercontent.com/u/61201131?s=400&u=f1d2c757917dd5abaaaeec6aa4a0236aefbe914e&v=4' name='Kevin C' percentual={25} />
        </Column>
      </Container>
    </>
  )
};
