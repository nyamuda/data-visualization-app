<template>
    <div>
        <admin-menu :section="section">
            <template v-slot:header>
                <div class="ml-10 flex items-baseline space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                    <router-link
                        to="/admin_dashboard"
                        class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Dashboard</router-link
                    >

                    <router-link
                        to="/admin_analytics"
                        class="my-links text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Analytics</router-link
                    >
                    <router-link
                        to="/admin_register_employee"
                        class="my-links text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Add Employee</router-link
                    >

                    <router-link
                        to="/admin_new_question"
                        class="my-links text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Add Survey</router-link
                    >
                </div>
            </template>
            <template v-slot:default>
                <router-link
                    to="/admin_dashboard"
                    class="my-links bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Dashboard</router-link
                >

                <router-link
                    to="/admin_analytics"
                    class="my-links text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Analytics</router-link
                >
                <router-link
                    to="/admin_register_employee"
                    class="my-links text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Add Employee</router-link
                >
                <router-link
                    to="/admin_new_question"
                    class="my-links text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Add Survey</router-link
                >
            </template>
        </admin-menu>
        <!--    <p>id: {{ userData.id }}</p> -->
        <div class="mt-8 text-center">
            <button
                @click.prevent="logoutAdmin"
                class="bg-purple-500 rounded-sm text-gray-50 p-2 hover:bg-purple-700 transition duration-500 ease-linear mt-8"
            >
                Logout
            </button>
        </div>
    </div>
</template>

<script>
import AdminMenu from "./AdminMenu";
export default {
    components: {
        "admin-menu": AdminMenu
    },
    data() {
        return {
            section: this.employee
        };
    },
    methods: {
        logoutAdmin() {
            //showing the page loader
            this.$store.commit("loaderStatus");
            //log out
            this.$store.dispatch("admin_logout");
        }
    },
    computed: {},
    created() {}
};
</script>
