import { defineStore } from "pinia";
import { api, auth } from "../../../api";
import { useLocalStorage } from "@vueuse/core";
import { notify } from "../../../helpers";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    auth: useLocalStorage("auth", {
      isAuthenticated: false,
      user: {},
      token: "",
    }),
  }),
  getters: {
    user: (state) => state.auth,
  },
  actions: {
    async userRegistration(data) {
      try {
        const res = await api.post(auth.reg, data);
        notify(res.data)
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
            isAuthenticated: true,
            user: res.data?.user,
            token: res?.data?.token,
          };
        }
        notify(res.data)
        // window.location.reload()
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
    async forgetPassword(data) {
      try {
        const res = await api.post(auth.forgetPassword, data);
        notify(res.data)
      } catch (error) {
        console.log(error);
      }
    },
    async resetPassword(data) {
      try {
        const res = await api.post(auth.resetPassword, data);
        notify(res.data)
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
