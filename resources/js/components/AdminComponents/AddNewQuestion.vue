<template>
    <div class="flex flex-col h-screen justify-between">
        <admin-header :section="section"></admin-header>
        <div id="question-container" class="text-center m-auto">
            <!-- first add Survey name -->
            <div class="flex flex-col justify-center items-center w-full">
                <p class="text-2xl">Add New Survey</p>
                <label
                    for="survey-name"
                    class="flex flex-col w-full justify-center items-center"
                >
                    Survey Name:
                    <input
                        v-model="newSurvey"
                        id="survey-name"
                        class="input1 rounded-lg w-full md:w-3/4 bg-gray-200 focus:outline-none transition duration-300 ease-in-out h-10 px-2"
                    />
                </label>
                <button
                    @keyup.enter="addNewSurvey"
                    @click.prevent="addNewSurvey"
                    class="md:w-1/3 w-full bg-blue-500 rounded-sm hover:bg-blue-700 flex items-center p-2 text-gray-50 outline-none ring-0 transition duration-200 ease-in-out justify-center"
                >
                    Add Survey
                </button>
            </div>
            <!-- second add Category name -->
            <div class="flex flex-col justify-center items-center w-full">
                <p class="text-2xl">Add New Category</p>
                <label
                    class="flex flex-col w-full justify-center items-center"
                    for="survey"
                >
                    Survey
                    <br />
                    <select
                        class="outline-none w-full md:w-3/4 ring-1 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-100 ease-in-out p-1"
                        name="survey"
                        id="survey"
                        v-model="newCategory.survey_id"
                    >
                        <option value="">--Choose an option--</option>
                        <option
                            v-for="(survey, idx) in myNames.survey_names"
                            :key="idx"
                            :value="survey.id"
                            >{{ survey.survey_type_name }}</option
                        >
                    </select>
                    <span
                        class="text-xs text-red-600 md:absolute md:-bottom-4"
                        v-if="errorMessage"
                    >
                        {{ errorMessage }}
                    </span>
                    <!--else we don't display anything-->
                    <span
                        class="text-xs text-red-600 md:absolute md:-bottom-4"
                        v-else
                    >
                    </span>
                </label>
                <label
                    for="survey-name"
                    class="flex flex-col w-full justify-center items-center"
                >
                    Category Name:
                    <input
                        id="survey-name"
                        v-model="newCategory.categoryName"
                        class="input1 rounded-lg w-full md:w-3/4 bg-gray-200 focus:outline-none transition duration-300 ease-in-out h-10 px-2"
                    />
                </label>
                <button
                    @keyup.enter="addNewCategory"
                    @click.prevent="addNewCategory"
                    class=" md:w-1/3 w-full bg-blue-500 rounded-sm hover:bg-blue-700 flex items-center p-2 text-gray-50 outline-none ring-0 transition duration-200 ease-in-out justify-center"
                >
                    Add Category
                </button>
            </div>
            <div class="mt-10 text-center">
                <p class="text-2xl">New question</p>
                <div>
                    <label
                        class=" relative flex flex-col w-full justify-center items-center"
                        for="category-name"
                    >
                        Category
                        <br />
                        <select
                            class="outline-none w-full md:w-3/4 ring-1 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-100 ease-in-out p-1"
                            name="category-name"
                            id="category-name"
                            v-model="newQuestion.category_id"
                        >
                            <option value="">--Choose an option--</option>
                            <option
                                v-for="(category,
                                idx) in myNames.category_names"
                                :key="idx"
                                :value="category.category_id"
                                >{{ category.category_name }}</option
                            >
                        </select>
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-if="errorMessage"
                        >
                            {{ errorMessage }}
                        </span>
                        <!--else we don't display anything-->
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-else
                        >
                        </span>
                    </label>
                </div>
                <div>
                    <label
                        class=" relative flex flex-col w-full justify-center items-center"
                        for="category-name"
                    >
                        Question Type
                        <br />
                        <select
                            class="outline-none ring-1 w-full md:w-3/4 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-100 ease-in-out p-1"
                            name="category-name"
                            id="category-name"
                            v-model="newQuestion.question_type_id"
                        >
                            <option value="">--Choose an option--</option>
                            <option
                                v-for="(question_type,
                                idx) in myNames.question_type_names"
                                :key="idx"
                                :value="question_type.question_type_id"
                                >{{ question_type.question_type_name }}</option
                            >
                        </select>
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-if="errorMessage"
                        >
                            {{ errorMessage }}
                        </span>
                        <!--else we don't display anything-->
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-else
                        >
                        </span>
                    </label>
                </div>
                <label
                    for="question"
                    class="flex flex-col w-full justify-center items-center"
                >
                    Question:
                    <textarea
                        :val="questionInfo.question"
                        v-model="questionInfo.question"
                        id="question"
                        name="question"
                        rows="4"
                        cols="50"
                        class="p-2 input1 w-full md:w-3/4 bg-gray-200 focus:outline-none transition duration-500 ease-in focus:bg-green-50"
                    ></textarea>
                </label>
            </div>

            <div class="w-full flex flex-col justify-center items-center">
                <button
                    @keyup.enter="addNewQuestion"
                    @click.prevent="addNewQuestion"
                    class="bg-blue-500 w-full md:w-1/3 rounded-sm hover:bg-blue-700 flex items-center p-2 text-gray-50 outline-none ring-0 transition duration-200 ease-in-out justify-center"
                >
                    Add Survey
                </button>
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
export default {
    components: {
        "admin-header": AdminHeader,
        "the-footer": Footer
    },
    data() {
        return {
            questionInfo: {
                cat_val: "",
                question: ""
            },
            newSurvey: "",
            newCategory: {
                categoryName: "",
                survey_id: ""
            },
            newQuestion: {
                question: "",
                category_id: "",
                question_type_id: ""
            },
            allCategories: "",
            question_error: "",
            cat_error: "",
            section: "Add Survery Questions",
            errorMessage: ""
        };
    },
    methods: {
        //adding a new question to the database
        addQuestion() {
            axios
                .post("/api/add_question", this.questionInfo)
                .then(res => {
                    console.log(res);
                    // this.$router.push({ name: "dashboard" });
                    this.questionInfo.question = "";
                    this.question_error = "";
                    this.cat_error = "";
                })
                .catch(error => {
                    // console.log(error.response.data.errors.question.shift());

                    this.question_error = error.response.data.errors.question.shift();
                    this.cat_error = error.response.data.errors.cat_val.shift();
                });
        }
    },
    computed: {
        //getting category names from the state - module B
        myNames() {
            return this.$store.state.b.all_names;
        }
    },
    created() {
        /*disptaching an action that will fetch
        all survey names and category names from the database - module B*/
        this.$store.dispatch("getNames");
        // this.$store.dispatch("addDefaultUser");
        //admin info
        this.$store.dispatch("getAuthenticatedUserInfo");
    }
};
</script>

<style scoped>
#question-container {
    width: 95%;
}
@media (min-width: 768px) {
    #question-container {
        width: 40rem;
        border: 1px solid;
    }
}
</style>
