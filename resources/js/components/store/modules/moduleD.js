import axios from "axios";
import router from "../../../router";
//THIS MODULE MAINLY DEAL WITH THE ANSWERS FOR THE SURVEY..
export const moduleD = {
    state: {
        all_answers: {},
        showThank: false
    },
    mutations: {
        //add the answers to the state
        addAnswers(state, payload) {
            Object.assign(state.all_answers, payload);
        },
        //hid/show the thank you modal
        thankModal(state) {
            state.showThank = !state.showThank;
        }
    },
    actions: {
        //fetching the user answers for the survey questions.
        getAnswers(context, payload) {
            context.commit("addAnswers", payload);
        },
        //saving all the answers to the database
        saveAnswers(context, payload) {
            axios
                .post("/api/add", context.state.all_answers)
                .then(res => {
                    /*If the questions have been succesfully saved to the database,
                    then we can show the thank you modal to the user.*/

                    /*First we stop the page loader by invoking the loaderStatus mutation from module C.*/
                    context.commit("loaderStatus");
                    /*If the user has answered all the categories for a specific survey and they have
                    submitted the last category, then we can thank the user by showing the thank you modal
                    and take them to the home page to see a list of other surveys. */

                    if (payload.cat_length == 1) {
                        context.commit("thankModal");
                    } else {
                        /*else we can't thank the user yet because they haven't answered all the
                    categories for a survey. So after submitting one category, we take them
                    to a list of other unanswered categories for that survey instead.*/
                        router.push("/categories/" + payload.cat_survey_id);

                        //  router.push("/quiz/" + payload.random_category_id);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};