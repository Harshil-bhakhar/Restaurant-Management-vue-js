<template>
<Header/>
  <div>
      <h1>Add Restaurants </h1>
        <div class="main">
    <div class="wrapper">
      <div class="content">
        <div class="buttons">           
        </div>         
        <label for="uname"><b>Name</b></label>
        <input type="text" v-model="restaurants.name" name="Enter Name" placeholder="Enter Name" id="" required/>
        <label for="uname"><b>Enter Address</b></label>
        <input type="text" v-model="restaurants.address" name="Enter Address" placeholder="Enter Address" id="" required/>
        <label for="uname"><b>Contect</b></label>
        <input  type="text"  v-model="restaurants.contect"  name="Enter Contect"  placeholder="Enter Contect"  id="" required/>
        <button type="button" v-on:click="addrestaurants">Add</button><br>           
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
name:'Add',
components:{
Header
},
data(){
  return{
    restaurants:{
      name:'',
      address:'',
      contect:''
    }
  }
},
methods:{
addrestaurants(){
  console.warn(this.restaurants)
}
},
//page Redirect
mounted(){ 
    let user = localStorage.getItem('user-info');
    if(!user)
    {
      this.$router.push({name:'SignUp'})
    }
  }
}
</script>

<style>
span
{
  color: rgb(212, 207, 216);  
}
</style>