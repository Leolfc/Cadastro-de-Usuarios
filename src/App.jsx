import "./App.css";
import {
  Button,
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title,
  TopBackground,
} from "./pages/Home/styles";
import UsersImage from "../src/assets/users.png"
function Home() {
  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="Imagens dos usuários" />
      </TopBackground>
      <Form>
        <Title>Cadastrar Usuários</Title>
        <ContainerInputs>
          <div>
            <InputLabel>
              Nome
              <span>*</span>
            </InputLabel>

            <Input type="text" placeholder="Nome do usuário" />
            <InputLabel>
              Idade
              <span>*</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" />
          </div>
          <InputLabel>
              E-mail
              <span>*</span>
            </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" />
        </ContainerInputs>
        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}

export default Home;
