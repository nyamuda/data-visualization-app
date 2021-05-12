<template>
    <div id="survey-container" class="flex flex-col h-screen justify-between">
        <the-header></the-header>
        <div class="mb-auto">
            <loader></loader>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import QuizList from "./QuizList";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";
export default {
    components: {
        loader: Loader,
        "the-header": Header,
        "the-footer": Footer
    },
    data() {
        return {};
    },
    methods: {},
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
