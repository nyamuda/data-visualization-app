<template>
    <div>
        <p class="text-3xl text-center my-10 font-bold">
            Pending Surveys : {{ pendingQuiz.length }}
        </p>
        <div
            v-if="pendingQuiz.length > 0"
            class="flex flex-col justify-center items-center text-center w-5/6 m-auto sm:flex-row sm:justify-evenly sm:flex-wrap"
        >
            <div
                v-for="category in pendingQuiz"
                :key="category.id"
                class="sm:w-80 m-4 w-full shadow-xl transition duration-500 ease-linear bg-gray-50 text-gray-800 pb-2 rounded"
            >
                <p
                    @click="goToQuiz"
                    :id="category.category_id"
                    class="text-xl w-full shadow-lg p-1.5 bg-gray-500 text-blue-100 cursor-pointer hover:text-blue-500 transition duration-200 ease-out"
                >
                    {{ category.category_name }}
                </p>
                <p class="p-2">
                    {{ category.category_description }}
                </p>
            </div>
        </div>
        <div
            v-else
            class="m-auto w-5/6 text-center flex-col items-center justify-center"
        >
            <div class="w-16 m-auto">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 50 50"
                    style="enable-background: new 0 0 50 50"
                    xml:space="preserve"
                >
                    <g id="Layer_1">
                        <path
                            d="M44,1H6C3.243,1,1,3.243,1,6v38c0,2.757,2.243,5,5,5h38c2.757,0,5-2.243,5-5V6C49,3.243,46.757,1,44,1z M47,44
   c0,1.654-1.346,3-3,3H6c-1.654,0-3-1.346-3-3V6c0-1.654,1.346-3,3-3h38c1.654,0,3,1.346,3,3V44z"
                        />
                        <polygon
                            points="16,35.586 9.707,29.293 8.293,30.707 16,38.414 41.707,12.707 40.293,11.293 	"
                        />
                    </g>
                    <g></g>
                </svg>
            </div>
            <div>
                <p class="text-2xl">
                    You have completed all the surveys. There are no new surveys
                    at the moment.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        goToQuiz(event) {
            let cat_id = Number(event.target.id);

            this.$router.push("quiz/" + cat_id);
        }
    },
    computed: {
        pendingQuiz() {
            return this.$store.state.c.all_categories;
        },
        quizQuestions() {
            return this.$store.state.c.all_questions;
        }
    },
    created() {
        this.$store.commit("loaderStatus");
        this.$store.dispatch("getCategories");
    }
};
</script>
