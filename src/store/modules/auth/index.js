import { defineStore } from "pinia";
import { api, auth } from "../../../api";
import { useLocalStorage } from "@vueuse/core";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    auth: useLocalStorage('auth',{
      isAuthenticated: false,
      user: {},
      token: "",
    }),
  }),
  getters: {
    user: (state) => state.auth,
  },
  actions: {
    async userLogin(data) {
      try {
        const res = await api.post(auth.login, data);
        this.auth = {
          ...this.auth,
          isAuthenticated: !this.auth.isAuthenticated,
          // user: res.data?.user,
          // token: res?.data?.token
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
});
