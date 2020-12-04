import React, { useEffect, useState } from "react";
import { Container } from "../../Assets/styles/global";
import {
  ButtonsContainer,
  UserContainer,
  UserBox,
  RepoContainer,
} from "./styles";
import { IUser, IUserParams, IUserRepos } from "../../interfaces";
import { useParams } from "react-router-dom";
import { UserService } from "../../services/user";

const User: React.FC = () => {
  const params = useParams<IUserParams>();
  const [profile, setProfile] = useState<IUser>();
  const [repositorys, setRepositorys] = useState<IUserRepos[]>([]);

  useEffect(() => {
    UserService.getUser(params.login).then((response) => {
      setProfile(response.data);
    });
  }, [params.login]);

  function listRepository() {
    UserService.listRepository(params.login).then((response) => {
      setRepositorys(response.data);
    });
  }

  function starredRepository() {
    UserService.starredRepository(params.login).then((response) => {
      setRepositorys(response.data);
    });
  }

  if (!profile) {
    return <p>loading...</p>;
  }

  if (!repositorys) {
    return <p>Não há repositórios disponiveis</p>;
  }

  return (
    <Container>
      <ButtonsContainer>
        <button onClick={listRepository}>Listar Repositórios</button>
        <button onClick={starredRepository}>
          Listar Respositórios mais visitados
        </button>
      </ButtonsContainer>

      <UserBox>
        <UserContainer>
          <picture>
            <img src={profile.avatar_url} alt={profile.name} />
          </picture>
          <figcaption>
            <p>
              Nome: <span>{profile.name} </span>
            </p>
            <p>
              Localização: <span>{profile.location} </span>
            </p>
            <p>
              Bio:<span>{profile.bio} </span>
            </p>
          </figcaption>
        </UserContainer>

        <RepoContainer>
          {repositorys.map((repository) => {
            return (
              <div className="repository" key={repository.id}>
                <p>Nome:</p>
                <span>{repository.full_name}</span>
                <p>Link:</p>
                <a
                  href={repository.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repository.html_url}
                </a>
                <p>Descrição:</p>
                <span>{repository.description}</span>
              </div>
            );
          })}
        </RepoContainer>
      </UserBox>
    </Container>
  );
};

export default User;
