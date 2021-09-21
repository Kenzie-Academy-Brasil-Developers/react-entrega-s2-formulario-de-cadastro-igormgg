import { Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import "./styles.css";

const Welcome = ({ userInfo }) => {
  let { id } = useParams();

  const history = useHistory();

  const backToHome = (url) => {
    history.push(url);
  };

  return (
    <div className="container2">
      <h1>Bem vindo, {userInfo.name}!</h1>
      <h2>Email: {id}</h2>
      <Button
        onClick={() => backToHome("/")}
        variant="contained"
        color="secondary"
      >
        Voltar para o login
      </Button>
    </div>
  );
};

export default Welcome;
