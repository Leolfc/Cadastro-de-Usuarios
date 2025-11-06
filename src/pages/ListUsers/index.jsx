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
 
  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }

    getUsers();
  }, []);


  async function deleteUsers(id){
     await api.delete(`/usuarios/${id}`)
    const updateUsers = users.filter(user=>user.id !== id)
    setUsers(updateUsers)
  }



  return (
    <Container>
      <TopBackground />

      <PrimaryTitle
        children={"Listagem de usuários"}
        style={{ color: "black" }}
      />
      <Container>
        <ContainerUsuarios>
          {users.map((user) => (
            <CardUsers key={user.id}>
              <AvatarUser
                src={`https://avatar.iran.liara.run/public/?username=${user.id}`}
              />
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.age}</p>
              <TrashIcon src={Trash} alt="icone de lixeira" onClick={()=>deleteUsers(user.id)} />
            </CardUsers>
          ))}
        </ContainerUsuarios>
      </Container>
      <Button type="button" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
