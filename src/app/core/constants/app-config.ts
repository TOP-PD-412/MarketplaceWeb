export class AppConfig {
    public readonly productsApiHost = process.env.PRODUCTS_API_HOST || "http://localhost:5032";
}

export default new AppConfig();