import { UUID } from "crypto";

export interface Product {
    id: UUID;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}