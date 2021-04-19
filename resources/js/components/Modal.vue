<template>
    <div>
        <div
            v-if="showModal"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
        >
            <div
                class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center">
                            <h3
                                class="text-lg leading-6 font-medium text-gray-900 sm:-ml-2"
                                id="modal-title"
                            >
                                Submit the survey?
                            </h3>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    Once you submit, you will no longer be able
                                    to change your answers for this survey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                >
                    <button
                        v-on:click="storeAllAnswers"
                        type="button"
                        class="transition duration-500 ease-out w-full flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-24 sm:text-sm sm:py-0"
                    >
                        Submit
                    </button>
                    <button
                        v-on:click="toggleModal"
                        type="button"
                        class="transition duration-500 ease-out mt-3 w-full flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
        <div
            v-if="showModal"
            class="opacity-50 fixed inset-0 z-40 bg-gray-900"
        ></div>
    </div>
</template>

<script>
export default {
    props: ["toggleModal", "showModal", "storeAllAnswers"],
    name: "small-modal",
    data() {
        return {};
    },
    methods: {}
};
</script>
