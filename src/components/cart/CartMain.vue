<script setup lang="ts">
import { divide, debounce } from 'lodash-es';
import { storeToRefs } from 'pinia';
import { useCartStore } from '../../pinia/pinia';
import { updateItem, deleteItem } from '../../apis/cart';
import router from '../../router/router';

const store = useCartStore();

const { cart } = storeToRefs(store);

const getPrice = (price: number) => `${divide(price, 100)} USD`;

const deleteCartItem = (lineId: string) => {
  deleteItem(cart.value.id!, lineId).then((res) => {
    store.cart = res.cart;
  });
};

const changeQuantity = debounce((quantity: number, lineId: string) => {
  if (quantity === 0) {
    deleteCartItem(lineId);
    return;
  }
  updateItem(cart.value.id!, lineId, quantity).then((res) => {
    store.cart = res.cart;
  });
}, 500);

const toCheckout = () => {
  router.push('/checkout');
};
</script>

<template>
  <div class="cartMain">
    <el-empty description="Your cart is empty" v-if="(cart.items?.length === 0)" />
    <el-row v-if="(cart.items?.length !== 0)">
      <el-col :sm="16">
        <h2>Shopping Bag</h2>
        <div class="cartItems">
          <div class="cartItem" v-for="item in cart.items" :key="item.id">
            <el-image class="itemImg" :src="item.thumbnail" />
            <div class="itemInfo">
              <div class="top">
                <div class="header">
                  <p class="title">{{ item.title }}</p>
                  <svg
                    class="icon"
                    aria-hidden="true"
                    @click="deleteCartItem(item.id)"
                  >
                    <use xlink:href="#icon-close"></use>
                  </svg>
                </div>
                <p class="description">
                  {{ item.variant.product.description }}
                </p>
                <p class="variantTitle">
                  <span class="text">Variant:</span>
                  {{ item.variant.title }}
                </p>
              </div>
              <div class="bottom">
                <p class="unit_price">{{ getPrice(item.total) }}</p>
                <el-input-number
                  :min="0"
                  size="small"
                  v-model="item.quantity"
                  @change="changeQuantity(item.quantity, item.id)"
                />
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :sm="8">
        <el-affix :offset="130" target=".cartItems">
          <el-card class="order-card">
            <template #header>
              <div class="order-card-header">
                <h3>Order Summary</h3>
                <div class="order-card-header-list" style="margin-bottom: 1em">
                  <span>Subtotal</span>
                  <span>{{ getPrice(cart.subtotal!) }}</span>
                </div>
                <div class="order-card-header-list">
                  <span>Estimated shipping</span>
                  <span>10 USD</span>
                </div>
              </div>
            </template>
            <div class="order-card-header-list">
              <span style="margin-bottom: 1.5em">Total</span>
              <span>{{ getPrice(cart.subtotal! + 1000) }}</span>
            </div>
            <el-button type="info" style="width: 100%" @click="toCheckout()"
              >Checkout</el-button
            >
          </el-card>
        </el-affix>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="sass">
.cartMain
    margin: 1em 6em
    .cartItems
        margin-right: 5em
        .cartItem
            display: flex
            margin-bottom: 2em
            .itemImg
                width: 9.6vw
                height: 12vw
                border-radius: 0.2em
            .itemInfo
                display: flex
                flex-direction: column
                justify-content: space-between
                padding: 0.2em 1.3em
                flex-grow: 1
                .top
                    .header
                        display: flex
                        justify-content: space-between
                        align-items: center
                        .title
                            font-weight: 600
                            margin: 0px
                        .icon
                            font-size: 0.8em
                            cursor: pointer
                    .description
                        font-weight: 300
                        font-size: 0.9em
                    .variantTitle
                        font-weight: 300
                        .text
                            color: rgb(137 149 156)
                .bottom
                    display: flex
                    justify-content: space-between
                    align-items: center
                    .unit_price
                        font-weight: 600
                        font-size: 0.9em
                        margin: 0px
    .order-card
        .order-card-header-list
            display: flex
            justify-content: space-between
            font-size: 0.9em
@media screen and (max-width: 768px)
  .cartMain
    margin: 0px
    padding-left: 1em
    .cartItems
      width: 100%
      .cartItem
        margin-bottom: 1em
        .itemImg
          width: 30vw
          height: auto
        .itemInfo
          flex-grow: 1
          .description
            display: none
  .order-card
    margin-right: 1em
    margin-bottom: 1em
</style>
