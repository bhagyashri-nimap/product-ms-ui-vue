import http from "../http-common";
import nuxtStorage from "nuxt-storage";
class DataService {
    create(data) {
        console.log("data",data)
        return http.post("/signup", data);
    }
    login(data) {
        console.log("data",data)
        return http.post("/login", data);
    }
    setUserAccess(data) {
        nuxtStorage.localStorage.setData("userAccessToken", data, 365, "d");
      }
    getUserAccess() {
        return nuxtStorage.localStorage.getData("userAccessToken");
      }
      removeUserAccess() {
        nuxtStorage.localStorage.clear("userAccessToken");
      }
 
}

export default new DataService();