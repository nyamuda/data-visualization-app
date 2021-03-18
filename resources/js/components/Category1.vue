<template>
    <div class="mt-8">
        <div class="container mt-8 m-auto shadow-xl">
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

                <p class="p-2 w-auto">{{ index + 1 }}. {{ question.title }}</p>
                <div
                    class="flex flex-col px-4 pb-4 md:mt-4 md:flex-row md:justify-between"
                >
                    <label
                        class="flex justify-start items-center"
                        :for="'happy_' + question.title_id"
                    >
                        <input
                            value="100"
                            class="w-4 h-4"
                            type="radio"
                            :name="'team_' + question.title_id"
                            :id="'happy_' + question.title_id"
                        /><span class="text-xl ml-1">&#128512;</span>
                        Happy</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'good_' + question.title_id"
                    >
                        <input
                            value="50"
                            class="w-4 h-4"
                            type="radio"
                            :name="'team_' + question.title_id"
                            :id="'good_' + question.title_id"
                        /><span class="text-xl ml-1">&#128516;</span>
                        Good</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'not-happy_' + question.title_id"
                    >
                        <input
                            value="25"
                            class="w-4 h-4"
                            type="radio"
                            :name="'team_' + question.title_id"
                            :id="'not-happy_' + question.title_id"
                        /><span class="text-xl ml-1">&#128525;</span>Not
                        happy</label
                    >
                    <label
                        class="flex justify-start items-center"
                        :for="'angry_' + question.title_id"
                    >
                        <input
                            value=""
                            class="w-4 h-4"
                            type="radio"
                            :name="'team_' + question.title_id"
                            :id="'angry_' + question.title_id"
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            val: ""
        };
    },
    methods: {
        next() {
            this.$store.commit("nextFirstCategory");
        }
    },
    computed: {
        category1_data() {
            return this.$store.state.category1;
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
