import axios from "axios";

//THIS MODULE MAINLY DEALS WITH THE USER SIDE COMPONENTS.
export const moduleC = {
    state: {
        loggedInUserInfo: "",
        all_questions: ""
    },
    mutations: {
        //adding the questions to the state
        loadQuestions(state, paylaod) {
            state.all_questions = paylaod;
            console.log(state.all_questions);
        },
        //laod user info
        loadUserInfo(state, payload) {
            state.loggedInUserInfo = payload;
        }
    },
    actions: {
        //fetching the log in user info.
        getAuthenticatedUserInfo(context) {
            axios.get("/api/user").then(res => {
                context.commit("loadUserInfo", res.data);
            });
        },
        //fetching all the survey questions
        getSurveyQuestions(context) {
            axios.get("/api/get_questions").then(res => {
                context.commit("loadQuestions", res.data);
            });
        }
    }
};