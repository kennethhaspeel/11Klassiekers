import { db } from "@/db";
import { wedstrijden } from "@/db/schema";
import { eq, asc } from "drizzle-orm";

export async function getAlleWedstrijden() {
  const alleWedstrijden = await db
    .select()
    .from(wedstrijden)
    .orderBy(asc(wedstrijden.datum));

  return alleWedstrijden;
}

export async function getWedstrijdById(id: number) {
  const wedstrijd = await db
    .select()
    .from(wedstrijden)
    .where(eq(wedstrijden.id, id));

  return wedstrijd[0];
}
