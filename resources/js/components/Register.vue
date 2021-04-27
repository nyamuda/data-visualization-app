<template>
    <div>
        <admin-menu :section="section">
            <template v-slot:header>
                <div class="ml-10 flex items-baseline space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                    <router-link
                        to="/admin_dashboard"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Dashboard</router-link
                    >

                    <router-link
                        to="/admin_analytics"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Analytics</router-link
                    >
                    <router-link
                        to="/admin_register_employee"
                        class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Add Employee</router-link
                    >

                    <router-link
                        to="/admin_new_question"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Add Survey</router-link
                    >

                    >
                </div>
            </template>
            <template v-slot:default>
                <router-link
                    to="/admin_dashboard"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Dashboard</router-link
                >

                <router-link
                    to="/admin_analytics"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Analytics</router-link
                >
                <router-link
                    to="/admin_register_employee"
                    class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Add Employee</router-link
                >
                <router-link
                    to="/admin_new_question"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Add Survey</router-link
                >
            </template>
        </admin-menu>
        <div class="mt-10">
            <form
                class="form_register rounded-sm m-auto flex flex-col border-2 border-gray-200 shadow-2xl p-8"
                action=""
            >
                <p class="text-center text-2xl">Register New User</p>
                <div class="flex flex-col justify-center">
                    <input
                        class="w-auto bg-gray-100 focus:outline-none focus:bg-green-100 transition duration-500 ease-in-out h-10 px-2 mt-4"
                        v-model="registerData.name"
                        id="user_name"
                        name="name"
                        type="text"
                        placeholder="Name"
                    />
                    <span
                        class="text-xs text-red-600"
                        v-if="errorMessage.name"
                        >{{ errorMessage.name[0] }}</span
                    >
                </div>
                <div class="flex flex-col justify-center mt-4">
                    <input
                        class="w-auto bg-gray-100 focus:outline-none focus:bg-green-100 transition duration-500 ease-in-out h-10 px-2"
                        v-model="registerData.email"
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
                        v-model="registerData.password"
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
                <div class="flex flex-col justify-center mt-4">
                    <input
                        class="w-auto bg-gray-100 focus:outline-none focus:bg-green-100 transition duration-500 ease-in-out h-10 px-2"
                        v-model="registerData.password_confirmation"
                        id="user_password_confirmation"
                        name="password_confirmation"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <span
                        class="text-xs text-red-600"
                        v-if="errorMessage.password"
                        >{{ errorMessage.password[0] }}</span
                    >
                </div>

                <button
                    @click.prevent="addNewUser"
                    class="focus:outline-none bg-green-500 rounded-sm w-auto hover:bg-green-800 transition duration-500 ease-in-out mt-4 py-1 text-gray-100 text-center h-10"
                    type="submit"
                >
                    Register
                </button>
            </form>
        </div>
    </div>
</template>

<
<script>
import axios from "axios";
import AdminMenu from "./AdminMenu";
export default {
    components: {
        "admin-menu": AdminMenu
    },
    data() {
        return {
            registerData: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            errorMessage: "",
            registerFormDisplay: true,
            section: "Add Employee"
        };
    },
    methods: {
        addNewUser() {
            axios
                .post("/api/register", this.registerData)
                .then(res => {
                    console.log(res);
                    this.registerData.name = "";
                    this.registerData.email = "";
                    this.registerData.password = "";
                    this.registerData.password_confirmation = "";
                })
                .catch(error => {
                    this.errorMessage = error.response.data.errors;
                    console.log(error.response.data.errors.password[0]);
                    console.error(error);
                });
        }
    }
};
</script>
