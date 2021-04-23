<template>
    <div>
        <header class="bg-gray-800 text-gray-100 h-12 .shadow">
            <div class="h-full flex items-center justify-between">
                <p class="text-xl ml-4">Survey App</p>
                <button
                    @click.prevent="logoutUser"
                    class="bg-gray-600 rounded-sm text-gray-100 p-2 hover:bg-gray-500 transition duration-300 ease-linear mr-16"
                >
                    Logout
                </button>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        logoutUser() {
            //showing the page loader
            this.$store.commit("loaderStatus");
            axios.post("/api/logout").then(res => {
                this.$router.push({
                    name: "login"
                });
                //hiding the page loader
                this.$store.commit("loaderStatus");
            });
        }
    }
};
</script>
