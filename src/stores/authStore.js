import { defineStore } from "pinia";

// import { fetchWrapper } from "@/helpers";
// import { RouterView, useRouter } from 'vue-router'
import router from "@/router";
import { useAlertStore } from "@/stores/alertStore.js";
import axios from "axios";
// const baseUrl =useRouter()`${import.meta.env.VITE_API_URL}/users`;
// const router = useRouter();
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
  }),
  actions: {
    async login(username, password) {
      try {
        // const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
        const headers = {
          "Content-Type": "application/json",
        };
        axios({
          method: "get",
          // url: 'http://185.80.1.231:70/api/v1/seasons/test',
          url: "https://matchproapi-b0bgbtaecxeggyg7.eastus-01.azurewebsites.net/api/v1/players",
          data: {},
          headers,
        });
        const user = { username, password };
        if (username == "admin" && password == "admin") {
          // update pinia state
          this.user = user;

          // store user details and jwt in local storage to keep user logged in between page refreshes
          localStorage.setItem("user", JSON.stringify(user));

          // redirect to previous url or default to home page
          router.push(this.returnUrl || "/");
        }
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error);
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/sign-in");
    },
  },
});
