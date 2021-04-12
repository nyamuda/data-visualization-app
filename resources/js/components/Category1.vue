<template>
    <div class="mt-8">
        <form class="question_container mt-8 m-auto shadow-xl">
            <div class="bg-blue-500 p-2 text-gray-100">
                <p>Equitable Treatment</p>
            </div>

            <div class="bg-blue-900 text-blue-300 px-2 py-1">
                <p class="text-xs">CATEGORY 1 OF 5</p>
            </div>

            <div
                class="flex justify-around flex-col bg-gray-100 px-4"
                v-for="(question, index) in category1_data"
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
                            @click="getValue"
                            required="required"
                            value="100"
                            class="cat1_input w-4 h-4"
                            type="radio"
                            :name="'team_' + index"
                            :id="'happy_' + question.question_id"
                        /><span class="text-xl ml-1">&#128512;</span>
                        Happy</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'good_' + question.question_id"
                    >
                        <input
                            @click="getValue"
                            value="50"
                            class="cat1_input w-4 h-4"
                            type="radio"
                            :name="'team_' + index"
                            :id="'good_' + question.question_id"
                        /><span class="text-xl ml-1">&#128516;</span>
                        Good</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'not-happy_' + question.question_id"
                    >
                        <input
                            @click="getValue"
                            value="25"
                            class="cat1_input w-4 h-4"
                            type="radio"
                            :name="'team_' + index"
                            :id="'not-happy_' + question.question_id"
                        /><span class="text-xl ml-1">&#128525;</span>Not
                        happy</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'angry_' + question.question_id"
                    >
                        <input
                            @click="getValue"
                            value=""
                            class="cat1_input w-4 h-4"
                            type="radio"
                            :name="'team_' + index"
                            :id="'angry_' + question.question_id"
                        /><span class="text-xl ml-1">&#128151;</span>
                        Angry</label
                    >
                </div>
                <p :id="'team_' + index" class="text-red-600 text-xs mt-0"></p>
            </div>
            <div
                class="flex justify-center bg-blue-500 text-gray-100 items-center h-12"
            >
                <button
                    class="bg-green-300 px-3 py-1 hover:bg-green-300 mr-4 transform duration-500 ease-in-out focus:outline-none rounded-sm"
                >
                    Prev
                </button>
                <button
                    @click.prevent="moveNext"
                    class="bg-green-500 rounded-sm px-3 py-1 hover:bg-green-800 ml-4 transform duration-500 ease-in-out focus:outline-none"
                >
                    Next
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import * as myMethods from "./categoriesCode";
export default {
    props: ["userData"],
    data() {
        return {
            val: "",
            cat1Answers: {},
            countErrors: 0
        };
    },
    methods: {
        /*the following fuction invokes a mutation that will take us to the next category of questions.*/
        mutate1() {
            this.$store.commit("nextFirstCategory");
        },
        moveNext() {
            //calling the 'next' function from the categoriesCode module.
            myMethods.next(
                "cat1_input", //all radio button class names
                this.category1_data, //the total number of questions for this category
                "team", //the radio buttons category name
                this.countErrors, //radio buttons not checked
                this.mutate1
            );
        },

        //get all the selected all answers
        getValue() {
            //calling the 'getAnswers' function for the categoriesCode module.
            myMethods.getAnswers(event, this.userData, this.cat1Answers);
            this.addAnswersToState();
        },
        //this will add the answers to the state by dispatching an action
        addAnswersToState() {
            this.$store.dispatch("getAnswers", this.cat1Answers);
            console.log(this.$store.state.d.all_answers);
        },

        add() {}
    },
    computed: {
        category1_data() {
            //getting the category1 questions from the state  - module C.
            /*the all_question object's values are arrays with elements which are objects.*/
            let the_questions = this.$store.state.c.all_questions
                .category1_questions;
            return the_questions;
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
