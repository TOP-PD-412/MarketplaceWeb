import axios from "axios";
import { Product } from "../types/product";
import appConfig from "@/app/core/constants/app-config";
import routes from "@/app/core/constants/app-routes";

export class ProductsApi {
    private readonly baseUrl = `${appConfig.productsApiHost}/api`;

    public async getAllProducts(): Promise<Product[]> {
        try {
            const response = await axios.get<Product[]>(routes.productsApi.products.get.all, {
                baseURL: this.baseUrl
            });
            return response.data;
        } catch (err) {
            console.error('Error fetching products', err);
            return [];
        }
    }
}

export default new ProductsApi();