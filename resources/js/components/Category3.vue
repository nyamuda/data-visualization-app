<template>
    <div class="mt-8">
        <div class="container mt-8 m-auto shadow-xl">
            <div class="bg-purple-500 p-2 text-gray-100">
                <p>Salary</p>
            </div>

            <div class="bg-purple-900 text-purple-300 px-2 py-1">
                <p class="text-xs">CATEGORY 3 OF 5</p>
            </div>

            <div
                class="flex justify-around flex-col bg-gray-100 px-4"
                v-for="(question, index) in category3_data"
                :key="question.id"
            >
                <hr class="border-gray-300" />

                <p class="p-2 w-auto">{{ index + 1 }}. {{ question.title }}</p>
                <div
                    class="flex flex-col px-4 pb-4 md:mt-4 md:flex-row md:justify-between"
                >
                    <label
                        class="flex justify-start items-center"
                        :for="'happy_' + question.title_id"
                    >
                        <input
                            class="w-4 h-4"
                            type="radio"
                            :name="'salary_' + question.title_id"
                            :id="'happy_' + question.title_id"
                        /><span class="text-xl ml-1">&#128512;</span>
                        Happy</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'good_' + question.title_id"
                    >
                        <input
                            class="w-4 h-4"
                            type="radio"
                            :name="'salary_' + question.title_id"
                            :id="'good_' + question.title_id"
                        /><span class="text-xl ml-1">&#128516;</span>
                        Good</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'not-happy_' + question.title_id"
                    >
                        <input
                            class="w-4 h-4"
                            type="radio"
                            :name="'salary_' + question.title_id"
                            :id="'not-happy_' + question.title_id"
                        /><span class="text-xl ml-1">&#128525;</span>Not
                        happy</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'angry_' + question.title_id"
                    >
                        <input
                            class="w-4 h-4"
                            type="radio"
                            :name="'salary_' + question.title_id"
                            :id="'angry_' + question.title_id"
                        /><span class="text-xl ml-1">&#128151;</span>
                        Angry</label
                    >
                </div>
            </div>
            <div
                class="flex justify-center bg-purple-500 text-gray-100 items-center h-12"
            >
                <button
                    @click="prev"
                    class="bg-red-500 px-3 py-1 hover:bg-red-800 mr-4 transform duration-500 ease-in-out focus:outline-none rounded-sm"
                >
                    Prev
                </button>
                <button
                    class="bg-red-300 rounded-sm px-3 py-1 hover:bg-red-300 ml-4 transform duration-500 ease-in-out focus:outline-none"
                >
                    Next
                </button>
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
        prev() {
            this.$store.commit("prevThirdCategory");
        }
    },
    computed: {
        category3_data() {
            return this.$store.state.category3;
        }
    }
};
</script>

<style scoped>
.container {
    width: 90%;
}

@media (min-width: 768px) {
    .container {
        width: 40rem;
    }
}
</style>
