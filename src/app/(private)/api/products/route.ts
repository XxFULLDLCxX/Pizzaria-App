import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const products = await db.product.findMany();
  return Response.json({ products });
}
