<template>
 <img class="logo" src="../assets/logo.png" alt="" />
  <div class="main">
    <div class="wrapper">
      <div class="content">
        <div class="buttons">
          <div class="close"></div>
          <div class="minimize"></div>
          <div class="zoom"></div>
        </div>
        <h1>Login</h1>
        <label for="uname"><b>Enter Mail</b></label>
        <input type="email" v-model="email" name="Enter Email" placeholder="Enter Email" id="" />
        <label for="uname"><b>Password</b></label>
        <input type="password" v-model="password" name="Enter password" placeholder="Enter password" id="" />
        <button v-on:click="login">Login</button>
         <p>
          <router-link to="/Sign-Up">Sign Up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email:'',
      password:''
    };
  },
  methods: {
   async  login(){
     let result = await axios.get(
     `http://localhost:3000/user?email=${this.email}&password=${this.password}`
     );
      if (result.status == 200 && result.data.length > 0 ) 
      {
        localStorage.setItem("user-info",JSON.stringify(result.data[0]))
        this.$router.push({name:'Home'})
      }   
     }
  },
  //page Redirect
  mounted(){
    let user = localStorage.getItem('user-info');
    if(user)
    {
      this.$router.push({name:'Home'}) 
    }
  }
};
</script>

<style>

</style>
