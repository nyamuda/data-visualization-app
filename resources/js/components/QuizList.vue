<template>
    <div>
        <div>
            <p
                @click="goToQuiz"
                class="hover:bg-red-500"
                :id="category.category_id"
                v-for="category in pendingQuiz"
                :key="category.id"
            >
                {{ category.category_name }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        goToQuiz(event) {
            let cat_id = Number(event.target.id);

            this.$router.push("quiz/" + cat_id);
        }
    },
    computed: {
        pendingQuiz() {
            return this.$store.state.c.all_categories;
        },
        quizQuestions() {
            return this.$store.state.c.all_questions;
        }
    },
    created() {
        this.$store.dispatch("getCategories");
    }
};
</script>
