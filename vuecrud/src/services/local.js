import nuxtStorage from "nuxt-storage";
export default {
    setUserAccess(data) {
      console.log("setUserAccess",data)
        nuxtStorage.localStorage.setData("userAccessToken", data, 365, "d");
    },
    getUserAccess() {
        return nuxtStorage.localStorage.getData("userAccessToken");
    },
      removeUserAccess() {
        nuxtStorage.localStorage.clear("userAccessToken");
      }
  };
  