import { moduleC } from "./store/modules/moduleC";
import router from "../router";

/*We are you using the same database table 'users' for both users and admins. The table
has a column 'is_admin' and the value is 0 for users and 1 for admins. To prevent
users from switching to the user side to admin side, for any admin page visited,
we first need to determine if the currently logged in person is an admin else we take
them to the admin log page.*/
let protectAdminRoutes = (to, from, next) => {
    //checking if the logged in user is an admin
    axios
        .get("/api/admin_auth")
        .then(() => next())
        .catch(() => {
            return next({ name: "admin_login" });
        });
};

/*The following code does almost the same thing as the one above. To prevent an admin to switch
from the admin side to the user side, for any user page visited, we protect it by first determining
if the currently logged in person is a user else we take them to the user log in page */
let protectUserRoutes = (to, from, next) => {
    axios
        .get("/api/authenticated")
        .then(() => next())
        .catch(() => {
            return next({ name: "login" });
        });
};

export { protectAdminRoutes, protectUserRoutes };
