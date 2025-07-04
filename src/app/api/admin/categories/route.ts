import { db } from "@/db";
import { categories } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const all = await db.select().from(categories);
  return NextResponse.json(all);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, slug } = body;
  const result = await db.insert(categories).values({ name, slug }).returning();
  return NextResponse.json(result[0]);
}
