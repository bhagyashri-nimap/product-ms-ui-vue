<template>
   <div class="submit-form">
    <div v-if="!submitted">
       <h1>User Register</h1>
      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="user.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="description">MobileNo</label>
        <input
          type="number"
          class="form-control"
          id="MobileNo"
          required
          v-model="user.mobile"
          name="MobileNo"
        />
      </div>
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


      <button @click="addUser" class="registerbtn">Submit</button>
    </div>
<div v-else>
      <h4>User Register Successfully!</h4>
      <button class="registerbtn" @click="addedNew">Add</button>
    </div>
  
  </div>
</template>

<script>
import TutorialDataService from "../services/DataService";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        mobile:"",
        password:""
      },
      submitted: false,
    };
  },
  methods: {
    addUser() {
      var data = {
        name: this.user.name,
        email: this.user.email,
        mobile:this.user.mobile,
        password:this.user.password
      };
      console.log("data",data)
      TutorialDataService.create(data)
        .then((response) => {
          console.log(response.data);
           this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    addedNew() {
      this.submitted = false;
      this.user = {};
    },
  },
};
</script>
<style>
.registerbtn {
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