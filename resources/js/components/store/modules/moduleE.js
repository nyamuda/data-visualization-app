import axios from "axios";

//THIS MODULE MAINLY DEALS WITH THE CHART COMPONENTS.
export const moduleE = {
    state: {
        userAnswered: {
            totalUsers: 0,
            completedUsers: 0
        },
        categoryBreakDown: [{
                name: "Very Happy",
                id: "s1",
                points: [
                    { x: "Equitable Treatment", y: 230 },
                    { x: "Mutual Support", y: 240 },
                    { x: "Confidence in Redress", y: 267 },
                    { x: "Workplace Fairness", y: 238 },
                    { x: "Organisational Belonging", y: 238 }
                ]
            },
            {
                name: "Very Unhappy",
                points: [
                    { x: "Equitable Treatment", y: 130 },
                    { x: "Mutual Support", y: 140 },
                    { x: "Confidence in Redress", y: 167 },
                    { x: "Workplace Fairness", y: 138 },
                    { x: "Organisational Belonging", y: 138 }
                ]
            },
            {
                name: "Neutral",
                points: [
                    { x: "Equitable Treatment", y: 30 },
                    { x: "Mutual Support", y: 40 },
                    { x: "Confidence in Redress", y: 67 },
                    { x: "Workplace Fairness", y: 38 },
                    { x: "Organisational Belonging", y: 28 }
                ]
            },
            {
                name: "Happy",
                points: [
                    { x: "Equitable Treatment", y: 23 },
                    { x: "Mutual Support", y: 24 },
                    { x: "Confidence in Redress", y: 167 },
                    { x: "Workplace Fairness", y: 231 },
                    { x: "Organisational Belonging", y: 28 }
                ]
            },
            {
                name: "Unhappy",
                points: [
                    { x: "Equitable Treatment", y: 30 },
                    { x: "Mutual Support", y: 24 },
                    { x: "Confidence in Redress", y: 217 },
                    { x: "Workplace Fairness", y: 211 },
                    { x: "Organisational Belonging", y: 22 }
                ]
            }
        ]
    },
    mutations: {
        userCompletedSurvey(state, payload) {
            state.userAnswered.totalUsers = payload.totalUsers;
            state.userAnswered.completedUsers = payload.completedUsers;
        },
        dataForAnalysis(state, payload) {
            let category_breakdown = [];
            let very_happy_object = payload.very_happy;
            category_breakdown.push({
                name: "Very Happy",
                id: "s1",
                points: [
                    { x: "Equitable Treatment", y: very_happy_object['Equitable Treatment'].length },
                    { x: "Mutual Support", y: 240 },
                    { x: "Confidence in Redress", y: 267 },
                    { x: "Workplace Fairness", y: 238 },
                    { x: "Organisational Belonging", y: 238 }
                ]
            });
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
        },
        /*getting break down information about the categories from the database*/
        categoryBreakDown(state) {
            return state.categoryBreakDown;
        }
    },
    actions: {
        /*getting information about the total number of student who have answerered the survey. */
        userCompletedSurvey(context) {
            axios.get("/api/users_completed_survey").then(res => {
                context.commit("userCompletedSurvey", res.data);
            });
        },
        /* Getting all the data to be to be analysed from the database*/
        dataForAnalysis(context) {
            axios.get("/api/data_for_analysis").then(res => {
                context.commit("dataForAnalysis", res.data);
            });
        }
    }
};