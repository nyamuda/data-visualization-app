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
            dashboard_section: true,
            register_section: false,
            analytics_section: false,
            questions_section: false,
            section: "Dashboard",
            deskActive:
                "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
        };
    },
    methods: {
        logoutAdmin() {
            axios.post("/api/admin_logout").then(res => {
                this.$router.push({ name: "admin_login" });
                console.log(res);
            });
        },

        viewSection(event) {
            /*if its a parent element is clicked -- parent elements have ids*/
            if (event.target.id != "") {
                //go up to the major parent element and getting all its children
                let collection = [...event.target.parentElement.children];
                //looping through the children
                collection.forEach(val => {
                    //removing the background color
                    val.classList.remove("bg-gray-200");

                    //getting the id value of each child
                    let id_name = val.id;

                    //disabling all the unclicked sections section

                    this[id_name] = false;
                });

                //getting the id value of the clicked section
                let id_name = event.target.id;
                //add the background
                event.target.classList.add("bg-gray-200");

                //enabling the clicked section
                this[id_name] = true;
            } else {
                /*else if its a child element --- child elements don't have ids*/
                /* going way up to the major parent element and then getting its children*/
                let collection = [
                    ...event.target.parentElement.parentElement.children
                ];
                //looping through the children
                collection.forEach(val => {
                    //removing the background color
                    val.classList.remove("bg-gray-200");
                    //getting the id value of each child
                    let id_name = val.id;
                    //disabling all the unclicked sections section
                    this[id_name] = false;
                });
                //getting the id value of the clicked section
                let id_name = event.target.parentElement.id;
                //add the background
                event.target.parentElement.classList.add("bg-gray-200");
                //enabling the clicked section
                this[id_name] = true;
            }

            console.log({
                reg: this.register_section,
                que: this.questions_section,
                dash: this.dashboard_section
            });
        }
    },
    computed: {}
};
</script>
