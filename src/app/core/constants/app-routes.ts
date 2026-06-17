export class AppRoutes {
    public readonly productsApi = {
        products: {
            get: {
                all: "products/all"
            }
        },
        product: {
            create: "product/create",
            get: (id: string) => `product/${id}`,
            update: (id: string) => `product/${id}`,
            delete: (id: string) => `product/${id}`
        }
    }
}

export default new AppRoutes();