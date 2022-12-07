<script setup lang="ts">
import Cookies from 'js-cookie';
import { ref } from 'vue';
import { createCart, getCart } from '../../apis/cart';
import { useCartStore } from '../../pinia/pinia';
import router from '../../router/router';
import { getCollections } from '../../apis/product';
import { ICollection } from '../../interfaces/ICollection';

const store = useCartStore();

const isShowDrawer = ref(false);
const menuCollapse = ref(false);
const collections = ref<ICollection[]>([]);

const getCartInfo = async () => {
  let cartId: string = Cookies.get('cart_id');
  if (!cartId) {
    await createCart().then((res) => {
      cartId = res.cart.id;
      Cookies.set('cart_id', cartId);
    });
  }
  if (!store.cart.id) {
    await getCart(cartId).then((res) => {
      store.cart = res.cart;
    });
  }
};

getCartInfo();

const toCartMain = () => {
  router.push('/shopping-bag');
};

const setMenu = () => {
  const width = window.innerWidth;
  if (width <= 768) {
    isShowDrawer.value = true;
  }
};

setMenu();

const openDrawer = () => {
  menuCollapse.value = true;
};

const closeDrawer = () => {
  menuCollapse.value = false;
};

getCollections().then((res) => {
  collections.value = res.collections;
});
</script>

<template>
  <div class="layoutHeader">
    <div class="navLink">
      <el-menu
        mode="horizontal"
        :collapse="menuCollapse"
        :default-active="$route.meta.menu"
        router
        v-if="!isShowDrawer"
      >
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/products">Products</el-menu-item>
        <el-sub-menu index="collections">
          <template #title>Collections</template>
          <el-menu-item
            v-for="collection in collections"
            :key="collection"
            :index="'/collection/' + collection.id"
          >
            {{ collection.title }}
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
      <svg
        v-if="isShowDrawer"
        class="icon"
        aria-hidden="true"
        @click="openDrawer"
      >
        <use xlink:href="#icon-category"></use>
      </svg>
      <el-drawer
        v-if="isShowDrawer"
        v-model="menuCollapse"
        direction="ltr"
        size="40%"
        :show-close="false"
        :with-header="false"
      >
        <el-menu
          :collapse="menuCollapse"
          :default-active="$route.meta.menu"
          router
          class="menu"
        >
          <el-menu-item @click="closeDrawer" index="/">Home</el-menu-item>
          <el-menu-item @click="closeDrawer" index="/products"
            >Products</el-menu-item
          >
          <el-sub-menu index="collections">
            <template #title>Collections</template>
            <el-menu-item
              v-for="collection in collections"
              :key="collection"
              :index="'/collection/' + collection.id"
              @click="closeDrawer"
            >
              {{ collection.title }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-drawer>
    </div>
    <div class="cart" @click="toCartMain">
      <svg class="icon" aria-hidden="true">
        <use
          :xlink:href="
            store.number === 0 ? '#icon-cart-Empty' : '#icon-cart-full'
          "
        ></use>
      </svg>
      <span class="cart-num">{{ store.number }}</span>
    </div>
  </div>
</template>

<style scoped lang="sass">
.layoutHeader
    height: 100%
    display: flex
    align-items: center
    justify-content: space-between
    .navLink
        width: 35vw
        .icon
          font-size: 1.8em
        .el-menu
          border-right: none
          width: 100%
    .cart
        font-size: 1.8em
        display: flex
        align-items: center
        cursor: pointer
        .cart-num
            margin-left: 0.2em
            font-size: 0.65em
</style>
