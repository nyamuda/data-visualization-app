import axios from "axios";
import router from "../../../router";
//THIS MODULE MAINLY DEALS WITH THE USERLIST COMPONENT.
export const moduleF = {
    state: {
        userList: "",
        updateSuccessful: false,
        deleteSuccessful: false,
        errorMessage: "",
        hideShowEmployeeForm: false,
        oneUserInfo: {
            first_name: "",
            second_name: "",
            date_birth: "",
            education: "",
            start_at_company: "",
            gender: "",
            position_at_company: "",
            email: "",
            id: ""
        }
    },
    mutations: {
        userList(state, payload) {
            state.userList = payload;
        },
        getOneUser(state, payload) {
            //there is only one item in an array
            state.oneUserInfo = payload[0];
        },
        success(state, payload) {
            //showing the success notification.
            state[payload] = !state[payload];
            //disabling the success notification ater 3 sec.
            setTimeout(() => {
                state[payload] = !state[payload];
            }, 3000);
        },

        errorMessage(state, payload) {
            //diplay errors if they exists.
            state.errorMessage = payload.response.data.errors;
        },
        hideShowEmployeeForm(state) {
            state.hideShowEmployeeForm = !state.hideShowEmployeeForm;
        }
    },
    actions: {
        getUserList(context) {
            //showing the loader - module C
            context.commit("loaderStatus");
            axios
                .get("/api/user_list")
                .then(res => {
                    // console.log(res.data);
                    //invoking a mutation that will save a list of users to the state.
                    context.commit("userList", res.data);
                    //hiding the loader - module C
                    context.commit("loaderStatus");
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //getting info of one user with a given ID
        getOneUser(context, payload) {
            //showing the loader -module C
            context.commit("loaderStatus");
            axios
                .post("/api/one_user_info", payload)
                .then(res => {
                    //hiding the loader -module C
                    context.commit("loaderStatus");
                    //invoking a mutation that will save the user info to the state.
                    context.commit("getOneUser", res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        updateUserInfo(context) {
            //showing the loader -module C
            context.commit("loaderStatus");
            axios
                .post("/api/update_user", context.state.oneUserInfo)
                .then(res => {
                    //hiding the loader -module C
                    context.commit("loaderStatus");
                    //invoking the success notification
                    context.commit("success", "updateSuccessful");

                    //and we navigate to the list of users after 1 second of success.
                    setTimeout(() => router.push({ name: "user_list" }), 1000);
                })
                .catch(err => {
                    //show error if there are some
                    context.commit("errorMessage", err);
                });
        },
        removeUser(context, payload) {
            //showing the loader -module C
            context.commit("loaderStatus");
            axios
                .delete("/api/delete_user", payload)
                .then(res => {
                    //hiding the loader -module C
                    context.commit("loaderStatus");
                    //invoking the delete success notification

                    context.commit("success", "deleteSuccessful");

                    //getting fresh user list
                    context.commit("userList", res.data);
                })
                .catch(err => {
                    //show error if there are some
                    console.log(err);
                });
        }
    }
};