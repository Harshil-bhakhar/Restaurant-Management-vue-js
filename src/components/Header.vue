<template>
   <header class="header">
  <div class="container">
    <div class="header__container">
      <a href="#" class="header__logo logo"><img class="logo" src="../assets/logo.png" alt="" /></a>      
      <nav class="header__nav nav">
        <ul class="header__list">
          <li class="header__item">             
            <router-link to="/" class="header__link">Home</router-link>
          </li>
          <li class="header__item">
             <router-link to="/Add" class="header__link">Add Restaurants</router-link>             
            <!-- <ul class="header__dropdown">
              <li class="header__dropdown-item">
                <a href="#" class="header__dropdown-link">Hello</a>
              </li>
              <li class="header__dropdown-item">
                <a href="#" class="header__dropdown-link">Welcome</a>
              </li>
              <li class="header__dropdown-item">
                <a href="#" class="header__dropdown-link">Features</a>
              </li>
              
            </ul> -->
          </li>
          <li class="header__item">
            <router-link to="/Update" class="header__link">Update Restaurants</router-link>                           
          </li>           
          <li class="header__dropdown-item">
                <a v-on:click="logout" href="#" class="header__dropdown-link">Logout</a>
              </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
</template>

<script>
export default {
name:'Header',
methods:{
  logout(){
    localStorage.clear();
    this.$router.push({name:'Login'})
  }
}
}
</script>

<style>
 
</style>