import { createWebHistory, createRouter } from 'vue-router';
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import ProductDetail from '../views/ProductDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/products', name: 'Products', component: Products },
  { 
    path: "/products/:id", 
    name: "ProductDetail", 
    component: ProductDetail, 
    props: true 
  },
  {
    path: '/:catchAll(.*)', 
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
