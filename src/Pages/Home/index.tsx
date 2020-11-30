import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import api from "../../services/api";
import { Header, SearchBar } from "./styles";

interface IUser {
  login: string;
  avatar_url: any;
  url: string;
  id: string;
  repos_url: string;
}

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get("/users").then((response) => {
      //console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <Header>
        <h1>Bem vindo a Home!</h1>
      </Header>

      <Container>
        <SearchBar>
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Digite para buscar o usuário"
          />
        </SearchBar>

        {users.map((user) => {
          return (
            <div className="box" key={user.id}>
              <h1>{user.login}</h1>

              <p>{user.url}</p>

              <span>{user.repos_url}</span>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
