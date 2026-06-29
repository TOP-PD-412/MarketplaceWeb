import ProductCardsList from "../components/shared/products/card-list";
import productsApi from "../modules/products/api/products-api";

export default async function ProductPreviewsPage() {
  const products = await productsApi.getAllPreviews();

  return (
    <main className="w-full h-min-full p-8 flex flex-col items-stretch gap-8">
      <h2 className="text-center text-3xl font-bold">Перечень товаров</h2>
      <ProductCardsList cards={products} />
    </main>
  );
}
