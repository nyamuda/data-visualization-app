<template>
    <div>
        <div
            v-show="showModal"
            class="fixed overflow-x-hidden overflow-y-auto flex items-center justify-center z-50 inset-0"
        >
            <!-- CONTENT OF THE MODAL -->
            <slot name="modal-content"> </slot>
        </div>
        <div
            v-show="showModal"
            class="fixed inset-0 opacity-25 z-40 bg-black"
        ></div>
    </div>
</template>

<script>
export default {
    computed: {
        showModal() {
            //get true/false value from the state - MODULE F

            return this.$store.state.f.hideShowEmployeeForm;
        }
    }
};
</script>
