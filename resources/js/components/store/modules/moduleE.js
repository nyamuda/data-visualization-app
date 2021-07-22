import axios from "axios";

//THIS MODULE MAINLY DEALS WITH THE CHART COMPONENTS.
export const moduleE = {
    state: {
        check: "",
        userAnswered: {
            totalUsers: 0,
            completedUsers: 0
        },
        categoryBreakDown: [{
                name: "Very Unhappy",
                id: "s1",
                points: [
                    { x: "Equitable Treatment", y: 230 },
                    { x: "Mutual Support", y: 240 },
                    { x: "Confidence in Redress", y: 267 },
                    { x: "Workplace Fairness", y: 238 },
                    { x: "Organizational Belonging", y: 238 }
                ]
            },
            {
                name: "Unhappy",
                points: [
                    { x: "Equitable Treatment", y: 130 },
                    { x: "Mutual Support", y: 140 },
                    { x: "Confidence in Redress", y: 167 },
                    { x: "Workplace Fairness", y: 138 },
                    { x: "Organizational Belonging", y: 138 }
                ]
            },
            {
                name: "Neutral",
                points: [
                    { x: "Equitable Treatment", y: 30 },
                    { x: "Mutual Support", y: 40 },
                    { x: "Confidence in Redress", y: 67 },
                    { x: "Workplace Fairness", y: 38 },
                    { x: "Organizational Belonging", y: 28 }
                ]
            },
            {
                name: "Happy",
                points: [
                    { x: "Equitable Treatment", y: 23 },
                    { x: "Mutual Support", y: 24 },
                    { x: "Confidence in Redress", y: 167 },
                    { x: "Workplace Fairness", y: 231 },
                    { x: "Organizational Belonging", y: 28 }
                ]
            },
            {
                name: "Very Happy",
                points: [
                    { x: "Equitable Treatment", y: 30 },
                    { x: "Mutual Support", y: 24 },
                    { x: "Confidence in Redress", y: 217 },
                    { x: "Workplace Fairness", y: 211 },
                    { x: "Organizational Belonging", y: 22 }
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
            /*Take a look at the categoryBreakdown data in our state...the data came directly from the chart (taken from chart.js) as default data. Thus we should organise the
            data coming from the database in that way.*/
            let my_points = state.categoryBreakDown;
            /*all chart.js chart have an id of 's1' on the first object. SEE the categoryBreakdown above.*/
            let id = "s1";
            let final = my_points.reduce((acc, next) => {
                acc.push({
                    //next.name are the names lik eHappy, Neutral etc
                    name: next.name,
                    //assigning an id 's1' to the first object
                    id: next.name == "Very Unhappy" ? id : "",
                    points: [{
                            x: "Equitable Treatment",
                            /*some of these properties may not exist/may not be there sometimes.
                            So we assign a value 0 instead.*/
                            y: payload[next.name]["Equitable Treatment"] ?
                                payload[next.name]["Equitable Treatment"] :
                                0
                        },
                        {
                            x: "Mutual Support",
                            /*some of these properties may not exist/may not be there at sometimes.
                            So we assign a value 0 instead.*/
                            y: payload[next.name]["Mutual Support"] ?
                                payload[next.name]["Mutual Support"] :
                                0
                        },
                        {
                            x: "Confidence in Redress",
                            /*some of these properties may not exist/may not be there at sometimes.
                            So we assign a value 0 instead.*/
                            y: payload[next.name]["Confidence in Redress"] ?
                                payload[next.name]["Confidence in Redress"] :
                                0
                        },
                        {
                            x: "Workplace Fairness",
                            /*some of these properties may not exist/may not be there at sometimes.
                            So we assign a value 0 instead.*/
                            y: payload[next.name]["Workplace Fairness"] ?
                                payload[next.name]["Workplace Fairness"] :
                                0
                        },
                        {
                            x: "Organizational Belonging",
                            /*some of these properties may not exist/may not be there at sometimes.
                            So we assign a value 0 instead.*/
                            y: payload[next.name]["Organizational Belonging"] ?
                                payload[next.name]["Organizational Belonging"] :
                                0
                        }
                    ]
                });
                return acc;
            }, []);

            state.categoryBreakDown = final;
            console.log(final);
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