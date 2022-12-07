import { request } from '../utils/request';

const getProducts = (limit: number, collectionId?: string[]) => request('/store/products', {
  method: 'get',
  params: {
    limit,
    collection_id: collectionId,
  },
});

const getProductById = (url : string, id : string) => request(`${url}/${id}`, {
  method: 'get',
});

const getVariants = (ids?:string, limit?:number, title?:string|string[]) => request('/store/variants', {
  method: 'get',
  params: {
    ids,
    limit,
    title,
  },
});

const getCollections = (limit?: number) => request('/store/collections', {
  method: 'get',
  params: {
    limit,
  },
});

export {
  getProducts,
  getProductById,
  getVariants,
  getCollections,
};
