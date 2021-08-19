import axios from "axios";
import router from "../../../router";
//THIS MODULE MAINLY DEALS WITH THE USERLIST COMPONENT.
export const moduleF = {
    state: {
        userList: "",
        updateSuccessful: false,
        errorMessage: "",
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
        success(state) {
            //showing the success notification.
            state.updateSuccessful = !state.updateSuccessful;
            //disabling the success notification ater 3 sec.
            setTimeout(() => {
                state.updateSuccessful = !state.updateSuccessful;
            }, 3000);
        },
        errorMessage(state, payload) {
            //diplay errors if they exists.
            state.errorMessage = payload.response.data.errors;
        }
    },
    actions: {
        getUserList(context) {
            axios
                .get("/api/user_list")
                .then(res => {
                    // console.log(res.data);
                    //invoking a mutation that will save a list of users to the state.
                    context.commit("userList", res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //getting info of one user with a given ID
        getOneUser(context, payload) {
            axios
                .post("/api/one_user_info", payload)
                .then(res => {
                    // console.log(res.data);
                    //invoking a mutation that will save a list of users to the state.
                    context.commit("getOneUser", res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        updateUserInfo(context) {
            axios
                .post("/api/update_user", context.state.oneUserInfo)
                .then(res => {
                    //invoking the success notification
                    context.commit("success");

                    //and we navigate to the list of users after 1 second of success.
                    setTimeout(() => router.push({ name: "user_list" }), 1000);
                })
                .catch(err => {
                    //show error if there are some
                    context.commit("errorMessage", err);
                });
        },
        removeUser(context, payload) {
            axios
                .delete("/api/delete_user", payload)
                .then(res => {
                    //invoking the success notification

                    context.commit("success");

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