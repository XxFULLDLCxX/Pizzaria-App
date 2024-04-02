import { db } from '@/lib/db';

export async function findMany() {
  try {
    return await db.product.findMany({});
  } catch {
    return null;
  }
}

export const productData = {
  findMany
}
