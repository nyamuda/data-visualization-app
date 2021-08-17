<template>
    <div class="flex flex-col h-screen justify-between">
        <admin-header :section="section"></admin-header>
        <transition name="slide-fade">
            <div
                v-show="success"
                class="w-full flex justify-end fixed top-48 z-20"
            >
                <div
                    class=" w-1/2 md:w-1/6 flex justify-center items-center bg-green-800 absolute"
                >
                    <p class="py-3 text-gray-100">
                        {{ successMessage }}
                    </p>
                </div>
            </div>
        </transition>
        <div id="question-container" class="text-center m-auto pb-12">
            <!-- first add Survey name -->
            <form class="flex flex-col justify-center items-center w-full py-4">
                <p class="text-2xl">Add New Survey</p>
                <label
                    for="survey-name"
                    class="relative flex flex-col w-full justify-center items-center font-bold mt-2"
                >
                    Survey Name:
                    <input
                        v-model="newSurvey.surveyName"
                        id="survey-name"
                        class="input1 rounded-lg w-full md:w-3/4 bg-gray-200 focus:outline-none transition duration-300 ease-in-out h-10 px-2"
                    />
                    <span
                        class="text-xs font-normal text-red-600 absolute -bottom-4"
                        v-if="errorMessage.surveyName"
                    >
                        {{ errorMessage.surveyName[0] }}
                    </span>
                    <!--else we don't display anything-->
                    <span
                        class="text-xs font-normal text-red-600 md:absolute md:-bottom-4"
                        v-else
                    >
                    </span>
                </label>
                <button
                    @keyup.enter="addNewSurvey"
                    @click.prevent="addNewSurvey"
                    class="mt-4 md:w-1/3 w-full bg-blue-500 rounded-sm hover:bg-blue-700 flex items-center p-2 text-gray-50 outline-none ring-0 transition duration-200 ease-in-out justify-center"
                >
                    Add Survey
                </button>
            </form>
            <hr />
            <!-- second add Category name -->
            <div class="flex flex-col justify-center items-center w-full py-4">
                <p class="text-2xl">Add New Category</p>
                <label
                    class="relative flex flex-col w-full justify-center items-center font-bold md:mt-2"
                    for="survey"
                >
                    Survey Name
                    <br />
                    <select
                        class="outline-none w-full md:w-1/2 ring-1 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-100 ease-in-out p-1"
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
                        class="text-xs font-normal text-red-600 absolute -bottom-4"
                        v-if="errorMessage.survey_id"
                    >
                        {{ errorMessage.survey_id[0] }}
                    </span>
                    <!--else we don't display anything-->
                    <span
                        class="text-xs font-normal text-red-600 md:absolute md:-bottom-4"
                        v-else
                    >
                    </span>
                </label>
                <label
                    for="survey-name"
                    class="relative flex flex-col w-full justify-center items-center font-bold mt-2"
                >
                    Category Name
                    <input
                        id="survey-name"
                        v-model="newCategory.categoryName"
                        class="input1 rounded-lg w-full md:w-3/4 bg-gray-200 focus:outline-none transition duration-300 ease-in-out h-10 px-2"
                    />
                    <span
                        class="text-xs font-normal text-red-600 absolute -bottom-4"
                        v-if="errorMessage.categoryName"
                    >
                        {{ errorMessage.categoryName[0] }}
                    </span>
                    <!--else we don't display anything-->
                    <span
                        class="text-xs font-normal text-red-600 md:absolute md:-bottom-4"
                        v-else
                    >
                    </span>
                </label>
                <label
                    for="question"
                    class="relative flex flex-col w-full justify-center items-center font-bold mt-2"
                >
                    Category Description
                    <textarea
                        :val="newCategory.categoryDescription"
                        v-model="newCategory.categoryDescription"
                        id="question"
                        name="question"
                        rows="4"
                        cols="50"
                        class="p-2 input1 w-full md:w-3/4 bg-gray-200 focus:outline-none transition duration-200 ease-in-out"
                    ></textarea>
                    <span
                        class="text-xs font-normal text-red-600 absolute -bottom-4"
                        v-if="errorMessage.categoryDescription"
                    >
                        {{ errorMessage.categoryDescription[0] }}
                    </span>
                    <!--else we don't display anything-->
                    <span
                        class="text-xs font-normal text-red-600 md:absolute md:-bottom-4"
                        v-else
                    >
                    </span>
                </label>
                <button
                    @keyup.enter="addNewCategory"
                    @click.prevent="addNewCategory"
                    class=" md:w-1/3 w-full bg-blue-500 rounded-sm hover:bg-blue-700 flex items-center p-2 text-gray-50 outline-none ring-0 transition duration-200 ease-in-out justify-center mt-4"
                >
                    Add Category
                </button>
            </div>

            <hr />
            <div class="text-center py-4">
                <p class="text-2xl">Add New Question</p>
                <div>
                    <label
                        class=" relative flex flex-col w-full justify-center items-center font-bold mt-3"
                        for="category-name"
                    >
                        Survey Name
                        <br />
                        <select
                            class="outline-none w-full md:w-1/2 ring-1 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-100 ease-in-out p-1"
                            name="category-name"
                            id="category-name"
                            v-model="newQuestion.survey_type_id"
                            @change="getSurveyCategories"
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
                            class="text-xs font-normal text-red-600 absolute -bottom-4"
                            v-if="errorMessage.survey_type_id"
                        >
                            {{ errorMessage.survey_type_id[0] }}
                        </span>
                        <!--else we don't display anything-->
                        <span
                            class="text-xs font-normal text-red-600 md:absolute md:-bottom-4"
                            v-else
                        >
                        </span>
                    </label>
                </div>
                <div>
                    <label
                        class=" relative flex flex-col w-full justify-center items-center font-bold mt-3"
                        for="category-name"
                    >
                        Category Name
                        <br />
                        <select
                            class="outline-none w-full md:w-1/2 ring-1 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-100 ease-in-out p-1"
                            name="category-name"
                            id="category-name"
                            v-model="newQuestion.category_id"
                        >
                            <option value="">--Choose an option--</option>
                            <option
                                v-for="(category, idx) in allSurveyCategories"
                                :key="idx"
                                :value="category.category_id"
                                >{{ category.category_name }}</option
                            >
                        </select>
                        <span
                            class="text-xs font-normal text-red-600 absolute -bottom-4"
                            v-if="errorMessage.category_id"
                        >
                            {{ errorMessage.category_id[0] }}
                        </span>
                        <!--else we don't display anything-->
                        <span
                            class="text-xs font-normal text-red-600 md:absolute md:-bottom-4"
                            v-else
                        >
                        </span>
                    </label>
                </div>
                <div>
                    <label
                        class=" relative flex flex-col w-full justify-center items-center font-bold mt-3"
                        for="category-name"
                    >
                        Question Type
                        <br />
                        <select
                            class="outline-none ring-1 w-full md:w-1/2 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-100 ease-in-out p-1"
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
                            class="text-xs font-normal text-red-600 absolute -bottom-4"
                            v-if="errorMessage.question_type_id"
                        >
                            {{ errorMessage.question_type_id[0] }}
                        </span>
                        <!--else we don't display anything-->
                        <span
                            class="text-xs font-normal text-red-600 md:absolute md:-bottom-4"
                            v-else
                        >
                        </span>
                    </label>
                </div>
                <label
                    for="question"
                    class="relative flex flex-col w-full justify-center items-center font-bold mt-3"
                >
                    Question
                    <textarea
                        :val="newQuestion.question"
                        v-model="newQuestion.question"
                        id="question"
                        name="question"
                        rows="4"
                        cols="50"
                        class="p-2 input1 w-full md:w-3/4 bg-gray-200 focus:outline-none transition duration-200 ease-in-out"
                    ></textarea>
                    <span
                        class="text-xs font-normal text-red-600 absolute -bottom-4"
                        v-if="errorMessage.question"
                    >
                        {{ errorMessage.question[0] }}
                    </span>
                    <!--else we don't display anything-->
                    <span
                        class="text-xs font-normal text-red-600 md:absolute md:-bottom-4"
                        v-else
                    >
                    </span>
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
        <p>{{ newQuestion }}</p>
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
            success: false,
            successMessage: "",
            questionInfo: {
                cat_val: "",
                question: ""
            },
            newSurvey: {
                surveyName: ""
            },
            newCategory: {
                categoryName: "",
                survey_id: "",
                categoryyDescription: ""
            },
            newQuestion: {
                question: "",
                category_id: "",
                question_type_id: "",
                survey_type_id: ""
            },
            allSurveyCategories: "",
            section: "Add Survey Questions",
            errorMessage: ""
        };
    },
    methods: {
        //adding a new question to the database
        addNewSurvey() {
            axios
                .post("/api/add_survey", this.newSurvey)
                .then(res => {
                    this.successMessage = "Survey Successully Added";
                    this.success = !this.success;
                    this.hideSuccess();
                    this.newSurvey.surveyName = "";

                    /*disptaching an action that will fetch
        all survey names and category names from the database - module B*/
                    this.$store.dispatch("getNames");

                    this.errorMessage = "";
                })
                .catch(error => {
                    this.errorMessage = error.response.data.errors;
                });
        },
        addNewCategory() {
            axios
                .post("/api/add_category", this.newCategory)
                .then(res => {
                    this.successMessage = "Category Successully Added";
                    this.success = !this.success;
                    this.hideSuccess();
                    this.newCategory.categoryName = "";
                    this.newCategory.survey_id = "";
                    this.newCategory.categoryDescription = "";

                    /*disptaching an action that will fetch
        all survey names and category names from the database - module B*/

                    this.$store.dispatch("getNames");

                    this.errorMessage = "";
                })
                .catch(error => {
                    this.errorMessage = error.response.data.errors;
                });
        },
        addNewQuestion() {
            axios
                .post("/api/add_question", this.newQuestion)
                .then(res => {
                    this.successMessage = "Question Successully Added";
                    this.success = !this.success;
                    this.hideSuccess();
                    this.newQuestion.question = "";
                    this.newQuestion.category_id = "";
                    this.newQuestion.question_type_id = "";
                    /*disptaching an action that will fetch
        all survey names and category names from the database - module B*/
                    this.$store.dispatch("getNames");

                    this.errorMessage = "";
                })
                .catch(error => {
                    // console.log(error.response.data.errors.question.shift());

                    this.errorMessage = error.response.data.errors;
                });
        },
        hideSuccess() {
            setTimeout(() => {
                this.success = !this.success;
            }, 3000);
        },
        //getting all the categories under the selected survey
        getSurveyCategories() {
            let the_survey_id = this.newQuestion.survey_type_id;
            //if the selected value is not an empty string.
            if (!!the_survey_id) {
                axios
                    .post("/api/survey_categories", { the_survey_id })
                    .then(res => {
                        console.log(res);
                        /*If there are no categories under the selected survey, and 
                        if another category had already been previously selected under
                        a different survey name, the category_id of the previously selected
                        category doesn't change but the select field will be 
                        empty (since there are no categories under the selected survey name). 
                        Hence if we don't get any categories from the new survey name, we assign the 'category_id' property
                        an empty string. Else we assign all the fetched categories. */
                        res.data.length == 0
                            ? //assign the category_id property an empty string.
                              (this.newQuestion.category_id = "")
                            : //else we display the new categories
                              (this.allSurveyCategories = res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
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
        all survey names and question type names from the database - module B*/
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
select {
    text-align-last: center;
}

textarea:focus {
    border: none;
}
.slide-fade-enter-active {
    transition: all 0.5s ease;
}

.slide-fade-leave-active {
    transition: all 0.8s ease-in-out;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(20px);
    opacity: 0;
}
@media (min-width: 768px) {
    #question-container {
        width: 40rem;
    }
}
</style>
