import axios from "axios";

//THIS MODULE MAINLY DEALS WITH THE ADMIN COMPONENTS.
export const moduleB = {
    state: {
        all_categories: ""
    },
    mutations: {
        //adding the categories names to the state
        allCategories(state, paylaod) {
            state.all_categories = paylaod;
        }
    },
    actions: {
        //getting all the question category names from the database.
        getCategoryNames(context) {
            axios
                .get("/api/get_categories")
                .then(res => {
                    console.log(res.data);

                    /*invoking the mutation that will add all categories names 
                    to the state from the database */
                    context.commit("allCategories", res.data);
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