"use server";
import { z } from "zod";

import { db } from "@/db";
import { deelnemers } from "@/db/schema";

const insertDeelnemerSchema = z.object({
  ploegnaam: z.string().min(5, "Geef uw ploeg een naam"),
  telefoon: z.string().min(10, "Gelieve een telefoonnummer in te geven"),
  kinde: z.string().optional(),
  voornaam: z.string().optional(),
  naam: z.string().optional(),
  email: z.string().optional(),
});

export type insertDeelnemerSchemaType = z.infer<typeof insertDeelnemerSchema>;
export type insertDeelnemerSchemaErrorType = z.inferFlattenedErrors<
  typeof insertDeelnemerSchema
>;

export async function InsertDeelnemerAction(previousState: unknown, form: FormData) {
  const data = Object.fromEntries(form);

  const result = insertDeelnemerSchema.safeParse(data);
  console.log(previousState);
  if (!result.success) {
    return { errors: result.error.formErrors };
  }

  await db.insert(deelnemers).values({
    ploegnaam: form.get("ploegnaam") as string,
    telefoon: form.get("telefoon") as string,
    kinde: form.get("kinde") as string,
    voornaam: form.get("voornaam") as string,
    naam: form.get("naam") as string,
    email: form.get("email") as string,
    actief: true,
  });
  return {allSaved: true}

  //await PostDeelnemerDetail(data);
  //   console.log(result);
  //   return result;
}
