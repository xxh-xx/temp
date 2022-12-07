<script setup lang="ts">
import {
  reactive, ref,
} from 'vue';
import { filter, forEach, groupBy } from 'lodash-es';
import { CheckboxValueType } from 'element-plus';
import { IProduct } from '../../interfaces/IProduct';
import ProductList from './ProductList.vue';

type value = {
  id: string;
  value: string;
  option_id: string;
  variant_id: string;
};

type option = {
  id?: string;
  title: string;
  product_id: string;
  values?: value[];
};

const limit: number = 8;
const optionGroup = ref<string[]>([]);
const checkboxLabel = reactive<{ [title: string]: string[] }>({});
const isShow = ref(false);
const isOpen = ref(false);
const collectionId = defineProps<{ id: string }>();
const collectionProduct = ref<IProduct[]>([]);
const newProduct = ref<IProduct[]>([]);
const collectionTitle = ref<string>('');

const getProducts = (resultData: IProduct[]) => {
  collectionProduct.value = resultData;
  const options: option[] = [];
  forEach(collectionProduct.value, (item) => {
    options.push(...item.options);
  });
  const tempOptions: { [title: string]: option[] } = groupBy(options, 'title');
  forEach(tempOptions, (item) => {
    const { title } = item[0];
    const optionValues: value[] = [];
    forEach(item, ({ values }) => {
      optionValues.push(...values!);
    });
    checkboxLabel[title] = Object.keys(groupBy(optionValues, 'value'));
  });
  collectionTitle.value = collectionProduct.value[0].collection?.title!;
};

const setShow = () => {
  if (window.innerWidth <= 768) {
    isShow.value = true;
  }
};

setShow();

const openDrawer = () => {
  isOpen.value = !isOpen.value;
};

const filterProduct = (product: IProduct[], filterVal: string) => filter(
  product,
  (item) => filter(
    item.options,
    (optionVal) => filter(
      optionVal.values,
      (val) => filterVal === val.value,
    ).length !== 0,
  ).length !== 0,
);

const filterChange = (filterValue:CheckboxValueType[]) => {
  let product: IProduct[] = [];
  for (let i = 0; i < filterValue.length; i += 1) {
    if (i === 0) {
      product = filterProduct(collectionProduct.value, filterValue[i] as string);
    } else {
      product = filterProduct(product, filterValue[i] as string);
    }
  }

  newProduct.value = [];
  forEach(product, (item) => {
    newProduct.value.push(item);
  });
};
</script>

<template>
  <div class="collectionMain">
    <div class="header">
      <h2>
        {{ collectionTitle }}
      </h2>
      <svg class="icon" aria-hidden="true" v-if="isShow" @click="openDrawer">
        <use xlink:href="#icon-filter"></use>
      </svg>
    </div>
    <el-drawer
      v-model="isOpen"
      direction="rtl"
      size="60%"
      :with-header="false"
      :show-close="false"
    >
      <div v-for="title in Object.keys(checkboxLabel)" :key="title">
        <h4>{{ title }}</h4>
        <el-checkbox-group
          size="large"
          v-model="optionGroup"
          @change="filterChange"
        >
          <el-checkbox
            style="display: block"
            v-for="checkbox in checkboxLabel[title]"
            :key="checkbox"
            :label="checkbox"
          />
        </el-checkbox-group>
      </div>
    </el-drawer>
    <el-divider />
    <el-row class="productMain">
      <el-col class="left hidden-xs-only" :span="3">
        <div v-for="title in Object.keys(checkboxLabel)" :key="title">
          <h4>{{ title }}</h4>
          <el-checkbox-group
            size="large"
            v-model="optionGroup"
            @change="filterChange"
          >
            <el-checkbox
              style="display: block"
              v-for="checkbox in checkboxLabel[title]"
              :key="checkbox"
              :label="checkbox"
            />
          </el-checkbox-group>
        </div>
      </el-col>
      <el-col class="right" :sm="21">
        <ProductList
          @getProducts="getProducts"
          :limit="limit"
          :collectionId="[collectionId.id]"
          :newProduct="(optionGroup.length === 0 ? collectionProduct : newProduct)"
        ></ProductList>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="sass">
.collectionMain
    margin: 2.5em 4vw
    .header
        display: flex
        justify-content: space-between
        align-items: center
        .icon
            font-size: 1.8em
    .productMain
        .left
            padding-right: 10px
@media screen and (max-width: 768px)
    .header
        h2
            font-size: 1.3em
</style>
