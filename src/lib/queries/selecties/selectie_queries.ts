import { db } from "@/db";
import { selecties } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getSelectieById(id: number) {
  const selectie = await db
    .select()
    .from(selecties)
    .where(eq(selecties.deelnemerId, id));

  return selectie ?? [];
}