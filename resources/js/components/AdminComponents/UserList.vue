<template>
    <div class="flex flex-col h-screen justify-between">
        <admin-header :section="section"></admin-header>
        <div class="mb-10">
            <div
                class="
        m-auto
        flex
        justify-center
        flex-col
        items-center
        md:flex-row
        md:flex-wrap
        md:w-1/2
        md:justify-evenly
        mt-10
        mb-4
        md:mb-2
        p-2
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
                        Order By:
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
            <div class="table-cont overflow-x-auto m-auto">
                <table class="bg-gray-800 text-gray-200 table-auto mt-3">
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
                        <td class="flex py-3 px-4">
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
                                        d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
                                    />
                                </svg>
                            </router-link>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import AdminHeader from "./AdminHeader";
import TheFooter from "../Footer";
export default {
    components: {
        "admin-header": AdminHeader,
        "the-footer": TheFooter
    },
    data() {
        return {
            section: "User List",
            search: "",
            sort: {
                sortBy: ""
            }
        };
    },
    methods: {
        edit_user(event) {
            let id = event.target.parentElement;
            console.log(id);
            // this.$router.push({ path: `/update_user/${id}` });
        }
    },
    computed: {
        getUsersRandom() {
            return this.$store.state.f.userList;
        },
        get_id() {}
    },
    created() {
        /* dispatching an action(module F) that will get a list of all the users.*/

        this.$store.dispatch("getUserList");
    }
};
</script>

<style scoped>
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
