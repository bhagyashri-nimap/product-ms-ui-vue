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
    {
        path: "/login",
        name: "login",
        component: () => import("./components/Login")
    }, 
    {
        path: "/productList",
        name: "productList",
        component: () => import("./components/ProductList")
    }, 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;