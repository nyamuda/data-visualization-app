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
                <!--The purpose of the following first input element is to hold
                the id value of each question. The second input element holds
                the category id of the question-->
                <input type="text" hidden :value="question.question_id" />
                <input type="text" hidden :value="question.category_id" />
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
            val: "",
            cat6Answers: {}
        };
    },
    methods: {
        prev() {
            this.$store.commit("prevSixthCategory");
        },
        getValue6(event) {
            //getting the id value of each question and its selected answer.
            //so first getting the id value of the question.
            let question_id =
                event.target.parentElement.parentElement.firstElementChild
                    .value;
            //then the selected answer to the question
            let given_answer = Number(event.target.value);

            //the question category id
            let category_id =
                event.target.parentElement.parentElement.children[1].value;
            let question_name = event.target.name;

            let answerObject = {};

            answerObject["question_id"] = question_id;
            answerObject["category_id"] = categoryid;
            answerObject["question_answer"] = given_answer;
            answerObject["user_id"] = this.userData.id;

            this.cat6Answers[question_name] = answerObject;

            console.log(this.cat1Answers);
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
