<template>
    <div class="mt-8">
        <div class="m-auto">
            <p>name: {{ loggedInUserInfo.name }}</p>
            <p>email: {{ loggedInUserInfo.email }}</p>
            <p>id: {{ loggedInUserInfo.id }}</p>
            <button
                @click.prevent="logoutUser"
                class="text-gray-100 bg-blue-500 py-4 px-2"
            >
                Logout
            </button>
        </div>
        <category1 v-show="showCategory['showOne']"></category1>
        <category2 v-show="showCategory['showTwo']"></category2>
        <category3 v-show="showCategory['showThree']"></category3>
    </div>
</template>
<script>
import Category1 from "./Category1";
import Category2 from "./Category2";
import Category3 from "./Category3";
export default {
    components: {
        category1: Category1,
        category2: Category2,
        category3: Category3
    },
    data() {
        return {
            loggedInUserInfo: ""
        };
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
        showCategory() {
            return this.$store.state.show_Categories;
        }
    },
    created() {
        //getting the authencated user info
        axios.get("/api/user").then(res => {
            this.loggedInUserInfo = res.data;
            console.log(this.loggedInUserInfo);
        });

        //getting the survey questions from the database
        axios.get("/api/questions").then(res => {
            console.log(res);
        });
    }
};
</script>

<style scoped></style>
