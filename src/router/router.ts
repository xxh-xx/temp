import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('../components/layout/LayoutMain.vue');
const ProductMain = () => import('../components/product/ProductMain.vue');
const AllProducts = () => import('../components/product/AllPoducts.vue');
const CartMain = () => import('../components/cart/CartMain.vue');
const CartCheckOut = () => import('../components/cart/CartCheckOut.vue');
const CollectionMain = () => import('../components/product/CollectionMain.vue');

const routes : RouteRecordRaw[] = [
  { path: '/', component: Home, meta: { title: 'Home', menu: '/' } },
  {
    path: '/product/:id', component: ProductMain, props: true, meta: { menu: '/products' },
  },
  { path: '/products', component: AllProducts, meta: { title: 'All Products', menu: '/products' } },
  { path: '/shopping-bag', component: CartMain, meta: { title: 'Shopping Bag' } },
  { path: '/checkout', component: CartCheckOut, meta: { title: 'Checkout' } },
  {
    path: '/collection/:id', props: true, component: CollectionMain, meta: { title: 'Collection' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const { title } = to.meta;
  if (title) {
    document.title = title as string;
  }
});

export default router;
