<script setup lang="ts">
import { FormRules, FormInstance } from 'element-plus';
import { add, divide } from 'lodash-es';
import { storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';
import { useCartStore } from '../../pinia/pinia';

const store = useCartStore();

const { cart } = storeToRefs(store);

const activeName = ref('contact');

const contactFormRef = ref<FormInstance>();

const orderInfo = reactive({
  email: '',
  firstName: '',
  lastName: '',
  company: '',
  address_1: '',
  address_2: '',
  postal_code: '',
  phone: '',
  shipping_total: 1500,
});

const rules = reactive<FormRules>({
  email: [
    { required: true, message: 'This field is required', trigger: 'blur' },
    {
      pattern:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Email format error',
      trigger: 'blur',
    },
  ],
  firstName: {
    required: true,
    message: 'This field is required',
    trigger: 'blur',
  },
  lastName: {
    required: true,
    message: 'This field is required',
    trigger: 'blur',
  },
  address_1: {
    required: true,
    message: 'This field is required',
    trigger: 'blur',
  },
  postal_code: {
    required: true,
    message: 'This field is required',
    trigger: 'blur',
  },
  shipping_total: {
    required: true,
    message: 'This field is required',
    trigger: 'blur',
  },
});

const getPrice = (price: number) => `${divide(price, 100)} USD`;
</script>

<template>
  <div class="cartCheckOut">
    <el-row justify="space-between">
      <el-col :sm="14">
        <el-collapse v-model="activeName" class="orderInfo" accordion>
          <el-collapse-item name="contact">
            <template #title>
              <h2>Contact</h2>
            </template>
            <el-form
              :model="orderInfo"
              :rules="rules"
              label-position="top"
              ref="contactFormRef"
            >
              <el-form-item label="Email" prop="email">
                <el-input v-model="orderInfo.email" />
              </el-form-item>
            </el-form>
          </el-collapse-item>
          <el-collapse-item name="address">
            <template #title>
              <h2>Address</h2>
            </template>
            <el-form :model="orderInfo" :rules="rules" label-position="top">
              <div style="display: flex; justify-content: space-between">
                <el-form-item
                  class="name firstName"
                  prop="firstName"
                  label="First name"
                >
                  <el-input v-model="orderInfo.firstName" />
                </el-form-item>
                <el-form-item
                  class="name lastName"
                  prop="lastName"
                  label="Last name"
                >
                  <el-input v-model="orderInfo.lastName" />
                </el-form-item>
              </div>
              <el-form-item label="Company" prop="company">
                <el-input v-model="orderInfo.company" />
              </el-form-item>
              <el-form-item label="Address" prop="address_1">
                <el-input v-model="orderInfo.address_1" />
              </el-form-item>
              <el-form-item label="Apartment, suite, etc." prop="address_2">
                <el-input v-model="orderInfo.address_2" />
              </el-form-item>
              <el-form-item label="ZIP / Postal Code" prop="postal_code">
                <el-input v-model="orderInfo.postal_code" />
              </el-form-item>
              <el-form-item label="Phone" prop="phone">
                <el-input v-model="orderInfo.phone" />
              </el-form-item>
            </el-form>
          </el-collapse-item>
          <el-collapse-item name="deliveryMethod">
            <template #title>
              <h2>Delivery Method</h2>
            </template>
            <el-form :model="orderInfo" :rules="rules">
              <el-form-item prop="shipping_total">
                <el-radio-group v-model="orderInfo.shipping_total">
                    <el-radio border :label="1500">
                        <span>
                            PostFake Express
                            <span style="font-size: 0.5em;font-weight: 300;">15 USD</span>
                        </span>
                    </el-radio>
                    <el-radio border :label="1000">
                        <span>
                            PostFake Standard
                            <span style="font-size: 0.5em;font-weight: 300;">10 USD</span>
                        </span>
                    </el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </el-collapse-item>
          <el-collapse-item name="payment">
            <template #title>
              <h2>Payment</h2>
            </template>
            <el-button style="width: 100%" type="info">
              Test Payment
            </el-button>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :sm="9">
        <el-card class="cartCard" shadow="never">
          <el-scrollbar max-height="700px" class="cartItems">
            <div class="cartItem" v-for="item in cart.items" :key="item.id">
              <el-image class="itemImage" :src="item.thumbnail" />
              <div class="info">
                <div>
                  <div class="top">
                    <h4>{{ item.title }}</h4>
                    <p class="unitPrice">{{ getPrice(item.unit_price) }}</p>
                  </div>
                  <p class="variant">Variant: {{ item.variant.title }}</p>
                </div>
                <div>
                  <p class="quantity" style="margin-bottom: 0.8em">
                    Quantity: {{ item.quantity }}
                  </p>
                  <p class="total">Total: {{ getPrice(item.total) }}</p>
                </div>
              </div>
            </div>
          </el-scrollbar>
          <el-divider />
          <div class="priceInfo" style="margin-bottom: 1em">
            <p>Subtotal</p>
            <p>{{ getPrice(cart.subtotal!) }}</p>
          </div>
          <div class="priceInfo">
            <p>Shipping</p>
            <p>{{ getPrice(orderInfo.shipping_total) }}</p>
          </div>
          <el-divider />
          <div class="priceInfo">
            <p>Total</p>
            <p>{{ getPrice(add(cart.total!, orderInfo.shipping_total)) }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="sass">
.cartCheckOut
    min-height: 100vh
    background-color: rgb(238 240 245)
    padding: 2em 4em
    .orderInfo
        padding: 1.5em
        background-color: rgb(255 255 255)
        .name
            flex-grow: 0.45
    .cartCard
        .cartItems
            .cartItem
                display: flex
                margin-bottom: 1.5em
                .itemImage
                    width: 9.6vw
                    height: 12vw
                .info
                    display: flex
                    flex-direction: column
                    flex-grow: 1
                    margin-left: 1em
                    justify-content: space-between
                    h4
                        margin: 0px
                    p
                        margin: 0px
                        font-size: 0.9em
                    .top
                        display: flex
                        justify-content: space-between
                        align-items: center
                        margin-top: 0.2em
                        margin-bottom: 0.8em
        .priceInfo
            display: flex
            justify-content: space-between
            align-items: center
            p
                margin: 0px
                font-size: 0.9em

@media screen and (max-width: 768px)
  .cartCheckOut
    padding: 1em
    .el-row
      flex-direction: column-reverse
      .el-col
        margin-bottom: 2em
        .el-radio
          margin-bottom: 1em
        .cartItem
          .itemImage
            width: 22vw
            height: auto
</style>
