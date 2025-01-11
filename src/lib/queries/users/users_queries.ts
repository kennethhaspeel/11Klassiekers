import { db } from "@/db";
import { deelnemers } from "@/db/schema";
import { eq, asc } from "drizzle-orm";

export async function getDeelnemerById(id: string) {
  const deelnemer = await db
    .select()
    .from(deelnemers)
    .where(eq(deelnemers.kinde, id));

  return deelnemer[0] ?? null;
}