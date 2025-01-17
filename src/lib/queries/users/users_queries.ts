"use server";

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

export async function getPloegnamen() {
  const namen = await db
    .select({ ploegnaam: deelnemers.ploegnaam })
    .from(deelnemers)
    .orderBy(asc(deelnemers.ploegnaam));
  return namen;
}

// export async function PostDeelnemerDetail(data: PostDeelnemerDetailModel) {
//   if (data.id > 0) {
//     return await db
//       .update(deelnemers)
//       .set({
//         naam: data.last_name,
//         voornaam: data.first_name,
//         kinde: data.kinde,
//         ploegnaam: data.teamnaam,
//         telefoon: data.telefoon,
//         email: data.email,
//       })
//       .where(eq(deelnemers.id, data.id))
//       .returning({ insertedId: deelnemers.id });
//   } else {
//     return await db
//       .insert(deelnemers)
//       .values({
//         voornaam: data.first_name,
//         naam: data.last_name,
//         kinde: data.kinde,
//         ploegnaam: data.teamnaam,
//         telefoon: data.telefoon,
//         email: data.email,
//         actief:true,
//       })
//       .returning({ insertedId: deelnemers.id });
//   }
// }
