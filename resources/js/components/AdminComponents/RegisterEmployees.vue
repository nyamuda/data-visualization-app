<template>
    <div class="flex flex-col h-screen justify-between">
        <modal-template>
            <template v-slot:modal-content>
                <div id="form-container" class="relative bottom-16 bg-gray-50">
                    <div class="w-full flex justify-end">
                        <svg
                            @click="registerFormStatus"
                            class="mt-4 mr-4 cursor-pointer fill-current text-gray-500 hover:text-gray-900 transition duration-200 ease-in"
                            xmlns="http://www.w3.org/2000/svg"
                            height="40px"
                            viewBox="0 0 24 24"
                            width="40px"
                            fill="#000000"
                        >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                            />
                        </svg>
                    </div>
                    <p class="text-center text-2xl font-bold">Add User</p>
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
                                v-model="registerData.email"
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
                                    v-model="registerData.first_name"
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
                                    v-model="registerData.second_name"
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
                                    v-model="registerData.gender"
                                >
                                    <option value=""
                                        >--Choose an option--</option
                                    >
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
                                    v-model="registerData.education"
                                >
                                    <option value=""
                                        >--Choose an option--</option
                                    >
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
                                    v-model="registerData.position_at_company"
                                >
                                    <option value=""
                                        >--Choose an option--</option
                                    >
                                    <option value="Executive">Executive</option>
                                    <option value="Senior Manager"
                                        >Senior Manager</option
                                    >
                                    <option value="Junior Manager"
                                        >Junior Manager</option
                                    >
                                    <option value="Supervisor"
                                        >Supervisor</option
                                    >
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
                        <div class="w-full flex flex-col">
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
                                    v-model="registerData.start_at_company"
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
                                    v-model="registerData.date_birth"
                                />
                                <span
                                    class="text-xs text-red-600 md:absolute md:-bottom-4"
                                    v-if="errorMessage.date_birth"
                                >
                                    {{ errorMessage.date_birth[0] }}
                                </span>
                                <!--else we don't display anything-->
                                <span
                                    class="text-xs text-red-600 md:absolute md:-bottom-4"
                                    v-else
                                >
                                </span>
                            </label>
                        </div>
                        <div class="flex flex-col justify-between w-full">
                            <label
                                class="relative mt-2 flex flex-col items-start"
                                for="password"
                            >
                                Password
                                <br />
                                <input
                                    class="w-full md:w-3/4 outline-none bg-gray-50 rounded-sm ring-1 focus:ring-blue-100 focus:bg-gray-100 transition duration-200 ease-in-out p-1"
                                    id="password"
                                    type="password"
                                    v-model="registerData.password"
                                />
                                <span
                                    class="text-xs text-red-600 md:absolute md:-bottom-4"
                                    v-if="errorMessage.password"
                                >
                                    {{ errorMessage.password[0] }}
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
                                for="password-confirmation"
                            >
                                Confirm Password
                                <br />
                                <input
                                    class="w-full md:w-3/4 outline-none bg-gray-50 rounded-sm ring-1 focus:ring-blue-100 focus:bg-gray-100 transition duration-200 ease-in-out p-1"
                                    id="password-confirmation"
                                    type="password"
                                    v-model="registerData.password_confirmation"
                                />
                                <span
                                    class="text-xs text-red-600 md:absolute md:-bottom-4"
                                    v-if="errorMessage.password"
                                >
                                    {{ errorMessage.password[0] }}
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
                                @keyup.enter="addNewUser"
                                @click.prevent="addNewUser"
                                class="bg-blue-500 rounded-sm hover:bg-blue-700 flex items-center px-2 py-1 text-gray-50 outline-none ring-0 transition duration-200 ease-in-out md:w-1/4 w-full justify-center"
                            >
                                Submit
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
            </template>
        </modal-template>
    </div>
</template>

<
<script>
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import ModalTemplate from "../Templates/ModalTemplate";

export default {
    components: {
        "admin-header": AdminHeader,
        "the-footer": Footer,
        "modal-template": ModalTemplate
    },
    data() {
        return {
            success: false,
            registerData: {
                first_name: "",
                second_name: "",
                date_birth: "",
                education: "",
                start_at_company: "",
                gender: "",
                position_at_company: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            errorMessage: "",
            registerFormDisplay: true,
            section: "Add Employee"
        };
    },
    methods: {
        addNewUser() {
            axios
                .post("/api/register", this.registerData)
                .then(res => {
                    console.log(res);
                    //show the success confirmation
                    this.success = !this.success;

                    this.registerData.first_name = "";
                    this.registerData.second_name = "";
                    this.registerData.email = "";
                    this.registerData.password = "";
                    this.registerData.password_confirmation = "";
                    this.errorMessage = "";
                    //hide success
                    this.hideSuccess();
                    /* since a new user has been successfully added, lets get
                    a new fresh of user list */
                    this.$store.dispatch("getUserList");
                })
                .catch(error => {
                    this.errorMessage = error.response.data.errors;
                    console.log(error.response.data.errors.password[0]);
                    console.error(error);
                });
        },
        //hide the success confirmation after a new user is added.
        hideSuccess() {
            setTimeout(() => {
                this.success = !this.success;
            }, 3000);
        },
        //hide/display the register form - module F
        registerFormStatus() {
            this.$store.commit("hideShowEmployeeForm");
        }
    },
    created() {}
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
