<template>
    <div class="mt-8">
        <div class="m-auto">
            <p>name: {{ userData.name }}</p>
            <p>email: {{ userData.email }}</p>
            <p>id: {{ userData.id }}</p>
            <button
                @click.prevent="logoutUser"
                class="text-gray-100 bg-blue-500 py-4 px-2"
            >
                Logout
            </button>
        </div>
        <category1 v-show="showCategory['show1']"></category1>
        <category2 v-show="showCategory['show2']"></category2>
        <category3 v-show="showCategory['show3']"></category3>
        <category4 v-show="showCategory['show4']"></category4>
        <category5 v-show="showCategory['show5']"></category5>
        <category6 v-show="showCategory['show6']"></category6>
    </div>
</template>
<script>
import Category1 from "./Category1";
import Category2 from "./Category2";
import Category3 from "./Category3";
import Category4 from "./Category4";
import Category5 from "./Category5";
import Category6 from "./Category6";
export default {
    components: {
        category1: Category1,
        category2: Category2,
        category3: Category3,
        category4: Category4,
        category5: Category5,
        category6: Category6
    },
    data() {
        return {};
    },
    methods: {
        logoutUser() {
            axios.post("/api/logout").then(res => {
                console.log(res);
                this.$router.push({ name: "login" });
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

        //getting the survey questions from the database
        this.$store.dispatch("getSurveyQuestions");
    }
};
</script>

<style scoped></style>
