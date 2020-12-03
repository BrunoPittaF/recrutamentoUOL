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
    starred: Array<{
        owner: Array<{
            repos_url: string;
        }>;
    }>;
}
  
export interface IUserParams{
    login: string;
    owner: string;
    repos_url: string;
    name: string;
}

export interface IUserRepos{
    id: string;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
}