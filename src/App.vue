<template>
  <div id="app">
  <div class ="container-fluid">
    <app-header></app-header>
    <h4>Clothes Order App</h4>
    <div class ="row justify-content-center">
      <div class="col-md-10 col-lg-7">
    <router-view></router-view>
      </div>
    </div>

  </div>
  </div>
</template>

<script>

import header from "./components/header.vue";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World'
    }
  },
  components:{

    "app-header":header
    },
    created(){
      console.log("App created")
      this.$store.dispatch("getClothes")
    }

}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
