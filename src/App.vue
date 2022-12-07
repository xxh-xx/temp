<script setup lang="ts">
import './assets/js/iconfont.js';

import LayoutHeader from './components/layout/LayoutHeader.vue';
</script>

<template>
    <el-container>
        <el-header>
            <LayoutHeader></LayoutHeader>
        </el-header>
        <el-main>
            <RouterView></RouterView>
        </el-main>
    </el-container>
</template>

<style scoped lang="sass">
.el-container
    .el-header
        border-bottom: 1px solid rgb(217 223 232)
        background-color: #ffffff
        z-index: 100
        position: sticky
        top: 0px
    .el-main
        padding: 0px
</style>
