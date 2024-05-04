<template>
    <v-card>
        <v-card-title 
            primary-title 
            class="blue-grey lighten-4"
        >
            <div>
                <h3 class="headline mb-0">Drop us a line</h3>
                <div>Fill out and submit this form to send us an e-mail</div>
                
            </div>
        </v-card-title>
        <div class="pa-3">
            <v-form 
                action="https://formspree.io/f/xzblbyqj" 
                name="contact"
                method="POST" 
                ref="form" 
                v-model="valid" 
            >
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    name="Name"
                    required
                    id="nameInput"
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    name="email"
                    required
                    id="emailInput"
                ></v-text-field>
                <div class="caption grey--text ">We'll never share your email with anyone else.</div>
                <v-textarea 
                    v-model="message" 
                    :rules="messageRules"
                    required
                    name="message"
                    id="inquiryInput"
                >
                    <div slot="label">Send us a message</div>
                </v-textarea>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn 
                        flat 
                        round 
                        class="white--text red lighten-1" 
                        @click="reset"
                    >
                        Clear
                    <v-icon class="ml-2" color="white">mdi-cancel</v-icon>
                    </v-btn>
                    <v-btn 
                        flat 
                        round 
                        :class="{ grey: !valid, green: valid}"
                        class="white--text lighten-1" 
                        @click="submit" 
                        type="submit" 
                        value="Send"
                        :disabled="!valid"
                    >
                        Submit
                    <v-icon class="ml-2" color="white">mdi-send</v-icon>
                    </v-btn>
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
            v =>
                /[a-z0-9._%+!$&*=^|~#%'`?{}/-]+@([a-z0-9-]+.){1,}([a-z]{2,16})/.test(
                    v
                ) || 'Must be a valid e-mail'
        ],
        message: '',
        messageRules: [v => !!v || 'Message is required']
    }),

    methods: {
        reset() {
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
        },
        submit() {
            this.$refs.form.validate();
        }
    }
};
</script>

<style scoped>
</style>
