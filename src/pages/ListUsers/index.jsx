import api from "../../services/api";
import { Button } from "../../components/Button/styles";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "./style";

export function ListUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <Container>
      <TopBackground />
      <h1>Listagem de Usuários</h1>
      {users.map((user) => {
        <div>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.email}</p>
        </div>;
      })}

      <Button type="button" onClick={() => navigate("/Home")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
