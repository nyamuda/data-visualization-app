<template>
    <div>
        <div class="text-center mt-8">
            <p class="text-center text-2xl">Add new question</p>
            <div class="mt-10 text-center">
                <p>New question</p>
                <textarea
                    :val="questionInfo.question"
                    v-model="questionInfo.question"
                    id="w3review"
                    name="question"
                    rows="4"
                    cols="50"
                    class="p-2 bg-gray-100 focus:outline-none transition duration-500 ease-in focus:bg-green-50"
                ></textarea>
                <p class="text-red-500 text-xs">{{ question_error }}</p>
            </div>
            <div class="mt-4 text-center">
                <label for="categories">Category:</label>

                <select
                    class="focus:outline-none focus:ring-2 ring-purple-400 rounded-sm shadow-md h-8 transition divide-purple-1000 ease-in-out"
                    v-model="questionInfo.cat_val"
                    id="categories"
                >
                    <option selected hidden value="">Choose here</option>
                    <option
                        v-for="category in myCategories"
                        :key="category.id"
                        :value="category.category_id"
                        >{{ category.category_name
                        }}<span> - {{ category.type }}</span></option
                    >
                </select>
                <p class="text-red-500 text-xs">{{ cat_error }}</p>
            </div>
            <button
                @click.prevent="addQuestion"
                class="bg-purple-500 rounded-sm text-gray-50 p-2 hover:bg-purple-700 transition duration-500 ease-linear mt-8"
            >
                Add question
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            questionInfo: {
                cat_val: "",
                question: ""
            },
            allCategories: "",
            question_error: "",
            cat_error: ""
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
        //getting category names from the state
        myCategories() {
            return this.$store.state.b.all_categories;
        }
    },
    created() {
        /*disptaching an action that will fetch
        all question category names from the database*/
        this.$store.dispatch("getCategoryNames");
        // this.$store.dispatch("addDefaultUser");
    }
};
</script>
