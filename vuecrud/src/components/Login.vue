<template>
   <div class="submit-form">
    <div v-if="!submitted">
       <h1>User Login</h1>
   

    
       <div class="form-group">
        <label for="description">Email</label>
        <input
          type="text"
          class="form-control"
          id="Email"
          required
          v-model="user.email"
          name="Email"
        />
      </div>
      

 <div class="form-group">
        <label for="description">Password</label>
        <input
          type="password"
          class="form-control"
          id="Password"
          required
          v-model="user.password"
          name="Password"
        />
      </div>
<router-link
                      :to="{ name: 'productList' }"
                      append
                    >
                      <button @click="userLogin" class="loginbut">Login</button>
                    </router-link>
   
    </div>

  
  </div>
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
           
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style>
.loginbut {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>