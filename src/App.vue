<template>
  <div id="app">
    <div class="navbar navbar-dark bg-primary">
      <a class="navbar-brand text-white" href="#">Biology Teaching Materials</a>
      <ul class="nav">
        <b-nav-item>
          <router-link class="text-white pr-4" to="/">Home</router-link>
          <router-link class="text-white pr-4" to="/about">About</router-link>
          <router-link class="text-white" to="/Member-Area">Member</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="text-white pr-4" to="/login">Login</router-link>
          <router-link class="text-white" to="/signup">Sign Up</router-link>
        </b-nav-item>
      </ul>
    </div>
    <div class="container pr-4">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
