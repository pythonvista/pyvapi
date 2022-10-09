<template>
    <div class="post-wrap">
        <div class="title my-3">
            Creator's Api Post Request
        </div>
        <v-container class="form-wrap">
            <v-form ref="form" v-if="authform" class="auth-form">
                <p class="center-text black--text py-2 text-h5">Api Request Token</p>
                <v-text-field :rules="authRules" v-model.trim="token" label="Token Id" class="token-input " outlined
                    clearable></v-text-field>
                <v-btn @click="auth" :loading="loading">Submit</v-btn>
            </v-form>

            <div v-if="otpform" class="otp px-4  ma-auto pa-3 position-relative" style="max-width: 300px">
                <p class="black--text text-center">Otp Sent to Email <br> {{userAuth.email}}</p>
                <v-otp-input class="mx-3" v-model.number="typeOtp" @finish="verifyOtp" :disabled="otpLoading">
                </v-otp-input>
                <v-overlay absolute :value="otpLoading">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </v-overlay>
            </div>

            <form v-if="postform" class="auth-form post-form justify-start align-start text-center pa-3">
                <p class=" black--text text-center text-h5 ">Make a post request</p>
                <v-select :rules="formRules" class="inputse ma-0 pa-0" :items="dbnames" v-model="dform.dbname"
                    label="Select Api Dbname" outlined></v-select>

                <input v-model="dform.title" class="input" placeholder="Post Title" type="text">
                <input v-model="dform.shortDescription" class="input" placeholder="Post Short Description" type="text">
                <input v-model="dform.image" class="input" type="text" placeholder="Post Image Url">
                <textarea v-model="dform.description" class="input" placeholder="Post Description" rows="1"></textarea>
                <v-btn @click="postApi" :loading="loading" class="ma-auto" outlined>Submit</v-btn>
            </form>
        </v-container>
        <v-snackbar v-model="snackbar" :multi-line="multiLine">
            {{ snacktext }}
            <template v-slot:action="{ attrs }">
                <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import { db, doc, getDoc } from '@/Auth/index';
import sha1 from 'js-sha1'
import emailjs from '@emailjs/browser';
const axios = require('axios').default;
export default {
    name: 'post',
    data: () => ({
        multiLine: true,
        snackbar: false,
        snacktext: '',
        token: '',
        userAuth: {},
        loading: false,
        otpLoading: false,
        authRules: [(v) => !!v || "Required"],
        formRules: [(v) => !!v || "Required"],
        otp: '',
        typeOtp: "",
        authform: true,
        otpform: false,
        postform: false,
        dform: {

        },
        dbnames: [
            'ships', 'guns'
        ]
    }),
    methods: {
        async auth() {
            if (this.$refs.form.validate()) {
                this.loading = true
                let requestToken = this.token
                try {
                    const docRef = doc(db, "token", requestToken);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        this.userAuth = docSnap.data()
                        if (this.userAuth.isVerified) {
                            let userauth = JSON.parse(localStorage.getItem("token")) || null
                            if (userauth != null) {
                                if (userauth == sha1(requestToken)) {
                                    this.authform = false
                                    this.postform = true

                                } else {
                                    this.authform = false
                                    this.otpform = true
                                    this.otp = Math.floor(Math.random() * 900000 + 100000);
                                    this.sendOtp(this.userAuth.email, this.otp)
                                }
                            } else {
                                this.authform = false
                                this.otpform = true
                                this.otp = Math.floor(Math.random() * 999999);
                                this.sendOtp(this.userAuth.email, this.otp)

                            }

                        } else {
                            throw { msg: "Auth token expired" }
                        }
                    } else {
                        throw { msg: "Invalid Auth Token" }
                    }
                    this.loading = false
                } catch (err) {
                    this.loading = false
                    this.snackbar = true
                    this.snacktext = err.msg
                }


            }

        },
        async sendOtp(email, otp) {
            console.log(email, otp)
            try {
                var templateParams = {
                    email: email,
                    otp: otp
                };
                await emailjs.send('service_wwx22cx', 'template_9g2yosl', templateParams, '0ZDFcggQjgklmQgFN')
                console.log("succcess")

            } catch (err) {
                console.log(err)
            }
        },
        verifyOtp() {
            if (this.typeOtp === this.otp) {
                this.otpLoading = true
                setTimeout(() => {
                    let hashed = sha1(this.token)
                    localStorage.setItem('token', JSON.stringify(hashed))
                    this.otpLoading = false
                    this.otpform = false
                    this.postform = true
                }, 3)

            }
        },
        async postApi() {

            if (this.dform.dbname && this.dform.title && this.dform.description && this.dform.shortDescription && this.dform.image) {
                this.loading = true
                try {
                    let res = await axios.post('https://pyvapi.netlify.app/api/post-starwars', this.dform)
                    console.log(res.data)
                    this.loading = false
                    this.snackbar = true
                    this.snacktext = res.data.msg
                    this.dform= {}
                    // this.loading = false
                } catch (err) {
                    console.log(err)
                    this.loading = false
                    this.snackbar = true
                    this.snacktext = err
                }
            } else {
                this.snackbar = true
                this.snacktext = "Fill all the required fields"
            }

        }
    }



}
</script>

<style scoped>
.post-wrap {
    height: 89vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: #272b30;
    color: white;
}

.title {
    border-bottom: 1px solid red;
    border-top: 1px solid red;
}

.form-wrap {
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-form {
    /* border: 1px solid red; */
    width: 60%;
    height: 80%;
    background: white;
    box-shadow: 1px 2px 23px -9px rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 1px 2px 23px -9px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 1px 2px 23px -9px rgba(255, 255, 255, 0.75);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.token-input {
    width: 80%;
    border: none !important;
    margin: 0 !important;
}

.v-input,
.v-otp-input {
    flex: 0 !important;
}

.otp {
    width: 60% !important;
    height: 50%;
    background: white;
    box-shadow: 1px 2px 23px -9px rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 1px 2px 23px -9px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 1px 2px 23px -9px rgba(255, 255, 255, 0.75);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.post-form {
    text-align: center;
    gap: 10px;
    height: auto !important;
}

.post-form p {
    border-bottom: 1px solid rgba(255, 0, 0, 0.454);
    width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
    text-transform: capitalize;
}

.input {
    padding: 0.5em 1em;
    width: 100%;
    border: 1px solid green;
    outline: none;
}

.select {
    color: black !important;
}

.inputse {
    padding: 0.5em 1em;
    width: 100%;
    outline: none;
}

@media (max-width: 700px) {
    .form-wrap {
        width: 90%;

        align-items: center;
    }

    .auth-form {
        width: 100%;
    }

}
</style>