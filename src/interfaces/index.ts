export interface IUser {
    login: string;
    avatar_url: string;
    url: string;
    id: string;
    repos_url: string;
    organizations_url: string;
    type: string;
    bio: string;
    name: string;
    location: string;
}
  
export interface IUserParams{
    login: string;
}