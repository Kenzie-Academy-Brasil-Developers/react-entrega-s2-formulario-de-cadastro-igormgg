import { useParams } from "react-router";

const Welcome = ({ userInfo }) => {
  let { id } = useParams();

  return (
    <div>
      <h1>Bem vindo, {userInfo.name}!</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default Welcome;
