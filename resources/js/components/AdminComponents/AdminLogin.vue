<template>
    <div class="flex flex-col h-screen justify-between">
        <login-template>
            <template v-slot:title>
                Admin Login
            </template>
            <template v-slot:email>
                <input
                    class="input1 rounded-lg w-auto bg-gray-100 focus:outline-none transition duration-300 ease-in-out h-10 px-2"
                    v-model="adminData.email"
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
                    v-model="adminData.password"
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
                    @keyup.enter="adminLogin"
                    @click.prevent="adminLogin"
                    class="focus:outline-none bg-gray-600 rounded-sm w-auto hover:bg-gray-800 transition duration-500 ease-in-out mt-4 py-1 text-gray-100 text-center h-10"
                    type="submit"
                >
                    Login
                </button>
            </template>
        </login-template>
    </div>
</template>

<script>
import axios from "axios";
import LoginTemplate from "../LoginTemplate";

export default {
    components: {
        "login-template": LoginTemplate
    },
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
<style>
.input1:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
}
</style>
