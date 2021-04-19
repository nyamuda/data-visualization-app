<template>
    <div class="my-12">
        <div class="question_container mt-8 m-auto shadow-xl">
            <div class="bg-purple-500 p-2 text-gray-100">
                <p>Mutual Support</p>
            </div>
            <div class="bg-purple-900 text-purple-300 px-2 py-1">
                <p class="text-xs">CATEGORY 4 OF 6</p>
            </div>
            <div
                class="flex justify-around flex-col bg-gray-100 px-4"
                v-for="(question, index) in category4_data"
                :key="question.id"
            >
                <hr class="border-gray-300" />
                <div class="p-2 w-auto flex flex-row">
                    <!--The Entity Number below is for space -->
                    <span>{{ index + 1 }}.&#160;&#160;</span>
                    <ul>
                        <li>{{ question.question }}</li>
                    </ul>
                </div>
                <div
                    class="flex flex-col px-4 pb-4 md:mt-4 md:flex-row md:justify-between md:-ml-2"
                >
                    <!--The purpose of the following first input element is to hold
                the id value of each question. The second input element holds
                the category id of the question-->
                    <input type="text" hidden :value="question.question_id" />
                    <input type="text" hidden :value="question.category_id" />
                    <label
                        class="flex justify-start items-center"
                        :for="'very_unhappy_' + question.question_id"
                    >
                        <input
                            @click="getValue4"
                            required
                            value="20"
                            class="cat4_radio w-4 h-4"
                            type="radio"
                            :name="'support_' + index"
                            :id="'very_unhappy_' + question.question_id"
                        /><span class="text-xl ml-1">😠</span>Very Unhappy
                    </label>
                    <label
                        class="flex justify-start items-center"
                        :for="'unhappy_' + question.question_id"
                    >
                        <input
                            @click="getValue4"
                            value="40"
                            class="cat4_radio w-4 h-4"
                            type="radio"
                            :name="'support_' + index"
                            :id="'unhappy_' + question.question_id"
                        /><span class="text-xl ml-1">😓</span>Unhappy</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'neutral_' + question.question_id"
                    >
                        <input
                            @click="getValue4"
                            value="60"
                            class="cat4_radio w-4 h-4"
                            type="radio"
                            :name="'support_' + index"
                            :id="'neutral_' + question.question_id"
                        /><span class="text-xl ml-1">😐</span>Neutral</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'happy_' + question.question_id"
                    >
                        <input
                            @click="getValue4"
                            value="80"
                            class="cat4_radio w-4 h-4"
                            type="radio"
                            :name="'support_' + index"
                            :id="'happy_' + question.question_id"
                        /><span class="text-xl ml-1">😊</span> Happy</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'very_happy_' + question.question_id"
                    >
                        <input
                            @click="getValue4"
                            value="100"
                            class="cat4_radio w-4 h-4"
                            type="radio"
                            :name="'support_' + index"
                            :id="'very_happy_' + question.question_id"
                        /><span class="text-xl ml-1">😄</span>Very Happy</label
                    >
                </div>
                <div>
                    <p
                        :id="'support_' + index"
                        class="text-red-600 text-xs -mt-6 text-center"
                    ></p>
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
            cat4Answers: {},
            countErros: 0
        };
    },
    methods: {
        mutate4() {
            this.$store.commit("nextFourthCategory");
        },
        moveNext() {
            //calling the 'next' function from the categoriesCode module.
            myMethods.next(
                "cat4_radio", //all radio button class names
                this.category4_data, //the total number of questions for this category
                "support", //the radio buttons category name
                this.countErrors, //radio buttons not checked
                this.mutate4
            );
        },
        prev() {
            this.$store.commit("prevFourthCategory");
        },
        getValue4() {
            myMethods.getAnswers(event, this.userData, this.cat4Answers);
            this.addAnswersToState();
        },
        //this will add the answers to the state by dispatching an action
        addAnswersToState() {
            this.$store.dispatch("getAnswers", this.cat4Answers);
        }
    },
    computed: {
        category4_data() {
            //getting the category1 questions from the state  - module C.
            /*the all_question object's values are arrays with elements which are objects.*/
            return this.$store.state.c.all_questions.category4_questions;
        }
    }
};
</script>

<style scoped>
.container {
    width: 90%;
}

input {
    appearance: none;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border: 2px solid #999;
    transition: 0.2s all linear;
}

input:checked {
    border: 6px solid #4b0082;
}

@media (min-width: 768px) {
    .container {
        width: 40rem;
    }
}
</style>
