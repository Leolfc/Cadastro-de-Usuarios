import { useRef } from "react";
import api from "../../services/api.js";

import "./styles.js";
import {
  Button,
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title,
  TopBackground,
} from "./styles";
import UsersImage from "../../assets/users.png";

function Home() {
  const inputName = useRef(); //usando o useRef para pegar o valor do input
  const inputIdade = useRef();
  const inputEmail = useRef();
  async function registerNewUser() {
    const data = await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputIdade.current.value),
      name: inputName.current.value,
    });
    console.log(data);
  }

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
              <span> *</span>
            </InputLabel>

            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
            <InputLabel>
              Idade
              <span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do usuário"
              ref={inputIdade}
            />
          </div>
        </ContainerInputs>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <InputLabel>
            E-mail
            <span>*</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          />
        </div>
        <Button type="button" onClick={registerNewUser}>
          Cadastrar Usuário
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
