type product = {
    description: string
}

type item = {
    title: string,
    unit_price: number,
    quantity: number,
    id: string,
    thumbnail: string,
    total: number,
    variant: {
        product: product,
        title: string
    }
}

type shippingAddress = {
    address_1: string,
    address_2: string,
    city: string,
    company: string,
    first_name: string,
    last_name: string,
    phone: string,
    postal_code: string,
    province: string,
}

export interface ICart {
    id?: string,
    items?: item[],
    subtotal?: number,
    email?: string,
    shipping_address?: shippingAddress,
    shipping_total?: number,
    total?: number
}
