<template><table id="firstTable">
  <thead>
    <tr>
      <th>ProductSku</th>
      <th>ProductName</th>
      <th>PriceIndia</th>
      <th>PriceUsa</th>
      <th>Purchase from India</th>
      <th>Purchase from Usa</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <td>vvv</td>
      <td>sasa</td>
      <td>sdsd</td>
      <td>dfdsfs</td>
      <td><button class="register">India</button></td>
      <td><button class="register">Usa</button></td>
    </tr>
  </tbody>
</table>
<button class="registerbtn" @click="logout">logout</button>
</template>
<script>
import TutorialDataService from "../services/DataService";
export default {
  data() {
    return {
      user: {
        email: "",
        password:""
      },
      submitted: false,
    };
  },
  methods: {
    userLogin() {
      console.log("data================")
      var data = {
        email: this.user.email,
        password:this.user.password
      };
      console.log("data",data)
      TutorialDataService.login(data)
        .then((response) => {
          console.log(response.data);
           TutorialDataService.setUserAccess(response.data.accessToken);
             this.$router.push({ name: "productList" });
        })
        .catch((e) => {
          console.log(e);
        });
    },

    logout() {
     TutorialDataService.removeUserAccess();
      this.$router.replace({ name: "login" });
    },
  },
};
</script>
<style>
.registerbtn {
  background-color: #04AA6D;
  color: white;
  padding: 14px 10px;
  margin: 3px 0;
  border: none;
  cursor: pointer;
  width: 10%;
  opacity: 0.9;
}
.register {
  background-color: #04AA6D;
  color: white;
  padding: 14px 10px;
  margin: 3px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}
</style>