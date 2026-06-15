import axios from "axios";
import { Product } from "../types/product";

export class ProductsApi {
    public static async getAllProducts(): Promise<Product[]> {
        try {
            const response = await axios.get<Product[]>(`${process.env.PRODUCTS_API_HOST}/api/products/all`);
            return response.data;
        } catch {
            console.error('Error fetching products');
            return [];
        }
    }
}