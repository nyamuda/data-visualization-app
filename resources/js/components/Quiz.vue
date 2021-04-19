<template>
    <div class="mt-8 mb-12">
        <div class="question_container mt-8 m-auto shadow-xl">
            <div class="bg-purple-500 p-2 text-gray-100">
                <p>Quiz</p>
            </div>
            <div class="bg-purple-900 text-purple-300 px-2 py-1">
                <p class="text-xs">CATEGORY 6 OF 6</p>
            </div>
            <div
                class="flex justify-around flex-col bg-gray-100 px-4"
                v-for="(question, index) in category_data"
                :key="question.id"
            >
                <hr class="border-gray-300" />
                <!-- If the question type is open ended -->
                <div class="mb-4" v-if="question.type == 'Open Ended'">
                    <div class="p-2 w-auto flex flex-row">
                        <!--The Entity Number below is for space -->
                        <span>{{ index + 1 }}.&#160;&#160;</span>
                        <ul>
                            <li>{{ question.question }}</li>
                        </ul>
                    </div>

                    <div class="flex flex-col items-start ml-4">
                        <!--The purpose of the following first input element is to hold
                the id value of each question. The second input element holds
                the category id of the question-->
                        <input
                            type="text"
                            hidden
                            :value="question.question_id"
                        />
                        <input
                            type="text"
                            hidden
                            :value="question.category_id"
                        />
                        <!--All text area questions(open-ended) have a class name of open-ended -->
                        <textarea
                            required
                            :id="'open_' + question.question_id"
                            :name="'quiz_' + question.question_id"
                            rows="4"
                            cols="50"
                            class="open-ended w-5/6 p-2 bg-gray-200 focus:outline-none transition duration-500 ease-in focus:bg-green-100"
                        ></textarea>
                        <div>
                            <p
                                :id="'quiz_' + question.question_id"
                                class="text-red-600 text-xs text-center mt-4"
                            ></p>
                        </div>
                    </div>
                </div>
                <!-- If the question type is a scale -->
                <div
                    class="mb-4 flex flex-col justify-around"
                    v-else-if="question.type == 'Scale'"
                >
                    <!--The purpose of the following first input element is to hold
                the id value of each question. The second input element holds
                the category id of the question-->
                    <input type="text" hidden :value="question.question_id" />
                    <input type="text" hidden :value="question.category_id" />
                    <div class="p-2 w-auto flex flex-row">
                        <!--The Entity Number below is for space -->
                        <span>{{ index + 1 }}.&#160;&#160;</span>
                        <ul>
                            <li>{{ question.question }}</li>
                        </ul>
                    </div>
                    <div class="my-scale relative m-auto">
                        <input
                            type="text"
                            hidden
                            :value="question.question_id"
                        />
                        <input
                            type="text"
                            hidden
                            :value="question.category_id"
                        />
                        <div
                            class="flex justify-between flex-wrap text-gray-500 text-sm"
                        >
                            <p>0 = Not likely at all</p>
                            <p>10 = Extremely likely</p>
                        </div>
                        <div class="flex justify-evenly flex-wrap">
                            <input
                                @click="buttonClicked"
                                :name="'quiz_' + index"
                                class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-red-700 focus:outline-none appearance-none bg-red-700 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-red-700 transition duration-500 ease-in-out"
                                type="button"
                                value="0"
                            />
                            <input
                                @click="buttonClicked"
                                :name="'quiz_' + index"
                                class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-red-600 focus:outline-none appearance-none bg-red-600 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-red-600 transition duration-500 ease-in-out"
                                type="button"
                                value="1"
                            />
                            <input
                                @click="buttonClicked"
                                :name="'quiz_' + index"
                                class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-red-500 focus:outline-none appearance-none bg-red-500 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-red-500 transition duration-500 ease-in-out"
                                type="button"
                                value="2"
                            />
                            <input
                                @click="buttonClicked"
                                :name="'quiz_' + index"
                                class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-yellow-700 focus:outline-none appearance-none bg-yellow-700 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-yellow-700 transition duration-500 ease-in-out"
                                type="button"
                                value="3"
                            />
                            <input
                                @click="buttonClicked"
                                :name="'quiz_' + index"
                                class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-yellow-600 focus:outline-none appearance-none bg-yellow-600 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-yellow-600 transition duration-500 ease-in-out"
                                type="button"
                                value="4"
                            />
                            <input
                                @click="buttonClicked"
                                :name="'quiz_' + index"
                                class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-yellow-500 focus:outline-none appearance-none bg-yellow-500 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-yellow-500 transition duration-500 ease-in-out"
                                type="button"
                                value="5"
                            />
                            <input
                                @click="buttonClicked"
                                :name="'quiz_' + index"
                                class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-yellow-400 focus:outline-none appearance-none bg-yellow-400 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-yellow-400 transition duration-500 ease-in-out"
                                type="button"
                                value="6"
                            />
                            <input
                                @click="buttonClicked"
                                :name="'quiz_' + index"
                                class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-green-400 focus:outline-none appearance-none bg-green-400 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-green-400 transition duration-500 ease-in-out"
                                type="button"
                                value="7"
                            />
                            <input
                                @click="buttonClicked"
                                :name="'quiz_' + index"
                                class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-green-500 focus:outline-none appearance-none bg-green-500 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-green-500 transition duration-500 ease-in-out"
                                type="button"
                                value="8"
                            />
                            <input
                                @click="buttonClicked"
                                :name="'quiz_' + index"
                                class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-green-600 focus:outline-none appearance-none bg-green-600 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-green-600 transition duration-500 ease-in-out"
                                type="button"
                                value="9"
                            />
                            <input
                                @click="buttonClicked"
                                :name="'quiz_' + index"
                                class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-green-700 focus:outline-none appearance-none bg-green-700 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-green-700 transition duration-500 ease-in-out"
                                type="button"
                                value="10"
                            />
                        </div>
                    </div>
                    <div>
                        <p
                            :id="'quiz_' + index"
                            class="text-red-600 text-xs text-center"
                        ></p>
                    </div>
                </div>
                <!-- If the question type is multiple choice -->
                <div
                    class="mb-4 flex flex-col justify-around"
                    v-else-if="question.type == 'Multiple Choice'"
                >
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
                        <input
                            type="text"
                            hidden
                            :value="question.question_id"
                        />
                        <input
                            type="text"
                            hidden
                            :value="question.category_id"
                        />
                        <label
                            class="flex justify-start items-center"
                            :for="'very_unhappy_' + question.question_id"
                        >
                            <input
                                @click="radioClicked"
                                required="required"
                                value="20"
                                class="cat_input w-4 h-4"
                                type="radio"
                                :name="'quiz_' + index"
                                :id="'very_unhappy_' + question.question_id"
                            /><span class="text-xl ml-1">😠</span>Very Unhappy
                        </label>
                        <label
                            class="flex justify-start items-center"
                            :for="'unhappy_' + question.question_id"
                        >
                            <input
                                @click="radioClicked"
                                value="40"
                                class="cat_input w-4 h-4"
                                type="radio"
                                :name="'quiz_' + index"
                                :id="'unhappy_' + question.question_id"
                            /><span class="text-xl ml-1">😓</span>Unhappy</label
                        >
                        <label
                            class="flex justify-start items-center"
                            :for="'neutral_' + question.question_id"
                        >
                            <input
                                @click="radioClicked"
                                value="60"
                                class="cat_input w-4 h-4"
                                type="radio"
                                :name="'quiz_' + index"
                                :id="'neutral_' + question.question_id"
                            /><span class="text-xl ml-1">😐</span>Neutral</label
                        >
                        <label
                            class="flex justify-start items-center"
                            :for="'happy_' + question.question_id"
                        >
                            <input
                                @click="radioClicked"
                                value="80"
                                class="cat_input w-4 h-4"
                                type="radio"
                                :name="'quiz_' + index"
                                :id="'happy_' + question.question_id"
                            /><span class="text-xl ml-1">😊</span> Happy</label
                        >
                        <label
                            class="flex justify-start items-center"
                            :for="'very_happy_' + question.question_id"
                        >
                            <input
                                @click="radioClicked"
                                value="100"
                                class="cat_input w-4 h-4"
                                type="radio"
                                :name="'quiz_' + index"
                                :id="'very_happy_' + question.question_id"
                            /><span class="text-xl ml-1">😄</span>Very
                            Happy</label
                        >
                    </div>
                    <div>
                        <p
                            :id="'quiz_' + index"
                            class="text-red-600 text-xs text-center"
                        ></p>
                    </div>
                </div>
            </div>
            <div
                class="flex justify-center bg-purple-500 text-gray-100 items-center h-10"
            >
                <button
                    @click="submitQuiz"
                    class="bg-red-500 rounded-sm px-3 py-1 hover:bg-red-800 ml-4 transform duration-500 ease-in-out focus:outline-none"
                >
                    Submit
                </button>
            </div>
        </div>
        <Modal
            :toggleModal="toggleModal"
            :showModal="showModal"
            :storeAllAnswers="storeAllAnswers"
        ></Modal>
    </div>
</template>

<script>
import * as myMethods from "./categoriesCode";
import Modal from "./Modal";
export default {
    components: {
        Modal
    },
    data() {
        return {
            val: "",
            categoryAnswers: {},
            dat: {},
            answerObject: {},
            countErrors: 0,
            scaleAnswers: {},
            showModal: false
        };
    },
    methods: {
        getScaleAnswers() {},

        /*This function determines what happens when the user clicks one of the input buttons.
    It handles questions about 'Scale' meaning there will be ten buttons, each with its only
    value. The purpose is to show visually the clicked button, add a checked attribute to it and
    disable all other buttons at the same time in case the user has already clicked another
    button and is now clicking a different one. It also gets the value of the button clicked.
    */
        buttonClicked(event) {
            event.target.checked = "checked";
            event.target.classList.add("ring-2");
            event.target.classList.add("ring-opacity-50");
            event.target.classList.add("ring-offset-2");
            event.target.classList.add("ring-gray-900");
            //getting all the inputs
            let all_inputs = [...document.getElementsByClassName("cat_input")];

            /*getting only those inputs with the same name as the clicked input (meaning they belong to the same question)
      but not including the clicked input.*/
            let all_buttons = all_inputs.filter(val => {
                return (
                    val.name == event.target.name &&
                    val.value != event.target.value
                );
            });
            //And then disabling the checked attribute and other classes for those inputs.
            // console.log(all_buttons)
            all_buttons.forEach(val => {
                val.checked = false;
                val.classList.remove("ring-2");
                val.classList.remove("ring-opacity-50");
                val.classList.remove("ring-offset-2");
                val.classList.remove("ring-gray-900");
            });

            /*getting the value of the clicked buttoon using the getAnswers Method.*/
            myMethods.getAnswers(event, this.userData, this.categoryAnswers);
        },
        //get the answers when a radio button is clicked
        radioClicked(event) {
            //calling the 'getAnswers' function for the categoriesCode module.
            myMethods.getAnswers(event, this.userData, this.categoryAnswers);
        },
        /* The following function checks for the total number of questions that
    are either multiple choice or scale. Its only these types of questions that
    we can check using the next() method whether a user has answered them or not.*/
        numberChecked() {
            //looping the category_data
            return this.category_data.filter(val => {
                return val.type == "Multiple Choice" || val.type == "Scale";
            });
        },
        prev() {
            this.$store.commit("prevSixthCategory");
        },
        submitQuiz() {
            /*calling the 'next' function from the categoriesCode module.
      For a full understanding of the 'next' function and how it works,
      please check the categoriesCode.js module
      */
            myMethods.next(
                "cat_input", //all radio button class names
                this.numberChecked(), //the total number of questions tha can be checked
                "quiz", //the radio buttons category name
                this.countErrors, //radio buttons not checked
                this.runOpen //function that will run if there are no errors
            );
        },

        runOpen() {
            /* Running the checkOpen function which check if all open ended questions have been answered.
            For a full understanding of the 'next' function and how it works, please check the categoriesCode.js module.*/
            console.log("hey you");
            myMethods.checkOpen(
                this.countErrors,
                "open-ended",
                this.addAnswersToState,
                this.userData,
                this.categoryAnswers
            );
        },

        /*The following function is the one that will run, if all the questions have been answered */
        addAnswersToState() {
            //this will add the answers to the state by dispatching an action
            this.$store.dispatch("getAnswers", this.categoryAnswers);
            this.toggleModal();
        },
        toggleModal() {
            this.showModal = !this.showModal;
        },
        //store the answers to the database
        storeAllAnswers() {
            this.$store.dispatch("saveAnswers");
            this.$router.push({ name: "dashboard" });
        }
    },
    computed: {
        category_data() {
            //getting the category questions from the state  - module C.
            let category_id = this.$route.params.id;
            return this.$store.getters.surveyQuestions(category_id);
        },
        userData() {
            return this.$store.state.c.loggedInUserInfo;
        }
    },
    created() {
        this.$store.dispatch("getSurveyQuestions");
    }
};
</script>

<style scoped>
.my-scale {
    width: 90%;
}

.question_container {
    width: 90%;
}

@media (min-width: 640px) {
    .my-scale {
        width: 80%;
    }
}

@media (min-width: 768px) {
    .question_container {
        width: 50rem;
    }
    .my-scale {
        width: 40rem;
    }
}
</style>
