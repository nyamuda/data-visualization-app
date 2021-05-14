<template>
    <div class="flex flex-col h-screen justify-between">
        <the-header></the-header>
        <div class="mb-auto">
            <p
                v-if="pendingQuiz.length > 0"
                class="text-center text-2xl mb-3 mt-8"
            >
                Survey Categories: {{ pendingQuiz[0]["survey_type_name"] }}
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
                class="m-auto w-5/6 text-center flex-col items-center justify-center pt-12 lg:w-1/2"
            >
                <div class="w-16 m-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.com/svgjs"
                        version="1.1"
                        width="60"
                        height="60"
                        x="0"
                        y="0"
                        viewBox="0 0 512 512"
                        style="enable-background:new 0 0 512 512"
                        xml:space="preserve"
                    >
                        <g>
                            <g xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <g>
                                        <path
                                            d="M480,240v160c0,44.183-35.817,80-80,80H112c-44.183,0-80-35.817-80-80V112c0-44.183,35.817-80,80-80h160V0H112     C50.144,0,0,50.144,0,112v288c0,61.856,50.144,112,112,112h288c61.856,0,112-50.144,112-112V240H480z"
                                            fill="#000000"
                                            data-original="#000000"
                                            style=""
                                        />
                                        <path
                                            d="M123.36,212.64l-22.72,22.72l112,112c6.241,6.204,16.319,6.204,22.56,0l256-256l-22.56-22.72L224,313.44L123.36,212.64z"
                                            fill="#000000"
                                            data-original="#000000"
                                            style=""
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div>
                    <p class="text-2xl">
                        You have completed all the categories for this survey.
                        There are no new categories at the moment.
                    </p>
                </div>
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
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
    methods: {
        goToQuiz(event) {
            let cat_id = Number(event.target.id);

            this.$router.push("/quiz/" + cat_id);
        }
    },
    computed: {
        pendingQuiz() {
            return this.$store.state.c.all_categories;
        }
    },
    created() {
        this.$store.commit("loaderStatus");
        //getting all categories for a specif survey id
        this.$store.dispatch("getCategories", this.$route.params.id);
    }
};
</script>
