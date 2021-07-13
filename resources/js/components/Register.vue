<template>
    <div>
        <admin-menu :section="section">
            <template v-slot:header>
                <div class="ml-10 flex items-baseline space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                    <router-link
                        to="/admin_dashboard"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Dashboard</router-link
                    >

                    <router-link
                        to="/admin_analytics"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Analytics</router-link
                    >
                    <router-link
                        to="/admin_register_employee"
                        class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Add Employee</router-link
                    >

                    <router-link
                        to="/admin_new_question"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Add Survey</router-link
                    >>
                </div>
            </template>
            <template v-slot:default>
                <router-link
                    to="/admin_dashboard"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Dashboard</router-link
                >

                <router-link
                    to="/admin_analytics"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Analytics</router-link
                >
                <router-link
                    to="/admin_register_employee"
                    class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Add Employee</router-link
                >
                <router-link
                    to="/admin_new_question"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Add Survey</router-link
                >
            </template>
        </admin-menu>
        <div class="mt-10">
            <form
                action
                class="w-5/6 md:w-1/2 flex flex-col items-center md:items-start relative m-auto px-4 shadow-xl"
            >
                <p class="text-xl text-center w-full">Register New Employee</p>
                <label
                    class="w-full mt-1 flex flex-col items-start"
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
                    <span
                        class="text-xs text-red-600"
                        v-if="errorMessage.email"
                        >{{ errorMessage.email[0] }}</span
                    >
                </label>
                <div
                    class="flex flex-col md:flex-row justify-between w-full flex-wrap"
                >
                    <label
                        class="w-full md:w-2/5 mt-2 flex flex-col items-start"
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
                            class="text-xs text-red-600"
                            v-if="errorMessage.first_name"
                            >{{ errorMessage.first_name[0] }}</span
                        >
                    </label>
                    <label
                        class="w-full md:w-2/5 mt-2 flex flex-col items-start"
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
                            class="text-xs text-red-600"
                            v-if="errorMessage.second_name"
                            >{{ errorMessage.second_name[0] }}</span
                        >
                    </label>
                </div>
                <div
                    class="flex flex-col md:flex-row justify-between w-full flex-wrap"
                >
                    <label class="mt-2 flex flex-col items-start" for="gender">
                        Gender
                        <br />
                        <select
                            class="outline-none ring-1 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-200 ease-in-out p-1"
                            name="gender"
                            id="gender"
                            v-model="registerData.gender"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <label
                        class="mt-2 flex flex-col items-start"
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
                    </label>
                    <label
                        class="mt-2 flex flex-col items-start"
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
                    </label>
                </div>
                <div
                    class="w-full flex flex-col md:flex-row justify-between flex-wrap"
                >
                    <label
                        class="mt-2 flex flex-col items-start"
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
                            class="text-xs text-red-600"
                            v-if="errorMessage.start_at_company"
                            >{{ errorMessage.start_at_company[0] }}</span
                        >
                    </label>
                    <label class="mt-2 flex flex-col items-start" for="dob">
                        D.O.B
                        <br />
                        <input
                            class="outline-none ring-1 focus:ring-blue-100 text-gray-600 rounded-sm transition duration-100 ease-in-out p-1"
                            id="dob"
                            type="date"
                            v-model="registerData.date_birth"
                        />
                        <span
                            class="text-xs text-red-600"
                            v-if="errorMessage.date_birth"
                            >{{ errorMessage.date_birth[0] }}</span
                        >
                    </label>
                </div>
                <div class="flex flex-col justify-between w-full">
                    <label
                        class="mt-2 flex flex-col items-start"
                        for="password"
                    >
                        Password
                        <br />
                        <input
                            class="mb-2 w-full md:w-3/4 outline-none bg-gray-50 rounded-sm ring-1 focus:ring-blue-100 focus:bg-gray-100 transition duration-200 ease-in-out p-1"
                            id="password"
                            type="password"
                            v-model="registerData.password"
                        />
                        <span
                            class="text-xs text-red-600"
                            v-if="errorMessage.password"
                            >{{ errorMessage.password[0] }}</span
                        >
                    </label>
                    <label
                        class="mt-2 flex flex-col items-start"
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
                            class="text-xs text-red-600"
                            v-if="errorMessage.password"
                            >{{ errorMessage.password[0] }}</span
                        >
                    </label>
                </div>
                <div class="w-full my-4">
                    <button
                        @click.prevent="addNewUser"
                        class="bg-blue-500 rounded-sm hover:bg-blue-700 flex items-center px-2 py-1 text-gray-50 outline-none ring-0 transition duration-200 ease-in-out md:w-1/4 w-full justify-center"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        <p>{{ registerData }}</p>
    </div>
</template>

<
<script>
import axios from "axios";
import AdminMenu from "./AdminMenu";
export default {
    components: {
        "admin-menu": AdminMenu
    },
    data() {
        return {
            registerData: {
                first_name: "",
                second_name: "",
                date_birth: "",
                education: "",
                start_at_company: "",
                gender: "",
                position: "",
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
                    this.registerData.first_name = "";
                    this.registerData.second_name = "";
                    this.registerData.email = "";
                    this.registerData.password = "";
                    this.registerData.password_confirmation = "";
                })
                .catch(error => {
                    this.errorMessage = error.response.data.errors;
                    console.log(error.response.data.errors.password[0]);
                    console.error(error);
                });
        }
    },
    created() {}
};
</script>
