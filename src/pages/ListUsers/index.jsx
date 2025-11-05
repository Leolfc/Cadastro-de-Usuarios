import api from "../../services/api";
import { Button } from "../../components/Button/styles";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AvatarUser,
  CardUsers,
  Container,
  ContainerUsuarios,
  TrashIcon,
} from "./style";
import PrimaryTitle from "../../components/Title/index.jsx";
import Trash from "../../assets/trash.svg";
export function ListUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userDelete, setUserDelete] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }

    getUsers();
  }, []);

  useEffect(() => {
    async function usersDelete() {}
  }, []);

  return (
    <Container>
      <TopBackground />

      <PrimaryTitle
        children={"Listagem de usuários"}
        style={{ color: "black" }}
      />
      <Container>
        {users.map((user) => (
          <ContainerUsuarios key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public/?username=${user.id}`}
            />
            <CardUsers
              style={{
                display: "flex",
                flexFlow: "row wrap",
                gap: "10px",
                justifyContent: "space-around",
              }}
            >
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.age}</p>
              <TrashIcon src={Trash} />
            </CardUsers>
          </ContainerUsuarios>
        ))}
      </Container>
      <Button type="button" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
