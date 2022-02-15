<template>
<Header/>
  <div>
      <h1>Welcomes <span > { હોમ }</span> PAGE {{name}} </h1>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
name:'Home',
data(){//name return'
  return {
    name:''
  }
},
components:{
Header
},
//page Redirect
mounted(){ 
    let user = localStorage.getItem('user-info');
    this.name= JSON.parse(user).name//name return
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