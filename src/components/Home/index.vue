<template>
  <div>
    <div class="hero_wrap">
      <div class="landing_logo">
        <img src="img/logo.png" alt="">
      </div>
      <div class="landing_text">
        <h1>The Star Wars API is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!</h1>
        <p>We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all!</p>
      </div>
      <v-btn :to="{name: 'Api'}" color="black" class="white--text">GET STARTED</v-btn>
    </div>
  </div>
</template>

<script>
export default {
    name: "index"

}
</script>

<style scoped>
.hero_wrap{
  height: 89vh;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.landing_logo{
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.landing_logo img{
  width: 30%;
}

.landing_text{
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

</style>