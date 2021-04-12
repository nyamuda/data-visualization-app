<template>
    <div class="mt-8">
        <div class="question_container mt-8 m-auto shadow-xl">
            <div class="bg-purple-500 p-2 text-gray-100">
                <p>Organizational Belonging</p>
            </div>

            <div class="bg-purple-900 text-purple-300 px-2 py-1">
                <p class="text-xs">CATEGORY 5 OF 6</p>
            </div>

            <div
                class="flex justify-around flex-col bg-gray-100 px-4"
                v-for="(question, index) in category5_data"
                :key="question.id"
            >
                <hr class="border-gray-300" />

                <p class="p-2 w-auto">
                    {{ index + 1 }}. {{ question.question }}
                </p>
                <div
                    class="flex flex-col px-4 pb-4 md:mt-4 md:flex-row md:justify-between"
                >
                    <!--The purpose of the following first input element is to hold
                the id value of each question. The second input element holds
                the category id of the question-->
                    <input type="text" hidden :value="question.question_id" />
                    <input type="text" hidden :value="question.category_id" />
                    <label
                        class="flex justify-start items-center"
                        :for="'happy_' + question.question_id"
                    >
                        <input
                            @click="getValue5"
                            class="cat5_radio w-4 h-4"
                            type="radio"
                            :name="'belonging_' + index"
                            :id="'happy_' + question.question_id"
                        /><span class="text-xl ml-1">&#128512;</span>
                        Happy</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'good_' + question.question_id"
                    >
                        <input
                            @click="getValue5"
                            class="cat5_radio w-4 h-4"
                            type="radio"
                            :name="'belonging_' + index"
                            :id="'good_' + question.question_id"
                        /><span class="text-xl ml-1">&#128516;</span>
                        Good</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'not-happy_' + question.question_id"
                    >
                        <input
                            @click="getValue5"
                            class="cat5_radio w-4 h-4"
                            type="radio"
                            :name="'belonging_' + index"
                            :id="'not-happy_' + question.question_id"
                        /><span class="text-xl ml-1">&#128525;</span>Not
                        happy</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'angry_' + question.question_id"
                    >
                        <input
                            @click="getValue5"
                            class="cat5_radio w-4 h-4"
                            type="radio"
                            :name="'belonging_' + index"
                            :id="'angry_' + question.question_id"
                        /><span class="text-xl ml-1">&#128151;</span>
                        Angry</label
                    >
                </div>
                <p
                    :id="'belonging_' + index"
                    class="text-red-600 text-xs mt-0"
                ></p>
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
                    @click="moveNext"
                    class="bg-red-500 px-3 py-1 hover:bg-red-800 mr-4 transform duration-500 ease-in-out focus:outline-none rounded-sm"
                >
                    Next
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import * as myMethods from "./categoriesCode";
export default {
    props: ["userData"],
    data() {
        return {
            val: "",
            cat5Answers: {},
            countErros: 0
        };
    },
    methods: {
        mutate5() {
            this.$store.commit("nextFifthCategory");
        },
        moveNext() {
            //calling the 'next' function from the categoriesCode module.
            myMethods.next(
                "cat5_radio", //all radio button class names
                this.category5_data, //the total number of questions for this category
                "belonging", //the radio buttons category name
                this.countErrors, //radio buttons not checked
                this.mutate5
            );
        },
        prev() {
            this.$store.commit("prevFifthCategory");
        },
        getValue5() {
            myMethods.getAnswers(event, this.userData, this.cat5Answers);
            this.addAnswersToState();
        },
        //this will add the answers to the state by dispatching an action
        addAnswersToState() {
            this.$store.dispatch("getAnswers", this.cat5Answers);
        }
    },
    computed: {
        category5_data() {
            //getting the category1 questions from the state  - module C.
            /*the all_question object's values are arrays with elements which are objects.*/
            return this.$store.state.c.all_questions.category5_questions;
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
