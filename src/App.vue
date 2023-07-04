<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li :class="{ 'active': $route.path === '/Cuaca' }"><router-link to="/" class="nav-link">Cuaca</router-link></li>
          <li :class="{ 'active': $route.path === '/Photo' }"><router-link to="/Photo" class="nav-link">Photo</router-link></li>
          <li :class="{ 'active': $route.path === '/Lokasi' }"><router-link to="/Lokasi" class="nav-link">Lokasi</router-link></li>
          <li :class="{ 'active': $route.path === '/Game' }"><router-link to="/Game" class="nav-link">Game</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
}
body {
  background-color: #F7A4A4;
}
header {
  background: #FEBE8C;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  max-width: 80%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap; 
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
  font-family:Arial, Helvetica, sans-serif;
}

nav a:hover {
  background-color: #34495e; /* New background color on hover */
  text-decoration: none;
}

.active {
  background-color: #34495e; /* New background color for active item */
  border-radius: 4px;
  width: auto;
}

@media (max-width: 600px) {
  nav ul {
    flex-wrap: wrap;
    justify-content: center; /* Added */
  }

  nav li {
    width: auto; /* Modified */
    margin: 0 5px; /* Added */
  }
}
</style>
