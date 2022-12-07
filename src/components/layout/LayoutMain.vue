<script setup lang="ts">
import router from '../../router/router';
import ProductList from '../product/ProductList.vue';

const displayImg = new URL('../../assets/images/hero-merch.png', import.meta.url).href;

const toAllProduct = () => {
  router.push('/products');
};
</script>

<template>
    <div class="layoutMain">
        <div class="displayInfo">
            <el-skeleton animated :loading="false" :throttle="500">
                <template #template>
                    <el-skeleton-item class="skeletonImg" variant="image" />
                </template>
                <template #default>
                    <el-image class="displayImg" :src="displayImg" fit="cover" />
                </template>
            </el-skeleton>
            <div>
                <h1>Summer styles are finally here</h1>
                <p>
                    This year, our new summer collection will
                    shelter you from the harsh elements of a
                    world that doesn't care if you live or die.
                </p>
                <el-button class="displayButton" type="info">Learn more</el-button>
            </div>
        </div>
        <div class="productsDisplay">
            <div class="title">
                <div class="left">Featured</div>
                <div class="right">
                    <el-link type="info" :underline="false" @click="toAllProduct">
                        Browse all products
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-Rightarrow"></use>
                        </svg>
                    </el-link>
                </div>
            </div>
            <product-list :limit="4"></product-list>
        </div>
    </div>
</template>

<style scoped lang="sass">
.layoutMain
    .displayInfo
        display: flex
        align-items: center
        background-color: rgb(247 247 250)
        padding: 0px 12vw
        .skeletonImg
            margin: 10px 0px
            width: 30vw
            height: 30vw
    .productsDisplay
        margin: 0px 10vw
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
    .displayInfo
        flex-direction: column
        padding-bottom: 5vw !important
        .displayButton
            width: 100%
    .productsDisplay
        margin: 0px 5vw !important
        .left
            font-size: 1.2em !important
</style>
