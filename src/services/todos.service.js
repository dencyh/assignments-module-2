import { httpService } from "./http.service";

const endpoint = "todos";
export const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(endpoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
    return data;
  },
};
