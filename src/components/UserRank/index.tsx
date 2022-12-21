import { Container, NameText, Progress, UserPicture} from './style';

interface IUserRankProps {
  name: string,
  image: string,
  percentual: number
}

export function UserRank({name,image, percentual}: IUserRankProps) {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
};
