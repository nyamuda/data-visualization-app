<template>
    <div id="survey-container" class="mt-0 mb-10">
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
        <div class="text-center w-full">
            <!-- 
            <p class="text-xl text-blue-500">name: {{ userData.name }}</p>
            <p class="text-xl text-blue-500">email: {{ userData.email }}</p>
              <p>id: {{ userData.id }}</p> -->
        </div>
        <category1
            :userData="userData"
            v-show="showCategory['show1']"
        ></category1>
        <category2
            :userData="userData"
            v-show="showCategory['show2']"
        ></category2>
        <category3
            :userData="userData"
            v-show="showCategory['show3']"
        ></category3>
        <category4
            :userData="userData"
            v-show="showCategory['show4']"
        ></category4>
        <category5
            :userData="userData"
            v-show="showCategory['show5']"
        ></category5>
        <category6 v-show="showCategory['show6']"></category6>
        <button
            @click.prevent="storeAllAnswers"
            class="bg-purple-500 rounded-sm px-3 py-1 hover:bg-purple-800 ml-4 transform duration-500 ease-in-out focus:outline-none"
        >
            Submit Answers
        </button>
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
        },
        //store the answers to the database
        storeAllAnswers() {
            this.$store.dispatch("saveAnswers");
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");
#survey-container {
    font-family: "Noto Sans JP", sans-serif;
}
</style>
