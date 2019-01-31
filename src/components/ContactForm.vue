<template>
    <v-card>
        <v-card-title primary-title class="grey lighten-2">
            <div>
                <h3 class="headline mb-0">Drop us a line</h3>
                <div>Fill out and submit this form to send us an e-mail</div>
                
            </div>
        </v-card-title>
        <div class="pa-3">
            <v-form action="https://formspree.io/jparsons@taylorlawofficewv.com" method="POST" ref="form" v-model="valid" lazy-validation>
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required
                    id="nameInput"
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    id="emailInput"
                ></v-text-field>
                <div class="ma-0 pa-0 caption grey--text ">We'll never share your email with anyone else.</div>
                <v-textarea 
                    v-model="message" 
                    :rules="messageRules"
                    required
                    id="inquiryInput"
                >
                    <div slot="label">Send us a message</div>
                </v-textarea>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat round class="white--text red lighten-2" @click="reset">Reset</v-btn>
                    <v-btn flat round class="white--text green lighten-2" @click="submit" type="submit" value="Send">Submit</v-btn>
                </v-card-actions>
            </v-form>
        </div>

    </v-card>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        name: '',
        nameRules: [v => !!v || 'Name is required'],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'Must be a valid e-mail'
        ],
        message: '',
        messageRules: [v => !!v || 'Message is required']
    }),

    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.snackbar = true;
            }
        },
        reset () {
            this.$refs.form.reset()
            this.$refs.form.resetValidation()
        },
        submit() {
            if (this.validate()) {
                this.$v.$touch;
            }
        },
    }
};
</script>

<style scoped>
</style>
