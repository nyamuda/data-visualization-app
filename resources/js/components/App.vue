<template>
    <div class="mt-8">
        <category1 v-show="showCategory['showOne']"></category1>
        <category2 v-show="showCategory['showTwo']"></category2>
        <category3 v-show="showCategory['showThree']"></category3>
    </div>
</template>
<script>
import Category1 from "./Category1";
import Category2 from "./Category2";
import Category3 from "./Category3";
export default {
    components: {
        category1: Category1,
        category2: Category2,
        category3: Category3
    },
    data() {
        return {};
    },
    methods: {},
    computed: {
        showCategory() {
            return this.$store.state.show_Categories;
        }
    }
};
</script>

<style scoped></style>
