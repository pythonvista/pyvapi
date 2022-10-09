<template>
  <div class="nav d-flex px-2">
    <div class="logo pa-2" >
      <router-link :to="{name: 'Home'}">
        <img src="img/logo-main.png" alt="">
      </router-link>
      
    </div>
    <div class="nav-links d-flex justify-center align-center">
      <v-btn :to="{name: 'Api'}" class="white--text" depressed color="grey" small>Api</v-btn>
      <v-btn :to="{name: 'Docs'}" class="white--text" depressed color="grey" small>Docs</v-btn>
      <v-btn :to="{name: 'About'}" class="white--text" depressed color="grey" small>About</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
.nav {
  height: 11vh !important;
  overflow: hidden;
  /* border-bottom: 1px solid black; */
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 3px 0px rgba(110,109,109,0.75);
-webkit-box-shadow: 0px 1px 3px 0px rgba(110,109,109,0.75);
-moz-box-shadow: 0px 1px 3px 0px rgba(110,109,109,0.75);

}

.logo {
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
}

.logo img {
  width: 6rem;
}

.nav-links{
  gap: 0.6rem;
}
</style>