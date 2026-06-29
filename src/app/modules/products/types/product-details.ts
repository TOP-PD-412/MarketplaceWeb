export interface ProductDetails {
    id: string;
    name: string;
    description: string;
    imageUrls: string[];
    price: string;
    amount: number;
    characteristics: Record<string, string>;
}
