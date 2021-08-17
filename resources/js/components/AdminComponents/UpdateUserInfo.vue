<template>
    <div class="flex flex-col h-screen justify-between">
        <admin-header :section="section"></admin-header>
        <div id="form-container" class="relative bottom-16">
            <form
                action
                class="w-full flex flex-col items-center md:items-start relative m-auto px-4 pt-4 shadow-2xl"
            >
                <!--  <p class="text-2xl text-center w-full">Register Employee</p> -->
                <label
                    class="w-full mt-1 flex flex-col items-start relative"
                    for="email"
                >
                    Email
                    <br />
                    <input
                        class="w-full md:w-3/4 outline-none bg-gray-50 rounded-sm ring-1 focus:ring-blue-100 focus:bg-gray-100 transition duration-200 ease-in-out p-1"
                        id="email"
                        type="email"
                        v-model="oneUserInfo.email"
                    />
                    <!--if there is an error, we show the error. -->
                    <span
                        class="text-xs text-red-600 md:absolute md:-bottom-4"
                        v-if="errorMessage.email"
                    >
                        {{ errorMessage.email[0] }}
                    </span>
                    <!--else we don't display anything-->
                    <span
                        class="text-xs text-red-600 md:absolute md:-bottom-4"
                        v-else
                    >
                    </span>
                </label>
                <div
                    class="flex flex-col md:flex-row justify-between w-full flex-wrap"
                >
                    <label
                        class="relative w-full md:w-2/5 mt-2 flex flex-col items-start"
                        for="first"
                    >
                        First Name
                        <br />
                        <input
                            class="outline-none bg-gray-50 rounded-sm w-full ring-1 focus:ring-blue-100 focus:bg-gray-100 transition duration-200 ease-in-out p-1"
                            id="first"
                            type="text"
                            v-model="oneUserInfo.first_name"
                        />
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-if="errorMessage.first_name"
                        >
                            {{ errorMessage.first_name[0] }}
                        </span>
                        <!--else we don't display anything-->
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-else
                        >
                        </span>
                    </label>
                    <label
                        class="relative w-full md:w-2/5 mt-2 flex flex-col items-start"
                        for="second"
                    >
                        Second Name
                        <br />
                        <input
                            class="outline-none bg-gray-50 rounded-sm w-full ring-1 focus:ring-blue-100 focus:bg-gray-100 transition duration-200 ease-in-out p-1"
                            id="second"
                            type="text"
                            v-model="oneUserInfo.second_name"
                        />
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-if="errorMessage.second_name"
                        >
                            {{ errorMessage.second_name[0] }}
                        </span>
                        <!--else we don't display anything-->
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-else
                        >
                        </span>
                    </label>
                </div>
                <div
                    class="flex flex-col md:flex-row justify-between w-full flex-wrap"
                >
                    <label
                        class="relative mt-2 flex flex-col items-start"
                        for="gender"
                    >
                        Gender
                        <br />
                        <select
                            class="outline-none ring-1 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-200 ease-in-out p-1"
                            name="gender"
                            id="gender"
                            v-model="oneUserInfo.gender"
                        >
                            <option value="">--Choose an option--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-if="errorMessage.gender"
                        >
                            {{ errorMessage.gender[0] }}
                        </span>
                        <!--else we don't display anything-->
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-else
                        >
                        </span>
                    </label>
                    <label
                        class=" relative mt-2 flex flex-col items-start"
                        for="education"
                    >
                        Education
                        <br />
                        <select
                            class="outline-none ring-1 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-100 ease-in-out p-1"
                            name="education"
                            id="education"
                            v-model="oneUserInfo.education"
                        >
                            <option value="">--Choose an option--</option>
                            <option value="Postgrad Degree"
                                >Postgrad Degree</option
                            >
                            <option value="Bachelor's Degree"
                                >Bachelor's Degree</option
                            >
                            <option value="Diploma/Certificate"
                                >Diploma/Certificate</option
                            >
                            <option value="Matric">Matric</option>
                            <option value="Less than Matric"
                                >Less than Matric</option
                            >
                        </select>
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-if="errorMessage.education"
                        >
                            {{ errorMessage.education[0] }}
                        </span>
                        <!--else we don't display anything-->
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-else
                        >
                        </span>
                    </label>

                    <label
                        class=" relative mt-2 flex flex-col items-start"
                        for="position"
                    >
                        Position
                        <br />
                        <select
                            class="outline-none ring-1 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-100 ease-in-out p-1"
                            name="position"
                            id="position"
                            v-model="oneUserInfo.position_at_company"
                        >
                            <option value="">--Choose an option--</option>
                            <option value="Executive">Executive</option>
                            <option value="Senior Manager"
                                >Senior Manager</option
                            >
                            <option value="Junior Manager"
                                >Junior Manager</option
                            >
                            <option value="Supervisor">Supervisor</option>
                            <option value="Operational/Staff"
                                >Operational/Staff</option
                            >
                        </select>
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-if="errorMessage.position_at_company"
                        >
                            {{ errorMessage.position_at_company[0] }}
                        </span>
                        <!--else we don't display anything-->
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-else
                        >
                        </span>
                    </label>
                </div>
                <div class="w-full flex flex-col justify-between">
                    <label
                        class="relative mt-2 flex flex-col items-start"
                        for="begin-date"
                    >
                        Starting Date at Company
                        <br />
                        <input
                            class="outline-none ring-1 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-100 ease-in-out p-1"
                            id="begin-date"
                            type="date"
                            v-model="oneUserInfo.start_at_company"
                        />
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-if="errorMessage.start_at_company"
                        >
                            {{ errorMessage.start_at_company[0] }}
                        </span>
                        <!--else we don't display anything-->
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-else
                        >
                        </span>
                    </label>
                    <label
                        class="relative mt-2 flex flex-col items-start"
                        for="dob"
                    >
                        D.O.B
                        <br />
                        <input
                            class="outline-none ring-1 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-100 ease-in-out p-1"
                            id="dob"
                            type="date"
                            v-model="oneUserInfo.date_of_birth"
                        />
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-if="errorMessage.date_of_birth"
                        >
                            {{ errorMessage.date_of_birth[0] }}
                        </span>
                        <!--else we don't display anything-->
                        <span
                            class="text-xs text-red-600 md:absolute md:-bottom-4"
                            v-else
                        >
                        </span>
                    </label>
                </div>

                <div class="w-full my-4">
                    <button
                        @keyup.enter="updateUser"
                        @click.prevent="updateUser"
                        class="bg-blue-500 rounded-sm hover:bg-blue-700 flex items-center px-2 py-1 text-gray-50 outline-none ring-0 transition duration-200 ease-in-out md:w-1/4 w-full justify-center"
                    >
                        Update
                    </button>
                </div>
            </form>
            <transition name="slide-fade">
                <div
                    v-show="success"
                    class="w-full flex justify-center items-center bg-green-800 absolute"
                >
                    <p class="py-3 text-gray-100">
                        Employee Successully Added
                    </p>
                </div>
            </transition>
        </div>
        {{ oneUserInfo }}
        <the-footer class="mt-10"></the-footer>
    </div>
</template>

<
<script>
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../Footer";

export default {
    components: {
        "admin-header": AdminHeader,
        "the-footer": Footer
    },
    data() {
        return {
            registerFormDisplay: true,
            section: "Update User"
        };
    },
    methods: {
        updateUser() {
            //update the user info --Module F
            this.$store.dispatch("updateUserInfo");
        }
    },
    computed: {
        updateID() {
            let user_id = this.$route.params.user_id;
            return { user_id };
        },
        oneUserInfo() {
            return this.$store.state.f.oneUserInfo;
        },
        success() {
            return this.$store.state.f.updateSuccessful;
        },
        errorMessage() {
            return this.$store.state.f.errorMessage;
        }
    },
    created() {
        //get user with specific ID --MODULE F
        this.$store.dispatch("getOneUser", this.updateID);
    }
};
</script>

<style scoped>
#form-container {
    width: 95%;
    position: relative;
    margin: auto;
    margin-top: 10rem !important;
}
.slide-fade-enter-active {
    transition: all 0.5s ease;
}

.slide-fade-leave-active {
    transition: all 0.8s ease-in-out;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(10px);
    opacity: 0;
}
@media (min-width: 786.5px) {
    #form-container {
        width: 40rem;
    }
}
</style>
