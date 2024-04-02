import { Product } from '@prisma/client';

export type ProductData = Omit<Product, 'createdAt' | 'updatedAt'>;
