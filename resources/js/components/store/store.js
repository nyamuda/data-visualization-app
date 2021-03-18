import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        category1: [{
                title: "Hom satisfied are you with your team",
                title_id: 1
            },
            {
                title: "how much do you like your cofee",
                title_id: 2
            },
            {
                title: "Do you like the work environment",
                title_id: 3
            },
            { title: "Do you like your boss", title_id: 4 },
            {
                title: "How satisfied are you with your daily work",
                title_id: 5
            }
        ],
        category2: [{
                title: "Do you like the work environment",
                title_id: 1
            },
            { title: "Do you like your boss", title_id: 2 },
            {
                title: "How satisfied are you with your daily work",
                title_id: 3
            }
        ],
        category3: [
            { title: "Do you like your boss", title_id: 1 },
            {
                title: "How satisfied are you with your daily work",
                title_id: 2
            }
        ],
        show_Categories: {
            showOne: true,
            showTwo: false,
            showThree: false
        }
    },
    mutations: {
        nextFirstCategory: state => {
            state.show_Categories.showTwo = true;
            state.show_Categories.showOne = false;
            state.show_Categories.showThree = false;
        },
        nextSecondCategory: state => {
            state.show_Categories.showThree = true;
            state.show_Categories.showTwo = false;
            state.show_Categories.showOne = false;
        },
        prevSecondCategory: state => {
            state.show_Categories.showOne = true;
            state.show_Categories.showTwo = false;
            state.show_Categories.showThree = false;
        },
        prevThirdCategory: state => {
            state.show_Categories.showOne = false;
            state.show_Categories.showTwo = true;
            state.show_Categories.showThree = false;
        }
    }
});