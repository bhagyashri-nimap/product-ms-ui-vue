import http from "../http-common";

import global from "../services/local";
class DataService {
    create(data) {
        console.log("data",data)
        return http.post("/signup", data);
    }
    login(data) {
        console.log("data",data)
        return http.post("/login", data);
    }
    getAllProduct(){
      return http.get("/getAll", {
        headers: {
          accessToken: global.getUserAccess()
        }
      });
    }
    purchase(data){
      return http.post("http://localhost:3002/purchaseProduct",data, {
        headers: {
          accessToken: global.getUserAccess()
        }
      });
    }
}

export default new DataService();