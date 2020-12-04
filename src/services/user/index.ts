import api from "../api";

export const UserService = {
  async search(user: string, page: number): Promise<any> {
    try {
      const response = await api.get("/search/users", {
        params: {
          q: user,
          page: page,
          per_page: 10,
        },
      });
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async getUser(login: string): Promise<any> {
    try {
      const response = await api.get(`/users/${login}`);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async listRepository(login: string): Promise<any>{
    try{
      const response = await api.get(`/users/${login}/repos`);
      return response;
    }catch(error){
      return Promise.reject(error);
    }
  },

  async starredRepository(login: string): Promise<any>{
    try{
      const response = await api.get(`/users/${login}/starred`);
      return response;
    }catch(error){
      return Promise.reject(error);
    }
  }
};
