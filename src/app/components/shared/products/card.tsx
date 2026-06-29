import { ProductPreview } from "@/app/modules/products/types/product-preview";
import ProductImage from "./image";
import Link from "next/link";

export type ProductCardProps = ProductPreview;

export default async function ProductCard({
  id,
  name,
  previewUrl,
  amount,
  price,
}: Readonly<ProductCardProps>) {
  return (
    <Link href={`products/${id}`}>
      <div className="border border-gray-300 rounded-lg hover:z-10 hover:scale-105 transition-transform duration-300 bg-gray-900 overflow-hidden flex flex-col items-stretch gap-4">
        {!!previewUrl && <ProductImage src={previewUrl} alt={name} />}
        <div className="p-4 flex flex-col items-stretch gap-2">
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="grid grid-cols-2 items-stretch gap-5">
            <span className="text-sm text-gray-600 text-start">
              Цена: {BigInt(price) / BigInt(100)}.
              {(BigInt(price) % BigInt(100)).toString().padStart(2, "0")}$
            </span>
            <span className="text-sm text-gray-600 text-end">
              Осталось: {amount}шт.
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}