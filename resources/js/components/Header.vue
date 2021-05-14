<template>
    <div>
        <nav
            class="flex items-center justify-between flex-wrap bg-gray-800 p-6 text-gray-100"
        >
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <svg
                    class="fill-current h-8 w-8 mr-2"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                    />
                </svg>
                <span class="font-semibold text-xl tracking-tight"
                    >Survey App</span
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

            <div class="hidden flex-grow lg:flex items-center w-auto">
                <div class="text-sm flex-grow">
                    <router-link
                        to="/survey_list"
                        class="mt-4 inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        Survey List
                    </router-link>
                    <a
                        href="#responsive-header"
                        class="mt-4 inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        Examples
                    </a>
                    <a
                        href="#responsive-header"
                        class="mt-4 inline-block lg:mt-0 text-teal-200 hover:text-white"
                    >
                        Blog
                    </a>
                </div>
                <div>
                    <a
                        @click.prevent="logoutUser"
                        class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-100 border-gray-100 mt-0 cursor-pointer hover:bg-gray-50 hover:text-gray-800 hover:no-underline transition duration-200 ease-in-out"
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
                            to="/survey_list"
                            class="block mt-4 text-teal-200 hover:text-white mr-4"
                        >
                            Survey List
                        </router-link>
                        <a
                            href="#responsive-header"
                            class="block mt-4 lg:inline-block text-teal-200 hover:text-white mr-4"
                        >
                            Examples
                        </a>
                        <a
                            href="#responsive-header"
                            class="block mt-4 text-teal-200 hover:text-white"
                        >
                            Blog
                        </a>
                    </div>
                    <div>
                        <a
                            @click.prevent="logoutUser"
                            class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-100 border-gray-100 cursor-pointer hover:bg-gray-50 hover:text-gray-800 hover:no-underline transition duration-200 ease-in-out mt-4"
                            >Logout</a
                        >
                    </div>
                </div>
            </transition>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mobile_menu: false
        };
    },
    methods: {
        logoutUser() {
            //showing the page loader
            this.$store.commit("loaderStatus");
            //logging the user
            this.$store.dispatch("user_logout");
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
