<template>
  <Header />
  <div>
    <h1>Welcomes <span> { હોમ }</span> PAGE {{ name }}</h1>

<table border="1" class="basic-table table-headers table table-hover">
  <thead>
   <tr>
        <th>id</th>
        <th>name</th>
        <th>Address</th>
        <th>Contact</th>
      </tr>
    <tr style="border: none; box-shadow: none;"></tr>
  </thead>
  <tbody>
     <tr v-for ="item in restaurants" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.Address}}</td>
        <td>{{item.contect}}</td>
      </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Home",
  data() {
    //name return'
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    Header,
  },
  //page Redirect
  async mounted() {
    let user = localStorage.getItem("user-info");
    // this.name = JSON.parse(user).name; //name return
    if (!user) {
      this.$router.push({ name: "SignUp" })
    }
    let result = await axios.get("http://localhost:3000/restaurants");
     console.warn(result);
     this.restaurants=result.data
  },
};
</script>

<style>
span {
  color: rgb(212, 207, 216);
}

</style>
