<template>
    <div id="survey-container" class="flex flex-col h-screen justify-between">
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
        <div class="mb-auto">
            <quiz-list></quiz-list>
        </div>
        <footer
            class="w-full h-32 bg-gray-800 text-gray-100 text-center object-bottom text-xs"
        >
            <div class="h-full flex flex-col justify-center">
                <p class="inset-x-0 bottom-0">
                    &#x000A9;2021. All rights reserved&#160;|&#160;Made by
                    Aptego Software.
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
import QuizList from "./QuizList";
export default {
    components: {
        "quiz-list": QuizList
    },
    data() {
        return {};
    },
    methods: {
        logoutUser() {
            axios.post("/api/logout").then(res => {
                console.log(res);
                this.$router.push({
                    name: "login"
                });
            });
        }
    },
    computed: {
        //show one category and hid others
        showCategory() {
            return this.$store.state.a.show_Categories;
        },
        //logged in user info
        userData() {
            return this.$store.state.c.loggedInUserInfo;
        }
    },
    created() {
        //getting the authenticated user info
        this.$store.dispatch("getAuthenticatedUserInfo");
    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");
#survey-container {
    font-family: "Noto Sans JP", sans-serif;
}
</style>
