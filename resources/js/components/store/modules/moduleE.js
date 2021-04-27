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
            //those who did not complete
            let leftUsers = Number(
                state.userAnswered.totalUsers -
                    state.userAnswered.completedUsers
            );
            //those who completed
            let goodUsers = Number(state.userAnswered.completedUsers);
            //returning an array for use in the 'TotalUsersChart' component.
            return [goodUsers, leftUsers];
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
