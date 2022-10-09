<template>
    <div>
        <div class="sketchfab-embed-wrapper"> <iframe frameborder="0"
                allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport
                execution-while-not-rendered web-share 
                :src="url">
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data: ()=>({
        url: "https://sketchfab.com/models/41457c00da15427ab697d83f82e0dc04/embed?autospin=1&autostart=1"
    })

}
</script>

<style scoped>

.sketchfab-embed-wrapper{
    height: 50vh;
    width: 100%;
    border: 1px solid red;
}

.sketchfab-embed-wrapper iframe{
    width: 100%;
    height: 100%;
}

</style>