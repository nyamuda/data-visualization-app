<template>
    <div>
        <div
            v-show="showModal"
            class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
        >
            <div
                class="w-5/6 m-auto flex flex-col items-center justify-center text-center shadow-xl md:w-2/5 md:items-start bg-white"
            >
                <div
                    class="md:flex md:flex-row md:items-center md:justify-start md:pt-8 md:pl-4 md:-mt-8"
                >
                    <div class="m-auto flex justify-center pt-4 md:pt-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            version="1.1"
                            width="50"
                            height="50"
                            x="0"
                            y="0"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                        >
                            <g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m256 392c-33.084 0-60 26.916-60 60s26.916 60 60 60 60-26.916 60-60-26.916-60-60-60zm0 90c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30z"
                                        fill="#000000"
                                        data-original="#000000"
                                        style=""
                                    />
                                    <path
                                        d="m256 0c-86.019 0-156 69.981-156 156v15h120v-15c0-19.851 16.149-36 36-36s36 16.149 36 36c0 10.578-4.643 20.59-12.74 27.471l-83.26 70.787v107.742h120v-52.258l40.976-34.837c34.968-29.714 55.024-73.052 55.024-118.905 0-86.019-69.981-156-156-156zm81.547 252.047-51.547 43.824v36.129h-60v-63.871l72.688-61.8c14.815-12.589 23.312-30.933 23.312-50.329 0-36.393-29.607-66-66-66-31.235 0-57.471 21.81-64.281 51h-60.832c7.441-62.431 60.712-111 125.113-111 69.477 0 126 56.523 126 126 0 37.034-16.201 72.04-44.453 96.047z"
                                        fill="#000000"
                                        data-original="#000000"
                                        style=""
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div
                        class="p-4 md:flex md:flex-col md:items-start md:-ml-4 md:justify-center"
                    >
                        <p class="text-xl font-bold">Submit Survey</p>
                        <p>Are you sure you want to submit</p>
                    </div>
                </div>
                <div
                    class="flex flex-col items-center justify-center w-full bg-gray-100 px-4 py-2 md:py-2 md:flex-row-reverse md:justify-start md:items-center md:h-12"
                >
                    <button
                        @click="storeAllAnswers"
                        class="my-1 transition duration-500 ease-in-out w-full flex justify-center items-center rounded-md border border-transparent shadow-sm px-3 py-1.5 bg-gray-600 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 md:w-auto"
                    >
                        Submit
                    </button>
                    <button
                        @click="cancelConfirm"
                        class="my-1 transition duration-500 ease-in-out w-full flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-3 py-1.5 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 md:w-auto md:mr-4"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
        <div
            v-show="showModal"
            class="fixed inset-0 z-40 opacity-25 bg-black min-h-full"
        ></div>
    </div>
</template>

<script>
export default {
    props: ["storeAllAnswers"],
    data() {
        return {};
    },
    methods: {
        cancelConfirm() {
            this.$store.commit("confirmModal");
        }
    },
    computed: {
        showModal() {
            return this.$store.state.d.confirmModal;
        }
    }
};
</script>
<style scoped></style>
