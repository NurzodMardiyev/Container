import axios from "axios";

export const containerApi = {
  container: async () => {
    try {
      const { data } = await axios.get(
        `http://container.lifesafety.uz/api/container/all/?format=json`,
        {}
      );

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
