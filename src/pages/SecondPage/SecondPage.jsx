import { Container, Block, Title, StyledLink } from './SecondPage.styled';

const SecondPage = () => {
  return (
    <Container>
      <Block>
        <Title>Second Page</Title>
        <StyledLink to="/second/half">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default SecondPage;
