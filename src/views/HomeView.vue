<template>
  <div>
    <navbar />
    <div class="homeviews">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default;
import navbar from '@/components/navs/navbar.vue'
export default {
  name: 'Home',
  components: {
    navbar,
  },
  data: () => ({
    starwars: []
  }),
  methods: {
    async getAllStarWars() {
      console.log('trying')
      try {
        const res = await axios.get('https://pyvapi.netlify.app/api/ships')
        console.log(res.data)
        res.data.forEach((data) => {
          this.starwars.push({ ...data, tag: 'vic' })
        })

      } catch (err) {
        console.log(err)
      }

    }
  },
  created() {
    this.getAllStarWars()
  }



}
</script>

<style scoped>
</style>
