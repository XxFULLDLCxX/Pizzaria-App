import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const users = await db.user.findMany();
  return Response.json({ users });
}
