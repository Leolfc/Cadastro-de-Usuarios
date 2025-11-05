import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";

import "./styles.js";
import {
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,

} from "./styles";
// import UsersImage from "../../assets/users.png";
import { Button } from "../../components/Button/styles.js";

import TopBackground from "../../components/TopBackground/index.jsx";
import PrimaryTitle from "../../components/Title/index.jsx";


function Home() {
  const inputName = useRef(); //usando o useRef para pegar o valor do input
  const inputIdade = useRef();
  const inputEmail = useRef();

const navigate = useNavigate()

  async function registerNewUser() {
    const data = await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputIdade.current.value),
      name: inputName.current.value,
    });
  

    console.log(data);
    navigate('/lista-de-usuarios')
   
  }

  return (
    <Container>
      <TopBackground />
      <Form>
        <PrimaryTitle>Cadastrar Usuários</PrimaryTitle>
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
          style={{width: "100%", display: "flex", justifyContent: "center"}}
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
        <Button type="button" onClick={registerNewUser} theme={"primary"} >
          Cadastrar Usuário
        </Button>
      </Form>
      <Button type="button" onClick={()=> navigate('/lista-de-usuarios')} >
          Ver Lista de Usuários
        </Button>
    </Container>
  );
}

export default Home;
