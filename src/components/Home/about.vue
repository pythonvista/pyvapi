<template>
    <div class="about-wrap">
        <p class="py-2 white--text text-h4 text-center" >About Pyvapi</p>
        <p class=" pa-3 caption white--text  text-center">
            After hours of watching films and trawling through content online, we present to you all the People, Films, Memes
            Species, Starships, Vehicles and Planets from Star Wars., which will offer 3D designs and for educational purposes <br>
            We've formatted this data in JSON and exposed it to you in a RESTish implementation that allows you to programmatically collect and measure the data. <br>
            Pyvapi was invented by Emeter Victor Tobiloba on the 7th of October 2022,
            Python V, who is a graduate of the University of Ekiti State, And have a Bsc in Computer
            Enginnering and an external internship of Certified Ethical Hacker...
        </p>
        <div class="d-flex justify-center align-center " style="gap:5px">
            <v-icon color="red">mdi-facebook</v-icon>
            <v-icon color="red">mdi-instagram</v-icon>
            <v-icon color="red">mdi-twitter</v-icon>
        </div>
    </div>
</template>

<script>
export default {
    name: "about"
}
</script>

<style scoped>
.about-wrap {
    display: flex;
    height: 89vh;
    justify-content: center;
    align-items: center;
    background: #272b30;
    flex-direction: column;
}




@media (max-width: 860px) {
    .about-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }



}
</style>