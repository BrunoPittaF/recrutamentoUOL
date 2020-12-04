import React, { FormEvent, useEffect, useState } from "react";
import Box from "../../components/Box";
import { SearchBar, PagesButton } from "./styles";
import { Link } from "react-router-dom";
import { Container } from "../../Assets/styles/global";
import { IUser } from "../../interfaces";
import { UserService } from "../../services/user";

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState<number>(0);
  const [userName, setUsername] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const response = await UserService.search(userName, page);

        setUsers(response.data.items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page, userName]);

  async function handleFormSubmit(event: FormEvent): Promise<void> {
    try {
      event.preventDefault();

      setUsername(search);
      setPage(1);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <SearchBar onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Digite e aperte 'enter' para buscar o usuário do github"
        />
      </SearchBar>

      {users.map((user) => (
        <Box key={user.id}>
          <picture>
            <img src={user.avatar_url} alt="" />
          </picture>

          <figcaption className="user-info">
            <h1>{user.login}</h1>
            <div className="data-info">
              <p>
                Profile:{" "}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.html_url}
                </a>
              </p>
              <p>
                Repository:{" "}
                <a
                  href={user.repos_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.repos_url}
                </a>
              </p>
              <p>
                Orgs:{" "}
                <a
                  href={user.organizations_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.organizations_url}
                </a>
              </p>
              <p>
                Type: <span>{user.type}</span>
              </p>
              <Link className="interna" to={`/${user.login}`}>
                Página do usuário{" "}
              </Link>
            </div>
          </figcaption>
        </Box>
      ))}
      <PagesButton>
        {/*users
            .filter((_, idx) => idx % 5 === 0)
            .map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePageChanging(idx)}
              >
                {idx + 1}
              </button>
            ))*/}
        <button
          type="button"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Mais resultados
        </button>
      </PagesButton>
    </Container>
  );
};

export default Home;
