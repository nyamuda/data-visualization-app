<template>
    <div>
        <nav
            class="flex items-center justify-between flex-wrap bg-gray-800 p-6 text-gray-100"
        >
            <div
                class="flex items-center flex-shrink-0 text-white mr-6 -ml-1 lg:-ml-0"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    version="1.1"
                    width="54"
                    height="54"
                    x="0"
                    y="0"
                    viewBox="0 0 300 300"
                    style="enable-background:new 0 0 512 512"
                    xml:space="preserve"
                    class="fill-current h-12 w-12"
                >
                    <g>
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="m70.337 141.999h31.328c6.692 0 12.768-2.429 17.621-6.322l5.715 4.572c1.477 1.18 3.242 1.75 4.992 1.75 2.352 0 4.672-1.031 6.258-3 2.758-3.453 2.195-8.484-1.25-11.25l-6.553-5.242c.928-2.8 1.553-5.736 1.553-8.844v-55.328c0-15.625-12.711-28.336-28.336-28.336h-31.328c-15.625 0-28.336 12.711-28.336 28.336v55.328c0 15.625 12.711 28.336 28.336 28.336zm-12.336-83.664c0-6.805 5.531-12.336 12.336-12.336h31.328c6.805 0 12.336 5.531 12.336 12.336v52.614l-19-15.2c-3.461-2.766-8.477-2.18-11.25 1.25-2.758 3.453-2.195 8.484 1.25 11.25l21.111 16.889c-1.384.537-2.875.861-4.447.861h-31.328c-6.805 0-12.336-5.531-12.336-12.336z"
                            fill="#ffffff"
                            data-original="#000000"
                            style=""
                            class=""
                        />
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="m137.516 259.264-32-88c-1.148-3.164-4.148-5.266-7.516-5.266h-24c-3.367 0-6.367 2.102-7.516 5.266l-32 88c-1.516 4.156.633 8.742 4.781 10.25 4.172 1.516 8.742-.625 10.25-4.781l12.631-34.734h47.707l12.631 34.734c1.18 3.25 4.25 5.266 7.516 5.266.906 0 1.828-.156 2.734-.484 4.15-1.508 6.298-6.094 4.782-10.251zm-69.55-45.265 11.637-32h12.797l11.637 32z"
                            fill="#ffffff"
                            data-original="#000000"
                            style=""
                            class=""
                        />
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="m258.001 69.999h-96c-4.422 0-8-3.578-8-8s3.578-8 8-8h96c4.422 0 8 3.578 8 8s-3.578 8-8 8z"
                            fill="#ffffff"
                            data-original="#000000"
                            style=""
                            class=""
                        />
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="m226.001 93.999h-64c-4.422 0-8-3.578-8-8s3.578-8 8-8h64c4.422 0 8 3.578 8 8s-3.578 8-8 8z"
                            fill="#ffffff"
                            data-original="#000000"
                            style=""
                            class=""
                        />
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="m250.001 117.999h-88c-4.422 0-8-3.578-8-8s3.578-8 8-8h88c4.422 0 8 3.578 8 8s-3.578 8-8 8z"
                            fill="#e9e9e9"
                            data-original="#d8b400"
                            style=""
                            class=""
                        />
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="m218.001 197.999h-56c-4.422 0-8-3.578-8-8s3.578-8 8-8h56c4.422 0 8 3.578 8 8s-3.578 8-8 8z"
                            fill="#e9e9e9"
                            data-original="#d8b400"
                            style=""
                            class=""
                        />
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="m258.001 221.999h-96c-4.422 0-8-3.578-8-8s3.578-8 8-8h96c4.422 0 8 3.578 8 8s-3.578 8-8 8z"
                            fill="#ffffff"
                            data-original="#000000"
                            style=""
                            class=""
                        />
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="m234.001 245.999h-72c-4.422 0-8-3.578-8-8s3.578-8 8-8h72c4.422 0 8 3.578 8 8s-3.578 8-8 8z"
                            fill="#e9e9e9"
                            data-original="#d8b400"
                            style=""
                            class=""
                        />
                    </g>
                </svg>

                <router-link
                    to="/admin_dashboard"
                    class="font-semibold text-xl cursor-pointer text-gray-50 hover:text-gray-50 hover:no-underline"
                    >Survey App</router-link
                >
            </div>
            <div class="block lg:hidden">
                <button
                    @click="menu"
                    class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                >
                    <svg
                        class="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <!--DESKTOP LINKS -->

            <div class="hidden flex-grow lg:flex items-center w-auto -mt-4">
                <div class="text-sm flex-grow">
                    <router-link
                        to="/admin_dashboard"
                        class="font-bold mt-4 inline-block lg:mt-0 text-gray-300 hover:no-underline hover:text-white mr-4"
                    >
                        Dashboard
                    </router-link>
                    <router-link
                        to="/register_employee"
                        class="font-bold mt-4 inline-block lg:mt-0 text-gray-300 hover:no-underline hover:text-white mr-4"
                    >
                        Add New Employee
                    </router-link>
                    <router-link
                        to="add_questions"
                        class="font-bold mt-4 inline-block lg:mt-0 text-gray-300 hover:no-underline hover:text-white"
                    >
                        Add New Questions
                    </router-link>
                </div>
                <div>
                    <a
                        @click.prevent="logoutAdmin"
                        class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-100 border-gray-100 mt-3 cursor-pointer hover:bg-gray-50 hover:text-gray-800 hover:no-underline transition duration-200 ease-in-out"
                        >Logout</a
                    >
                </div>
            </div>

            <!--MOBILE LINKS -->
            <transition name="slide-fade">
                <div
                    v-show="mobile_menu"
                    class="w-full block flex-grow lg:hidden"
                >
                    <div class="text-sm">
                        <router-link
                            to="/admin_dashboard"
                            class="block mt-4 text-teal-200 hover:text-white mr-4"
                        >
                            Dashboard
                        </router-link>
                        <router-link
                            to="/register_employee"
                            class="block mt-4 lg:inline-block text-teal-200 hover:text-white mr-4"
                        >
                            Add New Employee
                        </router-link>
                        <router-link
                            to="add_questions"
                            class="block mt-4 text-teal-200 hover:text-white"
                        >
                            Add New Questions
                        </router-link>
                    </div>
                    <div>
                        <a
                            @click.prevent="logoutAdmin"
                            class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-100 border-gray-100 cursor-pointer hover:bg-gray-50 hover:text-gray-800 hover:no-underline transition duration-200 ease-in-out mt-4"
                            >Logout</a
                        >
                    </div>
                </div>
            </transition>
        </nav>
        <div class="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8 shadow-xl">
            <h1 class="text-3xl font-bold text-gray-900">
                {{ section }}
            </h1>
        </div>
        <loader></loader>
    </div>
</template>

<script>
import Loader from "../Loader";

export default {
    props: ["section"],
    components: {
        loader: Loader
    },
    data() {
        return {
            mobile_menu: false
        };
    },
    methods: {
        logoutAdmin() {
            //showing the page loader
            this.$store.commit("loaderStatus");
            //log out
            this.$store.dispatch("admin_logout");
        },
        menu() {
            this.mobile_menu = !this.mobile_menu;
        }
    }
};
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
    transition: all 0.5s ease-in-out;
}
.slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>
