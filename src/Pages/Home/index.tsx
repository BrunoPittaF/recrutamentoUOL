import React, { useEffect, useState } from "react";
import Box from "../../components/Box";
import api from "../../services/api";
import { Header, SearchBar, Container } from "./styles";
import { Link } from "react-router-dom";

interface IUser {
  login: string;
  avatar_url: any;
  url: string;
  id: string;
  repos_url: string;
  organizations_url: string;
  type: string;
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
            <Box key={user.id}>
              <picture>
                <img src={user.avatar_url} alt="" />
              </picture>

              <figcaption className="user-info">
                <h1>{user.login}</h1>
                <div className="data-info">
                <p>Profile: <span>{user.url}</span></p>
                <p>Repository: <span>{user.repos_url}</span></p>
                <p>Orgs: <span>{user.organizations_url}</span></p>
                <p>Type: <span>{user.type}</span></p>  
                <Link to={`/${user.login}`}>Página do usuário </Link>             
                </div>                
              </figcaption>
            </Box>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
