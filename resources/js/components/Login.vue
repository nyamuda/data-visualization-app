<template>
    <div>
        <login-template>
            <template v-slot:title>
                Login
            </template>
            <template v-slot:email>
                <input
                    class="input1 rounded-lg w-auto bg-gray-100 focus:outline-none transition duration-300 ease-in-out h-10 px-2"
                    v-model="userData.email"
                    id="admin_email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    required
                />
                <span
                    class="text-xs text-red-600 absolute -bottom-4"
                    v-if="errorMessage.email"
                    >{{ errorMessage.email[0] }}</span
                >
                <span
                    class="text-xs text-red-600 absolute -bottom-4"
                    v-else
                ></span>
            </template>

            <template v-slot:password>
                <input
                    class="input1 rounded-lg w-auto bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-30 focus:border-gray-200 transition duration-300 ease-in-out h-10 px-2"
                    v-model="userData.password"
                    id="admin_password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                />
                <span
                    class="text-xs text-red-600 absolute -bottom-4"
                    v-if="errorMessage.password"
                    >{{ errorMessage.password[0] }}</span
                >
                <span
                    class="text-xs text-red-600 absolute -bottom-4"
                    v-else
                ></span>
            </template>
            <template v-slot:button>
                <button
                    @keyup.enter="userLogin"
                    @click.prevent="userLogin"
                    class="focus:outline-none bg-gray-600 rounded-sm w-auto hover:bg-gray-800 transition duration-500 ease-in-out mt-4 py-1 text-gray-100 text-center h-10"
                    type="submit"
                >
                    Login
                </button>
            </template>
        </login-template>
    </div>
</template>

<
<script>
import axios from "axios";
import LoginTemplate from "./LoginTemplate";

export default {
    components: {
        "login-template": LoginTemplate
    },
    data() {
        return {
            userData: {
                email: "",
                password: "",
                is_admin: 0
            },
            errorMessage: "",
            registerFormDisplay: true
        };
    },
    methods: {
        userLogin() {
            //showing the page loader
            this.$store.commit("loaderStatus");
            //initializing CSRF protection for the application
            axios.get("/sanctum/csrf-cookie").then(response => {
                //the maing the post request
                axios
                    .post("/api/login", this.userData)
                    .then(res => {
                        //hiding the page loader
                        this.$store.commit("loaderStatus");
                        //then going to the survey list page
                        this.$router.push({ name: "survey_list" });
                    })
                    .catch(error => {
                        //hiding the page loader
                        this.$store.commit("loaderStatus");
                        this.errorMessage = error.response.data.errors;
                    });
            });
        }
    }
};
</script>
<style></style>
