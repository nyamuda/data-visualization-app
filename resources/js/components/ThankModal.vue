<template>
    <div>
        <div
            v-show="showThank"
            class="fixed overflow-x-hidden overflow-y-auto flex items-center justify-center z-50 inset-0"
        >
            <div
                class="flex flex-col items-center justify-center m-auto text-center w-5/6 shadow-xl p-4 md:w-1/3 bg-white"
            >
                <div
                    class="flex justify-center items-center -mt-12 bg-white w-auto h-auto rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.com/svgjs"
                        version="1.1"
                        width="70"
                        height="70"
                        x="0"
                        y="0"
                        viewBox="0 0 32 32"
                        style="enable-background: new 0 0 512 512"
                        xml:space="preserve"
                        class=""
                    >
                        <g>
                            <g xmlns="http://www.w3.org/2000/svg">
                                <g id="check_x5F_alt">
                                    <path
                                        style=""
                                        d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M13.52,23.383    L6.158,16.02l2.828-2.828l4.533,4.535l9.617-9.617l2.828,2.828L13.52,23.383z"
                                        fill="#059669"
                                        data-original="#030104"
                                        class=""
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <p class="text-xl font-bold mt-2">Submitted</p>
                <p class="mt-2">Thank you, the survey has been completed</p>
                <button
                    @click="goHome"
                    class="mt-4 transition duration-500 ease-in-out w-full flex justify-center items-center rounded-md border border-transparent shadow-sm px-3 py-1.5 bg-green-600 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 md:w-1/2 md:m-auto md:mt-2"
                >
                    Survey List
                </button>
            </div>
        </div>
        <div
            v-show="showThank"
            class="fixed inset-0 opacity-25 z-40 bg-black"
        ></div>
    </div>
</template>

<script>
export default {
    props: ["goHome"],
    data() {
        return {};
    },
    computed: {
        //show/hide the thank you modal --the state is from module D
        showThank() {
            return this.$store.state.d.showThank;
        }
    }
};
</script>
