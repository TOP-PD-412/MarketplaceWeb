import { ProductsApi } from "../modules/products/api/products-api";

export default async function Products() {
  const products = await ProductsApi.getAllProducts();

  return (
    <main className="p-8">
      <h1 className="mb-4 text-3xl font-bold">Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </main>
  );
}