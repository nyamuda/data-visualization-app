import axios from "axios";

//THIS MODULE MAINLY DEAL WITH THE ANSWERS FOR THE SURVEY..
export const moduleD = {
    state: {
        all_answers: {},
        showThank: false,
        confirmModal: false
    },
    mutations: {
        //add the answers to the state
        addAnswers(state, payload) {
            Object.assign(state.all_answers, payload);
        },
        //hid/show the thank you modal
        thankModal(state) {
            state.showThank = !state.showThank;
        },
        //hid/show the confirmation modal
        confirmModal(state) {
            state.confirmModal = !state.confirmModal;
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
                    /*If the questions have been succesfully saved to the database,
                    then we can show the thank you modal to the user.*/

                    /*First we stop the page loader by invoking the loaderStatus mutation from module C.*/
                    context.commit("loaderStatus");

                    //then we show the thank you Modal.
                    context.commit("thankModal");
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
