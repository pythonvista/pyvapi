<template>
    <div class="wrap" style="background:url('img/bg.jpg');">
        <div class="sketchfab-embed-wrapper"> <iframe frameborder="0" allowfullscreen mozallowfullscreen="true"
                webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                execution-while-out-of-viewport execution-while-not-rendered web-share :src="selected.image+'?autospin=1&autostart=1'">
            </iframe>
        </div>
        <div class="sketchfab-content">
            <div class="content-wrap pa-2 white--text">
                <p class="typing-demo text-center ma-0 ">{{selected.title}}</p>
                <p class=" text-center white--text font-italic">{{selected.shortDescription}}</p>
                <p class="text-caption des white--text">{{selected.description}}</p>
            </div>
            <v-btn outlined class="mt-2 white--text" @click="shuffleSelected">Shuffle</v-btn>
        </div>
    </div>
</template>

<script>
const axios = require('axios').default;
export default {
    name: "index",
    data: () => ({
        url: "https://sketchfab.com/models/41457c00da15427ab697d83f82e0dc04/embed?autospin=1&autostart=1",
        starwarsShip: [],
        selected: {},
        counter:0

    }),
    created(){
        this.getAllStarWars();

    },
    methods: {
        async getAllStarWars() {
            try {
                const res = await axios.get('https://pyvapi.netlify.app/api/ships')
                console.log(res.data)
                this.starwarsShip = res.data
                this.selected = this.starwarsShip[0]

            } catch (err) {
                console.log(err)
            }
        },
        shuffleSelected(){
            if(this.counter == this.starwarsShip.length){
                this.counter = 0
                this.selected = this.starwarsShip[this.counter]
            }else{
                this.counter += 1
                this.selected = this.starwarsShip[this.counter]
            }
            
        }
    },
    computed:{
        fire(){
            return this.counter
        }     
    }

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap");

.wrap {
    display: flex;
    overflow: hidden;
    border: 2px solid black;
    height: 100vh;
    background-position: center, center;
    background-size: cover;
}

.sketchfab-embed-wrapper {
    height: 100%;
    width: 60%;
    background: rgba(38, 38, 38, 0.765);
    backdrop-filter: blur(3px);
}

.sketchfab-content {
    background: rgba(38, 38, 38, 0.765);
    backdrop-filter: blur(3px);
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.content-wrap {
    width: 80%;
    height: 80%;
    text-align: center;
    background: rgba(32, 30, 30, 0.438);
    border-radius: 5px;
    border: 0.4px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: -1px -1px 11px -2px rgba(176, 176, 176, 0.75);
    -webkit-box-shadow: -1px -1px 11px -2px rgba(130, 130, 130, 0.75);
    -moz-box-shadow: -1px -1px 11px -2px rgba(139, 139, 139, 0.75);
    gap: 20px;
}

.sketchfab-embed-wrapper iframe {
    width: 100%;
    height: 100%;
}

.model-name {
    display: none !important;
}

.model-name__label {
    display: none !important;
}


.typing-demo {
    width: 100%;
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    text-align: center;
    font-size: 1.8em;
}

@keyframes typing {
    from {
        width: 0
    }
}

@keyframes blink {
    50% {
        border-color: transparent
    }
}


@media (max-width: 700px) {
    .wrap {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: auto;
        background-position: center, center;
        background-size: cover;
    }

    .sketchfab-embed-wrapper {
        height: 40vh;
        width: 100%;
        background: rgba(38, 38, 38, 0.765);
        backdrop-filter: blur(3px);
    }

    .sketchfab-content {
        background: rgba(38, 38, 38, 0.765);
        backdrop-filter: blur(3px);
       min-height: 50vh;
       
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .content-wrap {
        width: 90%;
        height: 90%;
        margin:1em 0 ;
    }

    .typing-demo {
        width: 100%;
        animation: typing 2s steps(22), blink .5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
        font-family: monospace;
        text-align: center;
        font-size: 1.2em;
    }

    .dis {}

}
</style>