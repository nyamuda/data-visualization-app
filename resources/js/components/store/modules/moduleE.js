import axios from "axios";

//THIS MODULE MAINLY DEALS WITH THE CHART COMPONENTS.
export const moduleE = {
    state: {
        userAnswered: {
            totalUsers: 0,
            completedUsers: 0
        }
    },
    mutations: {
        userCompletedSurvey(state, payload) {
            state.userAnswered.totalUsers = payload.totalUsers;
            state.userAnswered.completedUsers = payload.completedUsers;
        }
    },
    getters: {
        /*getting the number of users who did not complete the survey and using that
        with the number of those completed it. */
        userCompleted(state) {
            //total users
            let total = Number(state.userAnswered.totalUsers);

            //those who completed
            let goodUsers = Number(state.userAnswered.completedUsers);

            //percentage of those who completed
            let calculate = (goodUsers / total).toFixed(2) * 100;
            /*When the app is still loading the value of calculate may be be 'NaN'.
            to avoid that:*/
            let percent = calculate ? calculate : 0;

            //returning an object for use in the 'TotalUsersChart' component.
            return { total, goodUsers, percent };
        }
    },
    actions: {
        /*getting information about the total number of student who have answerered the survey. */
        userCompletedSurvey(context) {
            axios.get("/api/users_completed_survey").then(res => {
                context.commit("userCompletedSurvey", res.data);
            });
        }
    }
};
