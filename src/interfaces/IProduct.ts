import { ICollection } from './ICollection';

type prices = {
    id: string,
    amount: number,
    variant_id: string,
    currency_code: string
}

type options = {
    id: string,
    value: string,
    option_id: string,
    variant_id: string,
}

type variants = {
    id: string,
    title: string,
    inventory_quantity: number,
    allow_backorder: number,
    manage_inventory: number,
    prices: prices[],
    options: options[]
}

export interface IProduct {
    id?: string,
    title: string,
    description?: string,
    thumbnail?: string,
    weight?: number,
    length?: number,
    height?: number,
    width?: number,
    profile_id: string,
    variants?: variants[],
    material?: string,
    origin_country?: string,
    type?: string,
    options: [
        {
            id?: string,
            title: string,
            product_id: string,
            values?: [
                {
                    id: string,
                    value: string,
                    option_id: string,
                    variant_id: string,
                }
            ]
        }
    ],
    images: [
        {
            id?: string,
            url: string,
        }
    ],
    collection?: ICollection
}
