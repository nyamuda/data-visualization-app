<template>
    <div class="flex flex-col h-screen justify-between">
        <admin-header :section="section"></admin-header>
        <transition name="slide-fade">
            <div
                v-show="deleteSuccessful"
                class="w-full flex justify-end fixed top-48 z-20"
            >
                <div
                    class="rounded-sm w-auto flex justify-center items-center bg-green-800 absolute bg-opacity-90"
                >
                    <p class="py-3 text-gray-100 px-3">
                        User Deleted
                    </p>
                </div>
            </div>
        </transition>

        <div class="mb-10">
            <div
                class="table-cont md:grid md:grid-cols-4 flex flex-col items-center m-auto"
            >
                <div
                    class="
        md:col-start-1 md:col-end-4
        flex
        justify-center
        flex-col
        items-center
        md:flex-row
        md:flex-wrap
        md:w-full
        md:justify-center
      "
                >
                    <div class="md:w-auto w-full flex justify-center">
                        <label for="search"
                            >Search:
                            <input
                                class="
              w-full
              bg-gray-200
              focus:outline-none
              focus:ring-1
              rounded-sm
              transition
              duration-200
              ease-in-out
              h-8
              px-2
            "
                                v-model="search"
                                id="search"
                                name="search"
                                type="text"
                            />
                        </label>
                    </div>
                    <div class="md:w-auto w-full flex justify-center mx-1">
                        <label class="relative" for="gender">
                            Order:
                            <select
                                class="
              w-full
              outline-none
              ring-1
              ring-gray-300
              focus:ring-blue-300
              text-gray-600
              rounded-sm
              transition
              duration-200
              ease-in-out
              h-8
              px-2
            "
                                name="gender"
                                id="gender"
                                v-model="sort.sortBy"
                            >
                                <option value="">Default - Firstname</option>
                                <option value="last_name">Lastname</option>
                                <option value="gender">Gender</option>
                            </select>
                        </label>
                    </div>
                    <div
                        class="
          md:w-auto
          w-full
          flex
          justify-center
          md:mt-3
        "
                    >
                        <span class="rounded ring-1 ring-gray-600">
                            <svg
                                class="
              fill-current
              text-gray-500
              cursor-pointer
              hover:text-gray-100
              hover:bg-gray-700
              transition
              duration-300
              ease-out
            "
                                xmlns="http://www.w3.org/2000/svg"
                                height="30px"
                                viewBox="0 0 24 24"
                                width="30px"
                                fill=""
                            >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
                                />
                            </svg>
                        </span>
                        <span class="rounded ring-1 ring-gray-600 mx-2">
                            <svg
                                class="
              fill-current
              text-gray-500
              cursor-pointer
              hover:text-gray-100
              hover:bg-gray-700
              transition
              duration-300
              ease-out
            "
                                xmlns="http://www.w3.org/2000/svg"
                                height="30px"
                                viewBox="0 0 24 24"
                                width="30px"
                                fill="#000000"
                            >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
                <div
                    class="w-full flex justify-center md:col-start-4 md:col-end-5 items-center md:justify-end"
                >
                    <button
                        @click.prevent="addEmployee"
                        class="bg-blue-600 h-9 mt-4 rounded-sm hover:bg-blue-900 flex items-center px-4 py-1 text-gray-50 outline-none ring-0 transition duration-200 ease-in-out w-auto justify-center"
                    >
                        Add User
                    </button>
                </div>
            </div>
            <div class="table-cont overflow-x-auto m-auto">
                <table class="bg-gray-800 text-gray-200 table-auto mt-3 w-full">
                    <tr class="text-left border-b border-gray-300">
                        <th class="px-4 py-3">Firstname</th>
                        <th class="px-4 py-3">Lastname</th>
                        <th class="px-4 py-3">Email</th>
                        <th class="px-4 py-3">Gender</th>
                        <th class="px-4 py-3">Position</th>
                        <th class="px-4 py-3">Education</th>
                        <th class="px-4 py-3">Starting Date</th>
                        <th class="px-4 py-3">Birth</th>

                        <th class="px-4 py-3">Action</th>
                    </tr>
                    <tr
                        v-for="(user, index) in getUsersRandom"
                        :key="index"
                        class="bg-gray-700 border-b border-gray-600"
                    >
                        <td class="px-4 py-3">{{ user.first_name }}</td>
                        <td class="px-4 py-3">{{ user.second_name }}</td>
                        <td class="px-4 py-3">{{ user.email }}</td>
                        <td class="px-4 py-3">{{ user.gender }}</td>
                        <td class="px-4 py-3">
                            {{ user.position_at_company }}
                        </td>
                        <td class="px-4 py-3">{{ user.education }}</td>
                        <td class="px-4 py-3">{{ user.start_at_company }}</td>
                        <td class="px-4 py-3">{{ user.date_of_birth }}</td>
                        <td class="flex py-3 px-2">
                            <router-link :to="'update_user/' + user.id">
                                <svg
                                    class="
                fill-current
                text-base text-gray-400
                hover:text-gray-100
                mx-2
                cursor-pointer
                transition
                duration-100
                ease-out
              "
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    fill="#000000"
                                >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path
                                        d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
                                    />
                                </svg>
                            </router-link>

                            <svg
                                :id="user.id"
                                @click="getDeleteID"
                                class="
                fill-current
                text-base text-gray-400
                hover:text-gray-100
                mx-2
                cursor-pointer
                transition
                duration-100
                ease-out
              "
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#000000"
                            >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
                                />
                            </svg>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <confirm-template :showModal="showModal">
            <template v-slot:title>
                Delete?
            </template>
            <template v-slot:buttons>
                <button
                    @click="deleteUser"
                    class="my-1 transition duration-500 ease-in-out w-full flex justify-center items-center rounded-md border border-transparent shadow-sm px-3 py-1.5 bg-gray-600 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 md:w-auto"
                >
                    Delete
                </button>
                <button
                    @click="showModal = !showModal"
                    class="my-1 transition duration-500 ease-in-out w-full flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-3 py-1.5 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 md:w-auto md:mr-4"
                >
                    Cancel
                </button>
            </template>
        </confirm-template>
        <register-employee :addEmployee="addEmployee"></register-employee>
        <loader></loader>
        <the-footer></the-footer>
    </div>
</template>

<script>
import AdminHeader from "./AdminHeader";
import TheFooter from "../Footer";
import ConfirmMessageTemplate from "../Templates/ConfirmMessageTemplate";
import Loader from "../Loader";
import RegisterEmployees from "./RegisterEmployees";
export default {
    components: {
        "admin-header": AdminHeader,
        "the-footer": TheFooter,
        "confirm-template": ConfirmMessageTemplate,
        loader: Loader,
        "register-employee": RegisterEmployees
    },
    data() {
        return {
            deleteUserWithID: "",
            showModal: false,
            section: "User List",
            search: "",
            sort: {
                sortBy: ""
            }
        };
    },
    methods: {
        deleteUser() {
            this.showModal = !this.showModal;
            //finally deleting the user -- module F
            this.$store.dispatch("removeUser", {
                params: { id: this.deleteUserWithID }
            });
        },
        getDeleteID(event) {
            /*When you click an SVG (the delete one), sometimes you click the parent SVG element and
            sometimes you click the path. The aim is get the id of the parent SVG element.
            Paths have no ids on them, so in case we click a path, we should navigate up to the parent
            element which has the id we're looking for.*/
            let id = event.target.id;
            //if id!=empty string meaning--> we didn't click a path.
            if (id) {
                //we store the id to our data.
                this.deleteUserWithID = id;
                //we then show the confirmation modal
                this.showModal = !this.showModal;
            }
            //else we clicked a path - so we go up to the parent element.
            else {
                id = event.target.parentElement.id;
                //we store the id to our data.
                this.deleteUserWithID = id;
                //we then show the confirmation modal
                this.showModal = !this.showModal;
            }
        },
        //display the register form by mutating our state - module F
        addEmployee() {
            this.$store.commit("hideShowEmployeeForm");
        }
    },
    computed: {
        getUsersRandom() {
            return this.$store.state.f.userList;
        },
        deleteSuccessful() {
            return this.$store.state.f.deleteSuccessful;
        }
    },
    created() {
        /* dispatching an action(module F) that will get a list of all the users.*/

        this.$store.dispatch("getUserList");
    }
};
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.5s ease;
}

.slide-fade-leave-active {
    transition: all 0.8s ease-in-out;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(20px);
    opacity: 0;
}
@media (max-width: 767.9px) {
    .table-cont {
        width: 95%;
    }
}
@media (min-width: 768px) {
    .table-cont {
        width: 90%;
    }
}
</style>
