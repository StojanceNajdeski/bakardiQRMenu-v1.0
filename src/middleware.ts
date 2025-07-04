import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export async function middlewere(req: NextRequest) {
  const session = await auth();
  const isAdminRoute = req.nextUrl.pathname.startsWith("/bakardiAdminPanel");

  if (isAdminRoute && !session) {
    return NextResponse.redirect(new URL("/bakardiAdminLogin", req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/bakardiAdminPanel/:path"] };
