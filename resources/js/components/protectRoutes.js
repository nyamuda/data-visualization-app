let protectAdminRoutes = (to, from, next) => {
    axios
        .get("/api/authenticated")
        .then(() => next())
        .catch(() => {
            return next({ name: "admin_login" });
        });
};

let protectUserRoutes = (to, from, next) => {
    axios
        .get("/api/authenticated")
        .then(() => next())
        .catch(() => {
            return next({ name: "login" });
        });
};

export { protectAdminRoutes, protectUserRoutes };
