import { httpService } from "./http.service";

const endpoint = "todos";
export const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(endpoint, {
      params: {
        _page: 1,
        _limit: 5,
      },
    });
    return data;
  },
  create: async () => {
    const { data } = await httpService.post(endpoint, {
      title: "New Task",
      completed: false,
    });
    return data;
  },
};
