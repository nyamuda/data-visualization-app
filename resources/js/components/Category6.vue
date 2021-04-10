<template>
    <div class="mt-8">
        <div class="question_container mt-8 m-auto shadow-xl">
            <div class="bg-purple-500 p-2 text-gray-100">
                <p>General</p>
            </div>

            <div class="bg-purple-900 text-purple-300 px-2 py-1">
                <p class="text-xs">CATEGORY 6 OF 6</p>
            </div>

            <div
                class="flex justify-around flex-col bg-gray-100 px-4"
                v-for="(question, index) in category6_data"
                :key="question.id"
            >
                <hr class="border-gray-300" />

                <p class="p-2 w-auto">
                    {{ index + 1 }}. {{ question.question }}
                </p>
                <textarea
                    :name="'general' + question.question_id"
                    :id="question_id"
                    cols="30"
                    rows="10"
                ></textarea>
            </div>
            <div
                class="flex justify-center bg-purple-500 text-gray-100 items-center h-10"
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
        return {
            val: ""
        };
    },
    methods: {
        prev() {
            this.$store.commit("prevSixthCategory");
        }
    },
    computed: {
        category6_data() {
            //getting the category1 questions from the state  - module C.
            /*the all_question object's values are arrays with elements which are objects.*/
            return this.$store.state.c.all_questions.category6_questions;
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
