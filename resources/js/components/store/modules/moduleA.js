//THIS MODULE MAINLY DEALS WITH THE CATEGORY COMP1NTS.

export const moduleA = {
    state: {
        show_Categories: {
            show1: true,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false
        }
    },
    mutations: {
        /* The following mutations change the state of category components.
        For instance, the first mutation 'nextFirstCategory' is invoked
        when the user clicks the next button on the Category1 component.
        If that happens all components are hidden by changing their state to false 
        except for the Category2 component--its set to true, meaning its the one 
        tha will be shown to the user. So in other words the term 'nextFirstCategory' 
        means 'when the user clicks the next button on the first category (Category1) component.
        */

        //if the user clicks the next button on the Category1 component
        nextFirstCategory: state => {
            for (let category in state.show_Categories) {
                if (category === "show2") {
                    //then show the next component ---Category2
                    state.show_Categories[category] = true;
                    //hid all other components
                } else state.show_Categories[category] = false;
            }
        },
        nextSecondCategory: state => {
            for (let category in state.show_Categories) {
                if (category === "show3") {
                    state.show_Categories[category] = true;
                } else state.show_Categories[category] = false;
            }
        },
        prevSecondCategory: state => {
            for (let category in state.show_Categories) {
                if (category === "show1") {
                    state.show_Categories[category] = true;
                } else state.show_Categories[category] = false;
            }
        },
        prevThirdCategory: state => {
            for (let category in state.show_Categories) {
                if (category === "show2") {
                    state.show_Categories[category] = true;
                } else state.show_Categories[category] = false;
            }
        },
        nextThirdCategory: state => {
            for (let category in state.show_Categories) {
                if (category === "show4") {
                    state.show_Categories[category] = true;
                } else state.show_Categories[category] = false;
            }
        },
        prevFourthCategory: state => {
            for (let category in state.show_Categories) {
                if (category === "show3") {
                    state.show_Categories[category] = true;
                } else state.show_Categories[category] = false;
            }
        },
        nextFourthCategory: state => {
            for (let category in state.show_Categories) {
                if (category === "show5") {
                    state.show_Categories[category] = true;
                } else state.show_Categories[category] = false;
            }
        },
        prevFifthCategory: state => {
            for (let category in state.show_Categories) {
                if (category === "show4") {
                    state.show_Categories[category] = true;
                } else state.show_Categories[category] = false;
            }
        },
        nextFifthCategory: state => {
            for (let category in state.show_Categories) {
                if (category === "show6") {
                    state.show_Categories[category] = true;
                } else state.show_Categories[category] = false;
            }
        },
        prevSixthCategory: state => {
            for (let category in state.show_Categories) {
                if (category === "show5") {
                    state.show_Categories[category] = true;
                } else state.show_Categories[category] = false;
            }
        }
    },
    actions: {}
};