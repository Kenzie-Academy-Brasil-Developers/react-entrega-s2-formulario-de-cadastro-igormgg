import "./reset.css";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Welcome from "./components/Welcome";
import { Route, Switch } from "react-router";

function App() {
  const [userInfo, setUserInfo] = useState("");

  return (
    <div className="App">
      <header className="App-header">Formulário de Cadastro</header>
      <body>
        <Switch>
          <Route exact path="/">
            <Form setUserInfo={setUserInfo} />
          </Route>
          <Route path="/:id">
            <Welcome userInfo={userInfo} />
          </Route>
        </Switch>
      </body>
    </div>
  );
}

export default App;
