import React, { FormEvent, useState } from "react";
import Box from "../../components/Box";
import api from "../../services/api";
import { SearchBar, PagesButton} from "./styles";
import { Link} from "react-router-dom";
import { Container } from '../../Assets/styles/global';
import Header from "../../components/Header";
import { IUser } from '../../interfaces';


const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [pages, setPages] = useState(0);

  function handlePageChanging(id: number) {
    setPages(id);
  }

  async function handleFormSubmit(event: FormEvent): Promise<void> {
    try {
      event.preventDefault();
      setPages(0);

      const response = await api.get("/search/users", {
        params: {
          token: 'a09241048a6a34fdd23ffc7f98608ffbcf80ff45',
          q: search,
          page: 1,
        },
      });

      if (!response.data) {
        console.log("nada");
      }     
      setUsers(response.data.items);
      setSearch("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
     <Header/>

      <Container>
        <SearchBar onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Digite e aperte 'enter' para buscar o usuário"
          />
        </SearchBar>

        {users.slice(pages * 5, pages * 5 + 5).map(user => (
          <Box key={user.id}>
            <picture>
              <img src={user.avatar_url} alt="" />
            </picture>

            <figcaption className="user-info">
              <h1>{user.login}</h1>
              <div className="data-info">
                <p>
                  Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a>
                </p>
                <p>
                  Repository: <a href={user.repos_url} target="_blank" rel="noopener noreferrer">{user.repos_url}</a>
                </p>
                <p>
                  Orgs: <a href={user.organizations_url} target="_blank" rel="noopener noreferrer">{user.organizations_url}</a>
                </p>
                <p>
                  Type: <span>{user.type}</span>
                </p>
                <Link className="interna" to={`/${user.login}`} >Página do usuário </Link>
              </div>
            </figcaption>
          </Box>
        ))}
        <PagesButton> 
        {
        users.filter((_, idx) => idx % 5 === 0)
        .map((_, idx) => (
          
          <button key={idx} type="button" onClick={() => handlePageChanging(idx)}>
            {idx + 1}
          </button>
        ))
        }
        </PagesButton>
      </Container>
    </>
  );
};

export default Home;
