import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest, res: NextResponse) {
  const products = await db.product.findMany();
  return Response.json({ products });
}
