<template>
    <div>
        <div class="mt-10">
            <form
                class="my_forms rounded-sm m-auto flex flex-col p-8"
                action=""
            >
                <p class="text-center text-2xl font-bold">Admin Login</p>
                <div class="w-full flex justify-center items-center mt-2">
                    <hr class="w-5/6 border-t-2 border-solid border-gray-500" />
                </div>
                <div class="flex flex-col justify-center mt-2">
                    <input
                        class="rounded-md w-auto bg-gray-100 focus:outline-none focus:bg-green-100 transition duration-500 ease-in-out h-10 px-2"
                        v-model="adminData.email"
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
                        v-model="adminData.password"
                        id="user_password"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <span
                        class="text-xs text-red-600"
                        v-if="errorMessage.password"
                        >{{ errorMessage.password[0] }}</span
                    >
                </div>
                <button
                    @click.prevent="adminLogin"
                    class="focus:outline-none bg-gray-600 rounded-sm w-auto hover:bg-gray-800 transition duration-500 ease-in-out mt-4 py-1 text-gray-100 text-center h-10"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            adminData: {
                email: "",
                password: "",
                is_admin: 1
            },
            errorMessage: "",
            registerFormDisplay: true
        };
    },
    methods: {
        adminLogin() {
            // this.$store.commit("loaderStatus");
            //initializing CSRF protection for the application
            axios.get("/sanctum/csrf-cookie").then(response => {
                //then making the post request
                axios
                    .post("/api/admin_login", this.adminData)
                    .then(res => {
                        //this.$store.commit("loaderStatus");
                        //then moving to the admin dashboard
                        this.$router.push({ name: "admin_dashboard" });
                    })
                    .catch(error => {
                        this.errorMessage = error.response.data.errors;
                    });
            });
        }
    },
    created() {
        //axios.post("/api/admin_logout");
    }
};
</script>
