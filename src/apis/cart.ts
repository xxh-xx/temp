import { request } from '../utils/request';

const createCart = () => request('/store/carts', {
  method: 'post',
});

const getCart = (id : string) => request(`/store/carts/${id}`, {
  method: 'get',
});

const addItem = (id: string, variantId: string, quantity: number) => request(`/store/carts/${id}/line-items`, {
  method: 'post',
  data: {
    variant_id: variantId,
    quantity,
  },
});

const updateItem = (id: string, lineId: string, quantity: number) => request(`/store/carts/${id}/line-items/${lineId}`, {
  method: 'post',
  data: {
    quantity,
  },
});

const deleteItem = (id : string, lineId: string) => request(`/store/carts/${id}/line-items/${lineId}`, {
  method: 'delete',
});

export {
  createCart,
  getCart,
  addItem,
  updateItem,
  deleteItem,
};
