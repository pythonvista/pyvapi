<template>
  <div>
    <div class="hero_wrap">
      <div class="landing_logo">
        <img src="img/logo-main.png" alt="">
      </div>
      <div class="landing_text">
        <h1>The Pyv API is the world's first quantified and programmatically-accessible 3D data source for all the data
          from the popular starwars characters and memes </h1>
        <p class="caption px-2">We've taken all the rich contextual stuff from the universe and formatted into something
          easier to consume with software. Then we went and stuck an API on the front so you can access it all!</p>
      </div>
      <div class="d-flex justify-center align-center btn_n">
        <v-btn :to="{name: 'Api'}" color="black" class="white--text">GET STARTED</v-btn>
        <v-btn :to="{name: 'Api'}" color="black" class="white--text">EXPLORE API</v-btn>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "index"

}
</script>

<style scoped>
.hero_wrap {
  height: 89vh;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.landing_logo {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.landing_logo img {
  width: 30%;
}

.landing_text {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
  font-size: 0.8rem;
  flex-direction: column;
  gap: 0.5rem;
}

.btn_n{
  gap: 10px;
}

@media (max-width: 700px) {
  .landing_logo img {
    width: 60%;
  }

  .landing_logo {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.landing_text {
  width: 80%;
}
.landing_text h1{
  font-size: 1.3rem;
}
.landing_text p{
  font-size: 1rem !important;
  font-weight: 400 !important;
  color: rgb(0, 0, 0) !important;
}

.btn_n{
  gap: 10px;
}

}
</style>