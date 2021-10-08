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
    <tr  v-for="(allProducts) in allProduct" v-bind:key="allProducts.key" >
      <td >{{allProducts.productSku}}</td>
      <td >{{allProducts.value[0].productName}}</td>
      <td >{{allProducts.value[1].priceInr}}</td>
      <td >{{allProducts.value[1].priceUsd}}</td>
      <td><button class="register" @click="purchasefromIndia(allProducts)">India</button></td>
      <td><button class="register" @click="purchasefromUsa(allProducts)">Usa</button></td>
        <!-- </span> -->
    </tr>
  </tbody>
</table>
<button class="registerbtn" @click="logout">logout</button>
</template>
<script>
import TutorialDataService from "../services/DataService";
import global from "../services/local";
export default {
  data() {
    return {
      allProduct: [
      ]
    };
  },
  created() {
    TutorialDataService.getAllProduct(this.allProduct)
      .then((response) => {
          console.log("getAllProduct",response.data);
          this.allProduct=response.data
          console.log(this.allProduct,"this.allProduct")
        })
        .catch((e) => {
          console.log(e);
        });
  },
  methods: {
    purchasefromIndia(data1) {
      var data = {
        productSku: data1.productSku,
        country:"india"
      };
      console.log("data",data)
      TutorialDataService.purchase(data)
        .then((response) => {
          console.log("asasasasa",response.data);
          if(response.data=="Successfully")
           alert("Successfully Purchase!!");
           else if(response.data=="Out of Stock"){
alert("Out of Stock!!");
           }
           else if(response.data=="Out of Stock India"){
               alert("Out of Stock India!!");
           }
            
        })
        .catch((e) => {
          console.log(e);
        });
    },
 purchasefromUsa(data2) {
      var data = {
        productSku: data2.productSku,
        country:"usa"
      };
      console.log("data",data)
      TutorialDataService.purchase(data)
        .then((response) => {
          if(response.data=="Successfully")
           alert("Successfully Purchase!!");
           else if(response.data=="Out of Stock"){
           alert("Out of Stock!!");
           }
           else if(response.data=="Out of Stock Usa"){
               alert("Out of Stock India!!");
           }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    logout() {
     global.removeUserAccess();
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