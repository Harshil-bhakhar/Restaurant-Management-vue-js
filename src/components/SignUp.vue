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
        <h1>Sign Up</h1>
        <label for="uname"><b>Name</b></label>
        <input type="text" v-model="name" name="Enter Name" placeholder="Enter Name" id="" required/>
        <label for="uname"><b>Enter Mail</b></label>
        <input type="email" v-model="email" name="Enter Email" placeholder="Enter Email" id="" required/>
        <label for="uname"><b>Password</b></label>
        <input  type="password"  v-model="password"  name="Enter password"  placeholder="Enter password"  id="" required/>
        <button v-on:click="signup">Sign-up</button><br>
        <router-link to="/Login">Log-in</router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {  
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      console.warn("signup", this.email, this.password);
      let result = await axios.post("http://localhost:3000/user", {
        name:this.name,
        email: this.email,
        password: this.password,  
      });
      console.warn(result);
      if (result.status == 201) 
      {
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name:'Home'})
      }
    },
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
