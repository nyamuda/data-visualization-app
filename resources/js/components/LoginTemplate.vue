<template>
    <div class="flex flex-col h-screen justify-between">
        <login-header></login-header>
        <div class="">
            <form
                class="my_forms rounded-sm m-auto flex flex-col p-8"
                action=""
            >
                <p class="w-full text-center text-2xl font-bold">
                    <!-- SLOT FOR THE LOGIN TITLE -->
                    <slot name="title"></slot>
                </p>
                <div class="w-full flex justify-center items-center mt-2">
                    <hr class="w-5/6 border-t-2 border-solid border-gray-500" />
                </div>
                <div class=" relative flex flex-col justify-center mt-2">
                    <!-- SLOT FOR THE EMAIL -->
                    <slot name="email"> </slot>
                </div>
                <div class="relative flex flex-col justify-center mt-4">
                    <!-- SLOT FOR THE PASSWORD -->
                    <slot name="password"> </slot>
                </div>
                <!-- SLOT FOR THE BUTTON -->
                <slot name="button"> </slot>
            </form>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import Footer from "./Footer";
import LoginHeader from "./Templates/LoginHeader";

export default {
    components: {
        "the-footer": Footer,
        "login-header": LoginHeader
    }
};
</script>
