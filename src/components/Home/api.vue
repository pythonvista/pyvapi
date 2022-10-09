<template>
    <div class="api-wrap pa-2">
        <div class="api-title text-center ">
            <p class="text-h4">PYV APIs</p>
        </div>
        <div @click="open(index)" v-for="(api, index) in apis" :key="index" class="api pa-2">
            <div class="logo">
                <img :src="api.logo" alt="">
            </div>
            <div class="title">{{api.name}}</div>
            <div class="version">
                <p class="ma-0">{{api.version}} </p>
            </div>
        </div>

        <v-dialog v-model="dialog" max-width="290" class="dialog-box">
            <v-card class="dialog d-flex pa-2 ma-0 justify-center align-center flex-column">
                <div class="logo">
                    <img :src="selectedApi.logo" alt="">
                </div>
                <div class="d-flex justify-center align-center api-btn">
                    <v-btn :to="{name: 'Docs'}" depressed color="black" class="white--text"  x-small>Api Docs</v-btn>
                    <v-btn depressed color="black" class="white--text" x-small>Explore Api</v-btn>
                </div>

            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "api",
    data: () => ({
        apis: [
            {
                name: "Starwars Api",
                logo: "img/logo.png",
                version: "API V3.0",
                available: true,
                url: ""
            },
            {
                name: "Comrade Api",
                logo: "img/comrade.png",
                version: "Comming Soon",
                available: true,
                url: ""
            }
        ],
        selectedApi: {},
        dialog: false
    }),
    methods: {
        open(index){
            this.selectedApi = this.apis[index]
            this.dialog = true
        }
    }

}
</script>

<style scoped>
.api-title {
    color: white;

}

.api-wrap {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    background: #272b30;
    height: 89vh;
}

.api {
    max-height: 4rem;
    width: 100%;
    background-color: white;
    border: 1px solid rgba(74, 74, 236, 0.468);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: 0.6s;

}

.api:hover {
    cursor: pointer;
    box-shadow: 2px 2px 11px 1px rgba(248, 51, 51, 0.75);
    -webkit-box-shadow: 2px 2px 11px 1px rgba(248, 51, 51, 0.75);
    -moz-box-shadow: 2px 2px 11px 1px rgba(248, 51, 51, 0.75);
}

.api .logo {
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5em;
}

.logo img {
    width: 5.6rem;
}

.api .title {
    flex: 4;

}

.api .version {
    display: flex;
    justify-content: center;
    align-items: center;

}

.version p {
    background-color: rgba(244, 58, 58, 0.502);
    color: white;
    padding: 0.3em 0.5em;
    font-size: 0.5rem;
    border-radius: 10px;
}

.dialog{
    gap: 1rem;
    justify-content: center !important;
    height: 30vh !important;
}

.api-btn{
    gap: 1rem;
}
</style>