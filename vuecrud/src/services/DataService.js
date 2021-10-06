import http from "../http-common";

class DataService {
    create(data) {
        console.log("data",data)
        return http.post("/signup", data);
    }
    login(data) {
        console.log("data",data)
        return http.post("/login", data);
    }
 
}

export default new DataService();