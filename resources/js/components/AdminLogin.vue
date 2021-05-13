<template>
    <div>
        <div class="mt-10">
            <form
                class="my_forms rounded-sm m-auto flex flex-col border-2 border-gray-200 shadow-2xl p-8"
                action=""
            >
                <p class="text-center text-2xl">Admin Login</p>
                <div class="flex flex-col justify-center mt-4">
                    <input
                        class="w-auto bg-gray-100 focus:outline-none focus:bg-green-100 transition duration-500 ease-in-out h-10 px-2"
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
                    class="focus:outline-none bg-green-500 rounded-sm w-auto hover:bg-green-800 transition duration-500 ease-in-out mt-4 py-1 text-gray-100 text-center h-10"
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
            //initializing CSRF protection for the application
            axios.get("/sanctum/csrf-cookie").then(response => {
                //then making the post request
                axios
                    .post("/api/admin_login", this.adminData)
                    .then(res => {
                        console.log(res);
                        this.$router.push({ name: "admin_dashboard" });
                    })
                    .catch(error => {
                        this.errorMessage = error.response.data.errors;
                    });
            });
        }
    }
};
</script>
