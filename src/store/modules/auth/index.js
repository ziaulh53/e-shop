import { defineStore } from "pinia";
import { api, auth } from "../../../api";
import { useLocalStorage } from "@vueuse/core";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    auth: useLocalStorage("auth", {
      isAuthenticated: false,
      user: {},
      token: "",
    }),
  }),
  // getters: {
  //   user: (state) => state.auth,
  // },
  actions: {
    
    async userRegistration(data) {
      try {
        const res = await api.post(auth.reg, data);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async userLogin(data) {
      try {
        const res = await api.post(auth.login, data);
        if (res.data.success) {
          this.auth = {
            ...this.auth,
            isAuthenticated: !this.auth.isAuthenticated,
            user: res.data?.user,
            token: res?.data?.token,
          };
        }
        window.location.reload()
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async userLogout() {
      try {
          this.auth = {
            isAuthenticated: false,
            user: {},
            token: "",
          };
          window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
