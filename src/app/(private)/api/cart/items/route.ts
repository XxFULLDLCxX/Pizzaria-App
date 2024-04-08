import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest, res: NextResponse) {
  const users = await db.user.findMany();
  return Response.json({ users });
}
