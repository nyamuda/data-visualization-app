import axios from "axios";

//THIS MODULE MAINLY DEALS WITH THE ADMIN COMPONENTS.
export const moduleB = {
    state: {
        all_names: "",
        registerComp: false,
        newQuestionComp: false,
        dashBoardComp: false
    },
    mutations: {
        //adding the survey and categories names to the state
        allNames(state, paylaod) {
            state.all_names = paylaod;
        },
        changeAdminComponent() {}
    },
    actions: {
        //getting all the question survey names, question_type names and category names from the database.
        getNames(context) {
            axios
                .get("/api/get_names")
                .then(res => {
                    console.log(res.data);

                    /*invoking the mutation that will add all the survey names, question_type names 
                    and category names to the state from the database */
                    context.commit("allNames", res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }

        //registering a default user
        /*
        addDefaultUser(context) {
            axios
                .get("/api/add_default_user")
                .then(res => {
                    //console.log(res)
                })
                .catch(err => {
                    console.log(err);
                });
        } */
    }
};