import {
    createWebHistory,
    createRouter
} from "vue-router";

const routes = [{
        path: "/",
        alias: "/registration",
        name: "registrations",
        component: () => import("./components/Registration")
    },
    // {
    //     path: "/get/:id",
    //     name: "tutorial-details",
    //     component: () => import("./components/Tutorial")
    // },
    {
        path: "/login",
        name: "login",
        component: () => import("./components/Login")
    }, 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;