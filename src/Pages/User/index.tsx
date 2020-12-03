import React, { useEffect, useState } from "react";
import { Container } from "../../Assets/styles/global";
import Header from "../../components/Header";
import {
  ButtonsContainer,
  UserContainer,
  UserBox,
  RepoContainer,
} from "./styles";
import { IUser, IUserParams, IUserRepos } from "../../interfaces";
import api from "../../services/api";
import { useParams } from "react-router-dom";

const User: React.FC = () => {
  const params = useParams<IUserParams>();
  const [profile, setProfile] = useState<IUser>();
  const [repositorys, setRepositorys] = useState<IUserRepos[]>([]);

  useEffect(() => {
    api.get(`/users/${params.login}`).then((response) => {
      setProfile(response.data);
    });
  }, [params.login]);

  function listRepository() {
    api.get(`/users/${params.login}/repos`).then((response) => {
      setRepositorys(response.data);
    });
  }

  async function listMoreVisited() {
    try {
      const response = await api.get(`/users/${params.login}/starred/{owner}/{repo}`,{
        params: {
          token: 'a09241048a6a34fdd23ffc7f98608ffbcf80ff45',
          owner: params.owner,
          repo: params.repos_url,
        },
      });

      if(!response.data){
        console.log("nada");
      }
      console.log(response.data);      
      setRepositorys(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!profile) {
    return <p>loading...</p>;
  }

  if (!repositorys) {
    return <p>Não há repositórios disponiveis</p>;
  }

  return (
    <>
      <Header />
      <Container>
        <ButtonsContainer>
          <button
            onClick={() => {
              listRepository();
            }}
          >
            Listar Repositórios
          </button>
          <button
            onClick={() => {
              listMoreVisited();
            }}
          >
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
                Nome: <span>{profile.name} </span>{" "}
              </p>
              <p>
                Localização: <span>{profile.location} </span>
              </p>
              <p>
                Bio:<span>{profile.bio} </span>{" "}
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
    </>
  );
};

export default User;
