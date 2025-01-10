import {
  pgTable,
  serial,
  varchar,
  boolean,
  timestamp,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";

export const deelnemers = pgTable("deelnemers", {
  id: serial("id").primaryKey(),
  voornaam: varchar("first_name").notNull(),
  naam: varchar("last_name").notNull(),
  email: varchar("email").unique().notNull(),
  telefoon: varchar("phone").unique().notNull(),
  ploegnaam: varchar("teamnaam").unique().notNull(),
  actief: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});
// export const deelnemer_selecties_Relation = relations(
//   deelnemers,
//   ({ many }) => ({
//     deelnemers_selecties: many(selecties),
//   })
// );

export const selecties = pgTable(
  "selecties",
  {
    id: serial("id").primaryKey(),
    deelnemerId: integer("deelnemerid")
      .notNull()
      .references(() => deelnemers.id),
    rennerId: integer("rennerid")
      .notNull()
      .references(() => renners.id),
    actief: boolean("active").notNull().default(true),
    datumIn: timestamp("datum_in").notNull().defaultNow(),
    datumUit: timestamp("datum_uit").notNull().defaultNow(),
  },
  (t) => [
    {
      pk: primaryKey({ columns: [t.deelnemerId, t.rennerId] }),
    },
  ]
);

export const renners = pgTable("renners", {
  id: serial("id").primaryKey(),
  naam: varchar("naam").notNull(),
  uciranking: integer("uciranking").notNull(),
  ploegid: integer("ploegid")
    .notNull()
    .references(() => ploegen.id),
  foto: varchar("foto"),
  vlag: varchar("vlag"),
  nationaliteit: varchar("nationaliteit").notNull(),
  url: varchar("url").notNull(),
});

export const ploegen = pgTable("ploegen", {
  id: serial("id").primaryKey(),
  naam: varchar("naam").notNull(),
  url: varchar("url").notNull(),
});

export const wedstrijden = pgTable("wedstrijden", {
  id: serial("id").primaryKey(),
  naam: varchar("naam").notNull(),
  datum: timestamp("datum").notNull().defaultNow(),
  afgesloten: boolean("afgesloten").notNull().default(false),
});

export const uitslagen = pgTable("uitslagen", {
  id: serial("id").primaryKey(),
  wedstrijdid: integer("wedstrijd_id")
    .notNull()
    .references(() => wedstrijden.id),
  rennerid: integer("renner_id")
    .notNull()
    .references(() => renners.id),
  positie: integer("positie").notNull(),
  punten: integer("punten").notNull(),
});

export const tussenstand = pgTable("tussenstand", {
  id: serial("id").primaryKey(),
  deelnemerid: integer("deelnemer_id")
    .notNull()
    .references(() => deelnemers.id),
  wedstrijdid: integer("wedstrijd_id")
    .notNull()
    .references(() => wedstrijden.id),
  rennerid: integer("renner_id")
    .notNull()
    .references(() => renners.id),
  positie: integer("positie").notNull(),
  punten: integer("punten").notNull(),
});

// export const selecties_deelnemer_relation = relations(
//   selecties,
//   ({ many }) => ({
//     selectiesToDeelnemers: many(deelnemers),
//   })
// );
// export const renner_selecties_relation = relations(
//   renners,
//   ({ many }) => ({
//     renners_selecties: many(selecties),
//   })
// );
// export const renner_ploeg_relation = relations(renners, ({ one }) => ({
// 	ploeg: one(ploegen, {
// 		fields: [renners.ploegid],
// 		references: [ploegen.id],
// 	}),
// }));

// export const ploeg_renner_relation = relations(
//   ploegen,
//   ({ many }) => ({
//     renners: many(renners),
//   })
// );

// export const renner_uitslag_relation = relations(
//   renners,
//   ({ many }) => ({
//     uitslag: many(uitslagen),
//   })
// );
