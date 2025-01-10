CREATE TABLE "deelnemers" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"phone" varchar NOT NULL,
	"teamnaam" varchar NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "deelnemers_email_unique" UNIQUE("email"),
	CONSTRAINT "deelnemers_phone_unique" UNIQUE("phone"),
	CONSTRAINT "deelnemers_teamnaam_unique" UNIQUE("teamnaam")
);
--> statement-breakpoint
CREATE TABLE "ploegen" (
	"id" serial PRIMARY KEY NOT NULL,
	"naam" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "renners" (
	"id" serial PRIMARY KEY NOT NULL,
	"naam" varchar NOT NULL,
	"uciranking" integer NOT NULL,
	"ploegid" integer NOT NULL,
	"foto" varchar
);
--> statement-breakpoint
CREATE TABLE "selecties" (
	"id" serial PRIMARY KEY NOT NULL,
	"deelnemerid" integer NOT NULL,
	"rennerid" integer NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"datum_in" timestamp DEFAULT now() NOT NULL,
	"datum_uit" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tussenstand" (
	"id" serial PRIMARY KEY NOT NULL,
	"deelnemer_id" integer NOT NULL,
	"wedstrijd_id" integer NOT NULL,
	"renner_id" integer NOT NULL,
	"positie" integer NOT NULL,
	"punten" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "uitslagen" (
	"id" serial PRIMARY KEY NOT NULL,
	"wedstrijd_id" integer NOT NULL,
	"renner_id" integer NOT NULL,
	"positie" integer NOT NULL,
	"punten" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "wedstrijden" (
	"id" serial PRIMARY KEY NOT NULL,
	"naam" varchar NOT NULL,
	"datum" timestamp DEFAULT now() NOT NULL,
	"afgesloten" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
ALTER TABLE "renners" ADD CONSTRAINT "renners_ploegid_ploegen_id_fk" FOREIGN KEY ("ploegid") REFERENCES "public"."ploegen"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "selecties" ADD CONSTRAINT "selecties_deelnemerid_deelnemers_id_fk" FOREIGN KEY ("deelnemerid") REFERENCES "public"."deelnemers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "selecties" ADD CONSTRAINT "selecties_rennerid_renners_id_fk" FOREIGN KEY ("rennerid") REFERENCES "public"."renners"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tussenstand" ADD CONSTRAINT "tussenstand_deelnemer_id_deelnemers_id_fk" FOREIGN KEY ("deelnemer_id") REFERENCES "public"."deelnemers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tussenstand" ADD CONSTRAINT "tussenstand_wedstrijd_id_wedstrijden_id_fk" FOREIGN KEY ("wedstrijd_id") REFERENCES "public"."wedstrijden"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tussenstand" ADD CONSTRAINT "tussenstand_renner_id_renners_id_fk" FOREIGN KEY ("renner_id") REFERENCES "public"."renners"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "uitslagen" ADD CONSTRAINT "uitslagen_wedstrijd_id_wedstrijden_id_fk" FOREIGN KEY ("wedstrijd_id") REFERENCES "public"."wedstrijden"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "uitslagen" ADD CONSTRAINT "uitslagen_renner_id_renners_id_fk" FOREIGN KEY ("renner_id") REFERENCES "public"."renners"("id") ON DELETE no action ON UPDATE no action;