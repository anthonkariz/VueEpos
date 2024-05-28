import { createRouter,createWebHistory } from "vue-router";

import guestSetup from "../pages/guestSetup.vue";
import Home from "../pages/Home.vue";
import App from "../App.vue";

const routes = [
    {path: "/",
    name: "Home",
     component: Home,
    },
    {path: "/addcustomer",
    name: "AddCustomer",
    component: guestSetup,
     },


]

const router = createRouter({ 
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes });

    export default router;