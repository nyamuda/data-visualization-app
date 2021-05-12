<template>
    <div class="flex flex-col h-screen justify-between">
        <div class="mt-10 mb-auto">
            <form
                class="my_forms rounded-sm m-auto flex flex-col border-2 border-gray-200 shadow-2xl p-8"
                action=""
            >
                <p class="text-center text-2xl">Login</p>
                <div class="flex flex-col justify-center mt-4">
                    <input
                        class="w-auto bg-gray-100 focus:outline-none focus:bg-green-100 transition duration-500 ease-in-out h-10 px-2"
                        v-model="userData.email"
                        id="user_email"
                        name="email"
                        type="text"
                        placeholder="Email"
                    />
                    <span
                        class="text-xs text-red-600"
                        v-if="errorMessage.email"
                        >{{ errorMessage.email[0] }}</span
                    >
                </div>
                <div class="flex flex-col justify-center mt-4">
                    <input
                        class="w-auto bg-gray-100 focus:outline-none focus:bg-green-100 transition duration-500 ease-in-out h-10 px-2"
                        v-model="userData.password"
                        id="user_password"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <span
                        class="text-xs text-red-600"
                        v-if="errorMessage.email"
                        >{{ errorMessage.email[0] }}</span
                    >
                </div>

                <button
                    @click.prevent="userLogin"
                    class="focus:outline-none bg-green-500 rounded-sm w-auto hover:bg-green-800 transition duration-500 ease-in-out mt-4 py-1 text-gray-100 text-center h-10"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<
<script>
import axios from "axios";
import Footer from "./Footer";
export default {
    components: {
        "the-footer": Footer
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
            axios
                .post("/api/login", this.userData)
                .then(res => {
                    //hiding the page loader
                    this.$store.commit("loaderStatus");
                    this.$router.push({ name: "survey_list" });
                })
                .catch(error => {
                    //hiding the page loader
                    this.$store.commit("loaderStatus");
                    this.errorMessage = error.response.data.errors;
                });
        }
    }
};
</script>
<style></style>
