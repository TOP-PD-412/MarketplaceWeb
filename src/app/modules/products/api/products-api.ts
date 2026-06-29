import axios from "axios";
import {ProductPreview} from "../types/product-preview";
import appConfig from "@/app/core/constants/app-config";
import routes from "@/app/core/constants/app-routes";
import { ProductDetails } from "../types/product-details";

export class ProductsApi {
    private readonly baseUrl = `${appConfig.apiUrl}/api`;

    public async getAllPreviews(): Promise<ProductPreview[]> {
        try {
            const response = await axios.get<ProductPreview[]>(routes.productsApi.products.get.all, {
                baseURL: this.baseUrl
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

     public async getDetails(id: string): Promise<ProductDetails> {
        try {
            const response = await axios.get<ProductDetails>(routes.productsApi.product.get(id), {
                baseURL: this.baseUrl
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }
}

export default new ProductsApi();