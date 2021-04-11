<template>
    <div class="mt-8">
        <div class="question_container mt-8 m-auto shadow-xl">
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
                            value="100"
                            class="w-4 h-4"
                            type="radio"
                            :name="'team_' + question.question_id"
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
                            class="w-4 h-4"
                            type="radio"
                            :name="'team_' + question.question_id"
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
                            class="w-4 h-4"
                            type="radio"
                            :name="'team_' + question.question_id"
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
                            class="w-4 h-4"
                            type="radio"
                            :name="'team_' + question.question_id"
                            :id="'angry_' + question.question_id"
                        /><span class="text-xl ml-1">&#128151;</span>
                        Angry</label
                    >
                </div>
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
                    @click="next"
                    class="bg-green-500 rounded-sm px-3 py-1 hover:bg-green-800 ml-4 transform duration-500 ease-in-out focus:outline-none"
                >
                    Next
                </button>
            </div>
        </div>
        <button @click="add">Add</button>
    </div>
</template>
<script>
export default {
    props: ["userData"],
    data() {
        return {
            val: "",
            cat1Answers: {}
        };
    },
    methods: {
        next() {
            this.$store.commit("nextFirstCategory");
        },
        getValue(event) {
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
            answerObject["category_id"] = category_id;
            answerObject["question_answer"] = given_answer;
            answerObject["user_id"] = this.userData.id;

            this.cat1Answers[question_name] = answerObject;

            console.log(this.cat1Answers);
        },
        add() {
            axios
                .post("/api/add", this.cat1Answers)
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    computed: {
        category1_data() {
            //getting the category1 questions from the state  - module C.
            /*the all_question object's values are arrays with elements which are objects.*/
            console.log(this.$store.state.c.all_questions.category1_questions);
            return this.$store.state.c.all_questions.category1_questions;
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
