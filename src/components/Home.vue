<template>
  <Header />
  <div>
    <h1>Welcome <span> { હોમ }</span> PAGE {{ name }}</h1>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Address</th>
            <th>Contact</th>
          </tr>
          <tr></tr>
        </thead>
        <tbody>
          <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.Address }}</td>
            <td>{{ item.contect }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/restaurants");
    console.warn(result);
    this.restaurants = result.data;
  },
};
</script>

<style>
span {
  color: rgb(212, 207, 216);
}
.container {
  max-width: 500px;
  margin: auto;
  margin-top: 3rem;
  overflow-x: auto;
}

table {
  font-family: "Open Sans", sans-serif;
  position: relative;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;
  width: 100%;
  border:1px solid transparent;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  white-space: nowrap;
}
table * {
  border: none;
}
table thead tr {
  color: #2d3748;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
}
table thead tr th {
  background: #edf2f7;
  padding: 0.75rem 1.5rem;
  vertical-align: middle;
}
table tbody tr:nth-child(odd) td {
  background: #ffffff;
}
table tbody tr:nth-child(even) td {
  background: #edf2f7;
}
table tbody td {
  color: #1a202c;
  text-align: left;
  padding: 1.5rem 1.5rem;
  vertical-align: middle;
  font-size: 1.125rem;
  font-weight: normal;
}
table tr:last-child td:first-child {
  border-bottom-left-radius: 0.5rem;
}
table th:first-child {
  border-top-left-radius: 0.5rem;
}
table tr:last-child td:last-child {
  border-bottom-right-radius: 0.5rem;
}
table th:last-child {
  border-top-right-radius: 0.5rem;
}
table tr > th:first-child, table tr > td:first-child {
  position: sticky;
  left: 0;
}
</style>
