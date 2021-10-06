<template>
    <div>
        <div
            v-show="showLoader"
            class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
        >
            <div class="m-auto">
                <!--
                <flower-spinner
                    :animation-duration="1500"
                    :size="70"
                    color="#912CEE"
                />
                -->
                <swapping-squares-spinner
                    :animation-duration="1000"
                    :size="65"
                    color="#912CEE"
                />
            </div>
        </div>
        <div
            v-show="showLoader"
            class="fixed inset-0 z-40 opacity-20 bg-black min-h-full"
        ></div>
    </div>
</template>

<script>
//import { FlowerSpinner } from "epic-spinners";
import { SwappingSquaresSpinner } from "epic-spinners";
export default {
    components: {
        //FlowerSpinner,
        "swapping-squares-spinner": SwappingSquaresSpinner
    },
    data() {
        return {};
    },
    computed: {
        showLoader() {
            return this.$store.state.c.loader;
        }
    }
};
</script>
