import { createRouter, createWebHistory } from 'vue-router';
// Import your components from the "components" folder
import Login from '@/components/LoginPage.vue';
import Register from '@/components/RegistrationPage.vue';
import Home from '@/components/HomePage.vue';
import Delete from '@/components/DeleteCustomers.vue';
import Update from '@/components/UpdateCustomer.vue';
import Read from '@/components/CustomerPage.vue';
import Product from '@/components/ProductPage.vue';
import Kids from '@/components/KidsProducts.vue';
import Men from '@/components/MenProducts.vue';
import Women from '@/components/WomenProducts.vue';
import Cart from '@/components/CartPage.vue';
import Addp from '@/components/AddProduct.vue';
import NewProd from '@/components/NewproductPage.vue';


const routes = [
    {path: '/', name: 'Home',component: Home,},
    {path: '/login', name: 'Login',component: Login,},
    {path: '/register', name: 'Register',component: Register,},
    {path: '/delete', name: 'Delete',component: Delete,},
    {path: '/update', name: 'Update',component: Update,},
    {path: '/read', name: 'CustomerPage',component: Read, meta: { requiresAuth: true }},
    {path: '/cart', name:'Cart', component: Cart, meta: { requiresAuth: true }},
    {path: '/product', name:'Product', component: Product},
    {path: '/kids', name:'Kids', component: Kids},
    {path: '/men', name:'Men', component: Men},
    {path: '/addp', name:'Addp', component: Addp},
    {path: '/newp', name:'NewProd', component: NewProd},
    {path: '/women', name:'Women', component: Women}];
const router = createRouter({history: createWebHistory(),routes,});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('token');
        if (token) {
            // User is authorized, continue to the route
            next();
        } else {
            // User is not authorized, redirect to the login page
            next('/login');
        }
    } else {
        // Route does not require authentication, allow access
        next();
    }
});
export default router;