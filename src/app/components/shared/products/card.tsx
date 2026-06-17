import { Product } from "@/app/modules/products/types/product";
import ProductCardDate from "./card-date";
import Image from "next/image";

export type ProductCardProps = Omit<Product, 'id'>;

export default function ProductCard({ name, previewUrl, createdAt, updatedAt }: Readonly<ProductCardProps>) {
    return (
        <div className="border border-gray-300 rounded-lg hover:z-10 hover:scale-105 transition-transform duration-300 bg-gray-900 overflow-hidden flex flex-col items-stretch gap-4">
            {!!previewUrl && <Image src={previewUrl} loading="eager" alt={name} width={300} height={200} className="w-full h-40 object-cover" />}
            <div className="p-4 flex flex-col items-stretch gap-2">
                <h3 className="text-lg font-bold">{name}</h3>
                <ProductCardDate label="Создано" date={createdAt} />
                <ProductCardDate label="Обновлено" date={updatedAt} />
            </div>
        </div>
    )
}

