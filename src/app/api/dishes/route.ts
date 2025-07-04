import { auth } from "@/auth";
import { db } from "@/db";
import { dishes } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await db.select().from(dishes);
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Auth" }, { status: 401 });

  const body = await req.json();
  await db.insert(dishes).values(body);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Auth" }, { status: 401 });

  const { id } = await req.json();
  await db.delete(dishes).where(eq(dishes.id, id));
  return NextResponse.json({ ok: true });
}
