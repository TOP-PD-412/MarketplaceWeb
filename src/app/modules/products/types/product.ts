import { UUID } from "crypto";

export interface Product {
    id: UUID;
    name: string;
    previewUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}