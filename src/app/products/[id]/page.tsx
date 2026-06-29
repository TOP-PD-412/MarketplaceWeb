import ProductImage from "@/app/components/shared/products/image";
import productsApi from "@/app/modules/products/api/products-api";
import { ProductDetails } from "@/app/modules/products/types/product-details";

export type ProductDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;
  const product = await productsApi.getDetails(id);

  return (
    <main className="max-w-3xl mx-auto p-8 flex flex-col items-stretch gap-8">
      <h2 className="text-5xl text-center">{product.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {product.imageUrls.map((rsc, i) => (
          <ProductImage key={rsc} src={rsc} alt={`${product.name}_${i}`} />
        ))}
      </div>
      <p className="text-gray-500">{product.description}</p>
      <div className="grid grid-cols-2 items-stretch gap-5">
        <span className="text-lg text-gray-200 text-start">
          Цена: {BigInt(product.price) / BigInt(100)}.
          {(BigInt(product.price) % BigInt(100)).toString().padStart(2, "0")}$
        </span>
        <span className="text-lg text-gray-200 text-end">
          Осталось: {product.amount}шт.
        </span>
      </div>
      <h3 className="text-3xl">Характеристики:</h3>
      <div className="flex flex-col items-stretch divide-y divide-gray-700 gap-6">
        {Object.entries(product.characteristics).map(([name, value]) => (
          <div key={name} className="flex gap-2 pb-6">
            <span className="font-bold text-lg">{name}:</span>
            <span className="font-medium text-gray-600 text-lg">{value}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
