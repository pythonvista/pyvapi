<template>
    <div class="docs">
        <div class="doc-header pa-2">
            <h2>Documentation</h2>
        </div>
        <div class="doc-intro pa-2 ma-0 ">
            <p class="text-h6 mb-1 ">Introduction</p>
            <p class="text-caption pt-0 ma-0">Welcome to the Pyv Api by Python V, the Dynamic 3d API! This
                documentation should help you familiarise yourself with the resources available and how to consume them
                with HTTP requests. If you're after a native helper library then I suggest you scroll down and check out
                what's available. Read through the getting started section before you dive in. Most of your problems
                should be solved just by reading through it.</p>
        </div>
        <div class="doc-started pa-2 ma-0">
            <p class="text-h6 mb-1 ">Geting started</p>
            <p class="text-caption pt-0">Let's make our first API <span class="red--text">GET</span> request to the
                required api we want.. pyv api is dynamic and have various public api models available.
                Open up a terminal and use curl or fetch or even axios to make an API request for a resource. In the
                example below,
                we're trying to get all the starwars ship</p>
            <div class="example pa-2">
                <p class="text-caption ma-0">
                    http pyvapi.netlify.app/api/ships
                </p>
                <p class="text-caption ma-0">
                    Resources <br>
                    pyv Api comes with a set of 2 inital <a class="red--text ma-0" href="https://pyvapis.netlify.app/api">apis</a> release resources: <br>
                    <span class="blue--text">Starwars Api for example</span> <br>
                    <span class="red--text">GET Request</span> <br>
                    /api/starwars/ships <br> 
                    /api/starwars/guns <br>
                </p>
            </div>
            <p class="text-caption pa-2 mt-1 mb-0">
                Here is the response we get:
            </p>
            <div class="example pa-2 ma-0">
                <p class="text-caption">
                    HTTP/1.0 200 OK <br>
                    Content-Type: application/json <br>
                    [ <br>
                    {
                    "description":"String","title":"Magmus
                    4","shortDescrption":"this is the magmus
                    2","image":"String","id":"FtfSHkJMs4aGqcuSwVW4"

                    },<br>
                    {"shortDescrption":"this is the magmus
                    2","image":"String","title":"Magmus","description":"String","id":"PeJPpOkU0NbL3bFMQXOI"}, <br>
                    {"title":"Battle
                    gun g","shortDescrption":"this is the magmus
                    2t","image":"String","description":"String","id":"iX9cph9W3lSP6zwB9nk7"},
                    <br>{"shortDescrption":"this is
                    the magmus 2","image":"String","description":"String","title":"Magmus
                    2","id":"qNS84cr5IgP9apHpYC65"} <br> ]
                </p>
            </div>
        </div>
        <div class="doc-started pa-2 ma-0">
            <p class="text-caption pt-0">Let's make our first API <span class="red--text">POST</span> request to the
                Star
                Wars API!
                Open up a terminal and use curl or fetch or even axios to make an API request for a resource. In the
                example below,
                we're trying to get all the starwars ship</p>
            <p class="text-caption pt-0">
                <v-btn :to="{name: 'Post'}" x-small text color="red">Click here to make a post... available for creators
                </v-btn>
            </p>


            <div class="example pa-2">
                <p class="text-caption ma-0">
                    http pyvapi.netlify.app/api/starwars/post
                </p>
            </div>
            <p class="text-caption pa-2 mt-1 mb-0">
                Here is the response we get:
            </p>
            <div class="example pa-2">
                <p class="text-caption ma-0">
                    axios.post('https://pyvapi.netlify.app/api/starwars/post', { <br>
                    "requestToken": "0x00033849434893" `making post requires a secure connection` <br>
                    "dbname": "ships", <br> `indicates the database `
                    "title": "Battle gun g", <br> `title of the post`
                    "shortDescrption": "this is the magmus 2t", <br>
                    "description": "String", <br>
                    "image": "String" <br>
                    }) <br>
                    .then(function (response) { <br>
                    console.log(response); <br>
                    }) <br>
                    .catch(function (error) { <br>
                    console.log(error); <br>
                    }); <br>

                </p>
            </div>
            <div class="doc-post example pa-2 my-2 d-flex justify-center align-center">
                <v-btn block class="ma-2 " outlined color="indigo">
                    Request Authorization To Make A Post
                </v-btn>
            </div>

        </div>


    </div>
</template>

<script>
export default {
    name: "docs"
}
</script>

<style scoped>
.doc-header {
    border-bottom: 1px solid grey;
}

.docs {
    color: white !important;
    background-color: #272b30;
}

.example {
    background-color: white;
    color: black;
    font-weight: 500;
    border-radius: 8px;
}

.doc-post {
    color: rgb(0, 0, 0) !important;
    background-color: #ffffff;
    font-weight: 500;
    border-radius: 8px;
}
</style>