<template>
<Header/>
  <div>
      <h1>Add Restaurants </h1>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
name:'Add',
components:{
Header
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