import { ProductPreview } from "@/app/modules/products/types/product-preview";
import ProductCard, { ProductCardProps } from "./card";

export type ProductCardsListProps = {
    cards: (ProductCardProps & Pick<ProductPreview, 'id'>)[];
}

export default function ProductCardsList({ cards }: Readonly<ProductCardsListProps>) {
    return (
        <div className="w-full items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
                <ProductCard key={card.id} {...card} />
            ))}
        </div>
    )
}