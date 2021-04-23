<template>
    <div>
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div>
            <nav class="bg-gray-800">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img
                                    class="h-8 w-8"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div class="hidden md:block">
                                <div
                                    class="ml-10 flex items-baseline space-x-4"
                                >
                                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                                    <router-link
                                        to="/admin/dashboard"
                                        class="my-links bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >Dashboard</router-link
                                    >

                                    <router-link
                                        to="/admin/analytics"
                                        class="my-links text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >Analytics</router-link
                                    >
                                    <router-link
                                        to="/admin/register-employee"
                                        class="my-links text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >Add Employee</router-link
                                    >

                                    <router-link
                                        to="/admin/add-survey"
                                        class="my-links text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >Add Survey</router-link
                                    >

                                    <router-link
                                        class="my-links text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >Reports</router-link
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="-mr-2 flex md:hidden">
                            <!-- Mobile menu button -->
                            <button
                                @click="toggleMobile"
                                type="button"
                                class="bg-gray-800 inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white transition duration-300 ease-in-out"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xmlns:svgjs="http://svgjs.com/svgjs"
                                    version="1.1"
                                    width="25"
                                    height="25"
                                    x="0"
                                    y="0"
                                    viewBox="0 0 24 24"
                                    style="enable-background:new 0 0 512 512"
                                    xml:space="preserve"
                                    class=""
                                >
                                    <g>
                                        <path
                                            xmlns="http://www.w3.org/2000/svg"
                                            d="m5 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                                            fill="#ffffff"
                                            data-original="#000000"
                                            style=""
                                            class=""
                                        />
                                        <path
                                            xmlns="http://www.w3.org/2000/svg"
                                            d="m5 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                                            fill="#ffffff"
                                            data-original="#000000"
                                            style=""
                                            class=""
                                        />
                                        <path
                                            xmlns="http://www.w3.org/2000/svg"
                                            d="m5 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                                            fill="#ffffff"
                                            data-original="#000000"
                                            style=""
                                            class=""
                                        />
                                        <path
                                            xmlns="http://www.w3.org/2000/svg"
                                            d="m14 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                                            fill="#ffffff"
                                            data-original="#000000"
                                            style=""
                                            class=""
                                        />
                                        <path
                                            xmlns="http://www.w3.org/2000/svg"
                                            d="m14 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                                            fill="#ffffff"
                                            data-original="#000000"
                                            style=""
                                            class=""
                                        />
                                        <path
                                            xmlns="http://www.w3.org/2000/svg"
                                            d="m14 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                                            fill="#ffffff"
                                            data-original="#000000"
                                            style=""
                                            class=""
                                        />
                                        <path
                                            xmlns="http://www.w3.org/2000/svg"
                                            d="m23 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                                            fill="#ffffff"
                                            data-original="#000000"
                                            style=""
                                            class=""
                                        />
                                        <path
                                            xmlns="http://www.w3.org/2000/svg"
                                            d="m23 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                                            fill="#ffffff"
                                            data-original="#000000"
                                            style=""
                                            class=""
                                        />
                                        <path
                                            xmlns="http://www.w3.org/2000/svg"
                                            d="m23 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                                            fill="#ffffff"
                                            data-original="#000000"
                                            style=""
                                            class=""
                                        />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Mobile menu, show/hide based on menu state. -->
                <div v-show="showMobile" class="md:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                        <router-link
                            to="/dashboard"
                            class="my-links bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                            >Dashboard</router-link
                        >

                        <router-link
                            to="/analytics"
                            class="my-links text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >Analytics</router-link
                        >
                        <router-link
                            to="/add-employee"
                            class="my-links text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >Add Employee</router-link
                        >
                        <router-link
                            to="/add-survey"
                            class="my-links text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >Add Survey</router-link
                        >
                        <router-link
                            class="my-links text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >Reports</router-link
                        >
                    </div>
                    <div class="pt-4 pb-3 border-t border-gray-700">
                        <div class="mt-3 px-2 space-y-1">
                            <router-link
                                to="/"
                                class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                >Log out</router-link
                            >
                        </div>
                    </div>
                </div>
            </nav>

            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header>
        </div>

        <p class="test">helllllllll</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMobile: false
        };
    },
    methods: {
        toggleMobile() {
            this.showMobile = !this.showMobile;
        },
        //changing the background of the menu links
        clickLink(event) {
            //first we change the background of the clicked link
        }
    }
};
</script>
<style scoped></style>
