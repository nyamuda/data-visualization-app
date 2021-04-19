import axios from "axios";

//THIS MODULE MAINLY ANSWERS FOR THE SURVEY..
export const moduleD = {
    state: {
        all_answers: {}
    },
    mutations: {
        //add the answers to the state
        addAnswers(state, payload) {
            Object.assign(state.all_answers, payload);
        }
    },
    actions: {
        //fetching the user answers for the survey questions.
        getAnswers(context, payload) {
            context.commit("addAnswers", payload);
        },
        //saving all the answers to the database
        saveAnswers(context) {
            axios
                .post("/api/add", context.state.all_answers)
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
