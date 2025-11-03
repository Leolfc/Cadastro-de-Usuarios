import {Background} from "./styles.js"
import UsersImage from "../../assets/users.png";
function TopBackground() {
  return (
    <Background>
      <img src={UsersImage} alt="Imagens dos usuários" />
    </Background>
  );
}

export default TopBackground;
