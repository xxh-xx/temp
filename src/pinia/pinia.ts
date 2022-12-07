import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { sumBy } from 'lodash-es';
import { ICart } from '../interfaces/ICart';

const useCartStore = defineStore('cart', () => {
  const cart = ref<ICart>({});
  const number = computed(() => sumBy(cart.value.items, (item) => item.quantity));

  return {
    cart,
    number,
  };
});

export {
  useCartStore,
};
