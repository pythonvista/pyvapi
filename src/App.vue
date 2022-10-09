<template>
  <v-app>
       <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>



export default {
  name: 'App',

  data: () => ({
    name: "Victor",
    isloading: false,
    num1: 5,
    num2: 10,
    total: 0
   
    //
  }),
  methods:{
   changeName(){
    this.isloading = true
    setTimeout(()=>{
      this.name = 'david';
      this.isloading = false
    },2000)
   
   }
  },
  computed:{


  },
  created(){ 
    this.changeName()
  }

};
</script>
