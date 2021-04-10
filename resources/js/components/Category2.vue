<template>
    <div class="mt-8">
        <div class="question_container mt-8 m-auto shadow-xl">
            <div class="bg-green-500 p-2 text-gray-100">
                <p>Confidence in Redress</p>
            </div>

            <div class="bg-green-900 text-green-300 px-2 py-1">
                <p class="text-xs">CATEGORY 2 OF 5</p>
            </div>

            <div
                class="flex justify-around flex-col bg-gray-100 px-4"
                v-for="(question, index) in category2_data"
                :key="question.id"
            >
                <hr class="border-gray-300" />

                <p class="p-2 w-auto">
                    {{ index + 1 }}. {{ question.question }}
                </p>
                <div
                    class="flex flex-col px-4 pb-4 md:mt-4 md:flex-row md:justify-between"
                >
                    <label
                        class="flex justify-start items-center"
                        :for="'happy_' + question.question_id"
                    >
                        <input
                            class="w-4 h-4"
                            type="radio"
                            :name="'coffee_' + question.question_id"
                            :id="'happy_' + question.question_id"
                        /><span class="text-xl ml-1">&#128512;</span>
                        Happy</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'good_' + question.question_id"
                    >
                        <input
                            class="w-4 h-4"
                            type="radio"
                            :name="'coffee_' + question.question_id"
                            :id="'good_' + question.question_id"
                        /><span class="text-xl ml-1">&#128516;</span>
                        Good</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'not-happy_' + question.question_id"
                    >
                        <input
                            class="w-4 h-4"
                            type="radio"
                            :name="'coffee_' + question.question_id"
                            :id="'coffee_' + question.question_id"
                        /><span class="text-xl ml-1">&#128525;</span>Not
                        happy</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'angry_' + question.question_id"
                    >
                        <input
                            class="w-4 h-4"
                            type="radio"
                            :name="'coffee_' + question.question_id"
                            :id="'angry_' + question.question_id"
                        /><span class="text-xl ml-1">&#128151;</span>
                        Angry</label
                    >
                </div>
            </div>
            <div
                class="flex justify-center bg-green-500 text-gray-100 items-center h-12"
            >
                <button
                    @click="prev"
                    class="bg-purple-500 px-3 py-1 hover:bg-purple-800 mr-4 transform duration-500 ease-in-out focus:outline-none rounded-sm"
                >
                    Prev
                </button>
                <button
                    @click="next"
                    class="bg-purple-500 rounded-sm px-3 py-1 hover:bg-purple-800 ml-4 transform duration-500 ease-in-out focus:outline-none"
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
        return {
            val: ""
        };
    },
    methods: {
        next() {
            this.$store.commit("nextSecondCategory");
        },
        prev() {
            this.$store.commit("prevSecondCategory");
        }
    },
    computed: {
        category2_data() {
            //getting the category1 questions from the state  - module C.
            /*the all_question object's values are arrays with elements which are objects.*/
            return this.$store.state.c.all_questions.category2_questions;
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
