import { db } from "@/db";
import { categories } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const result = await db
    .update(categories)
    .set({ name: body.name, slug: body.slug })
    .where(eq(categories.id, Number(params.id)))
    .returning();
  return NextResponse.json(result[0]);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await db.delete(categories).where(eq(categories.id, Number(params.id)));
  return new Response(null, { status: 204 });
}
