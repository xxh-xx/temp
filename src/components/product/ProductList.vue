<script setup lang="ts">
import { divide } from 'lodash-es';
import { ref, watch } from 'vue';
import { getProducts } from '../../apis/product';
import { IProduct } from '../../interfaces/IProduct';
import router from '../../router/router';

const productLoading = ref(true);
const products = ref<IProduct[]>([]);

const props = defineProps({
  limit: {
    type: Number,
    required: true,
  },
  collectionId: {
    type: Array<string>,
    required: false,
  },
  newProduct: {
    type: Array<IProduct>,
    required: false,
  },
});

const toProduct = (id: string) => {
  router.push(`/product/${id}`);
  window.scrollTo(0, 0);
};

const productsEmit = defineEmits(['getProducts']);

getProducts(props.limit, props.collectionId).then((res) => {
  products.value = res.products;
  productLoading.value = false;
  productsEmit('getProducts', products.value);
});

watch(() => props.newProduct, (value) => {
  products.value = value!;
}, { deep: true });
</script>

<template>
  <el-skeleton animated :loading="productLoading" :throttle="200">
    <template #template>
      <el-row>
        <el-col style="padding: 0px 1em;" :sm="6" v-for="index in 4" :key="index">
          <el-skeleton-item style="width: 100%;height: 30vh" variant="image" />
          <div style="display: flex;justify-content:space-between;margin: 0.8em 0px">
            <el-skeleton-item
              style="width: 40%;height: 1.2em;"
            />
            <el-skeleton-item
              style="width: 40%;height: 1.2em;"
            />
          </div>
        </el-col>
      </el-row>
    </template>
    <template #default>
      <el-row class="products">
        <el-col
          :sm="6"
          class="product"
          v-for="product in products"
          :key="product.id"
          @click="toProduct(product.id!)"
        >
          <el-image class="thumbnail" :src="product.thumbnail" />
          <div class="product-info">
            <div class="product-title">{{ product.title }}</div>
            <div class="product-price">
              {{ divide(product.variants![0].prices[0].amount, 100) }} USD
            </div>
          </div>
        </el-col>
      </el-row>
    </template>
  </el-skeleton>
</template>

<style scoped lang="sass">
.products
  .product
    margin-bottom: 2em
    > *
      cursor: pointer
      padding-right: 1em
    .thumbnail
      border-radius: 0.5em
      &:hover
        opacity: 0.7
    .product-info
      display: flex
      justify-content: space-between
      margin-top: 0.3em
      .product-title
        font-weight: 400
      .product-price
        font-weight: 600

@media screen and (max-width: 768px)
  .products
    .product
      > *
        padding-right: 0em
</style>
