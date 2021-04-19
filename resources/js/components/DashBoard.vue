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
            <category6
                :toggleModal="toggleModal"
                :userData="userData"
                v-show="showCategory['show6']"
            ></category6>

            <Modal
                :toggleModal="toggleModal"
                :showModal="showModal"
                :storeAllAnswers="storeAllAnswers"
            ></Modal>
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
import Modal from "./Modal";
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
        category6: Category6,
        Modal
    },
    data() {
        return { showModal: false };
    },
    methods: {
        toggleModal: function() {
            this.showModal = !this.showModal;
        },
        logoutUser() {
            axios.post("/api/logout").then(res => {
                console.log(res);
                this.$router.push({
                    name: "login"
                });
            });
        },
        //store the answers to the database
        storeAllAnswers() {
            this.$store.dispatch("saveAnswers");
            this.$router.push({ name: "thank" });
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
