<template>
    <div>
        <div class="text-center">
            <p class="text-center">Add new question</p>
            <div class="mt-10 text-center">
                <p>New question</p>
                <textarea
                    v-model="questionInfo.question"
                    id="w3review"
                    name="question"
                    rows="4"
                    cols="50"
                    class="p-2 bg-gray-100 focus:outline-none transition duration-500 ease-in focus:bg-green-50"
                ></textarea>
            </div>
            <div class="mt-4 text-center">
                <label for="categories">Choose category:</label>

                <select
                    class="focus:outline-none border-gray-100 w-32 focus:ring-2"
                    v-model="questionInfo.cat_val"
                    id="categories"
                >
                    <option
                        v-for="category in myCategories"
                        :key="category.id"
                        :value="category.category_id"
                        >{{ category.category_name }}</option
                    >
                </select>
            </div>
            <button
                @click.prevent="addQuestion"
                class="bg-purple-500 rounded-sm text-gray-50 p-2 hover:bg-purple-700 transition duration-500 ease-linear mt-8"
            >
                Add question
            </button>
        </div>
        <register></register>
    </div>
</template>

<script>
import Register from "./Register";
export default {
    components: {
        register: Register
    },
    data() {
        return {
            questionInfo: {
                cat_val: "",
                question: ""
            },
            allCategories: ""
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
                })
                .catch(error => {
                    console.log(error);
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
        this.$store.dispatch("addDefaultUser");
    }
};
</script>
