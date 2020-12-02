import React, { useEffect, useState } from 'react';
import { Container } from '../../Assets/styles/global';
import Header from '../../components/Header';
import { ButtonsContainer, UserContainer } from './styles';
import { IUser, IUserParams } from '../../interfaces';
import api from '../../services/api';
import { useParams } from 'react-router-dom';


const User: React.FC = () => {
  const params = useParams<IUserParams>();
  const [profile, setProfile] = useState<IUser>();

  useEffect(() => {
    api.get(`/users/${params.login}`).then((response) =>{
      setProfile(response.data);
    });
  }, [params.login]);

  if(!profile){
    return <p>loading...</p>
  }

  return (
    <>
     <Header />
    <Container>       
      <ButtonsContainer>
        <button>Listar Repositórios</button>
        <button>Listar Respositórios mais visitados</button>
      </ButtonsContainer>
      
      <UserContainer>
          <picture>
            <img src={profile.avatar_url} alt={profile.name}/>
          </picture>
          <figcaption>
            <p>{profile.name} </p>
            <p>{profile.location}</p>
            <p>{profile.bio}</p>
          </figcaption>
      </UserContainer>


      </Container>
      </>
    );
}

export default User;