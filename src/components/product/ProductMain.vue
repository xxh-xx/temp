<script setup lang="ts">
import { ref, watch } from 'vue';
import {
  divide, toUpper, keyBy, find, forEach,
} from 'lodash-es';
import Cookies from 'js-cookie';
import { getProductById } from '../../apis/product';
import { IProduct } from '../../interfaces/IProduct';
import ProductList from './ProductList.vue';
import { addItem } from '../../apis/cart';
import { useCartStore } from '../../pinia/pinia';

const productId = defineProps<{ id: string }>();

const product = ref<IProduct>({
  title: '',
  profile_id: '',
  images: [{ url: '' }],
  options: [{ title: '', product_id: '' }],
});

type value = {
  id: string;
  value: string;
  option_id: string;
  variant_id: string;
};

const localIndex = ref<number>(0);
const localButton = ref<number[]>([]);
const bagNum = ref<number>(1);
const price = ref<string>('');
const optionValues = ref<string[]>([]);
const isShow = ref(true);

const getOptions = (values: value[]) => Object.keys(keyBy(values, 'value'));

const getProduct = () => {
  getProductById('/store/products', productId.id!).then((res) => {
    product.value = res.product;
    const amount = divide(product.value.variants![0].prices[1].amount, 100);
    const currencyCode = toUpper(
      product.value.variants![0].prices[1].currency_code,
    );
    price.value = `${amount} ${currencyCode}`;
    document.title = product.value.title;
  });
};

getProduct();

watch(productId, () => {
  getProduct();
});

const changeIndex = (index: number) => {
  localIndex.value = index;
};

const changeButton = (optionIndex: number, index: number, title: string) => {
  localButton.value[optionIndex] = index;
  optionValues.value[optionIndex] = title;
};

const addCart = () => {
  if (product.value.options.length === optionValues.value.length) {
    let tempTitle = '';
    forEach(optionValues.value, (item) => {
      if (tempTitle === '') {
        tempTitle = item;
      } else {
        tempTitle = `${tempTitle} / ${item}`;
      }
    });
    const variantId = find(
      product.value.variants,
      (variant) => variant.title === tempTitle,
    )?.id;
    const store = useCartStore();
    addItem(Cookies.get('cart_id'), variantId!, bagNum.value).then((res) => {
      store.cart = res.cart;
    });
  }
};

const setShow = () => {
  if (window.innerWidth <= 768) {
    isShow.value = false;
  }
};

setShow();
</script>

<template>
  <div class="productMain">
    <div class="productInfo">
      <div class="thumbnails">
        <el-image
          class="thumbnail"
          :class="localIndex === index ? 'active' : ''"
          v-for="(image, index) in product.images"
          :key="image.id"
          :src="image.url"
          @click="changeIndex(index)"
        />
      </div>
      <el-image v-if="isShow" class="productImage" :src="product.images[localIndex].url" />
      <el-carousel height="50vh" :autoplay="false" arrow="always">
        <el-carousel-item v-for="item in product.images" :key="item.id">
          <el-image class="productImage" :src="item.url" />
        </el-carousel-item>
      </el-carousel>
      <span class="number">{{
        `${localIndex + 1} / ${product.images.length}`
      }}</span>
      <div class="productText">
        <h1 class="title">{{ product.title }}</h1>
        <p class="price">{{ price }}</p>
        <p class="description">{{ product.description }}</p>
        <div
          class="options"
          v-for="(option, optionIndex) in product.options"
          :key="option.id"
        >
          <div class="optionTitle">
            {{ `Select ${option.title}` }}
          </div>
          <el-button
            v-for="(value, index) in getOptions(option.values!)"
            :key="index"
            size="large"
            color="#89959C"
            :plain="localButton[optionIndex] !== index"
            @click="changeButton(optionIndex, index, value)"
          >
            {{ value }}
          </el-button>
        </div>
        <div class="addBag">
          <el-input-number
            style="line-height: 0px"
            v-model="bagNum"
            :min="1"
            value-on-clear="min"
            size="large"
          />
          <el-button
            class="addButton"
            size="large"
            color="#89959C"
            @click="addCart"
          >
            Add to bag
          </el-button>
        </div>
        <el-collapse class="detailsCollapse">
          <el-collapse-item class="detailsItem" title="Details" name="1">
            <el-descriptions :border="true" :column="2">
              <el-descriptions-item label="Material">
                {{ product.material ? product.material : "-" }}
              </el-descriptions-item>
              <el-descriptions-item label="Weight">
                {{ product.weight ? product.weight + " g" : "-" }}
              </el-descriptions-item>
              <el-descriptions-item label="Country of origin">
                {{ product.origin_country ? product.origin_country : "-" }}
              </el-descriptions-item>
              <el-descriptions-item label="Dimensions">
                -
              </el-descriptions-item>
              <el-descriptions-item label="Type">
                {{ product.type ? product.type : "-" }}
              </el-descriptions-item>
            </el-descriptions>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="relatedProducts">
      <div class="title">
        <div class="left">You might also like</div>
        <div class="right">
          <el-link type="info" :underline="false" href="/products">
            Browse all products
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Rightarrow"></use>
            </svg>
          </el-link>
        </div>
      </div>
      <ProductList :limit="4" :is-replace="true"></ProductList>
    </div>
  </div>
</template>

<style scoped lang="sass">
.productMain
  padding: 0px 3vw
  overflow: hidden
  .productInfo
    position: relative
    display: flex
    padding-top: 2vw
    .thumbnails
      display: flex
      flex-direction: column
      margin-right: 1.5vw
      .thumbnail
        margin-bottom: 1vw
        width: 5vw
        height: 7vw
        border-radius: 0.5vw
        cursor: pointer
        opacity: 0.7
      .active
        border: 2px solid rgb(217, 223, 232)
        opacity: 1
    .productImage
      width: 30vw
      border-radius: 0.5vw
    .number
      position: absolute
      font-size: 0.9em
      margin-top: 1vw
      left: 34vw
    .productText
      margin-left: 4vw
      width: 40vw
      .price
        font-size: 1.2em
        font-weight: 300
      .description
        font-weight: 300
        line-height: 1.5em
      .options
        .optionTitle
          margin-top: 2em
          margin-bottom: 1em
      .addBag
        display: flex
        margin-top: 2em
        margin-bottom: 4em
        .addButton
          margin-left: 1em
  .relatedProducts
    margin: 0px 7vw
    .title
      margin-top: 8em
      display: flex
      justify-content: space-between
      margin-bottom: 2em
      .left
        color: rgb(55 65 81)
        font-weight: 600
        font-size: 1.6em
      .right
        color: rgb(137 149 156)
        align-self: flex-end
        .icon
          margin-left: 0.2em
@media screen and (max-width: 768px)
  .productInfo
    flex-direction: column
    .thumbnails
      display: none !important
    .productImage
      width: 100% !important
      height: 50vh
    .number
      display: none
    .productText
      width: 100% !important
      margin-left: 0px !important
      .title
        font-size: 1.5em
      .price
        font-size: 1.2em !important
      .description
        font-size: 0.9em
  .relatedProducts
    margin: 0px !important
    .title
      .left
        font-size: 1em !important
</style>
