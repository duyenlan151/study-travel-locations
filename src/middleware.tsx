/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  // const accessToken = req.cookies.get('accessToken')?.value;
  // console.log('accessToken', accessToken);zz

  const authUser = true;

  if (!authUser) throw new Error('Unauthorized');

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/dashboard/:path*'],
};
