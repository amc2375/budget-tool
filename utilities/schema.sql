CREATE SCHEMA IF NOT EXISTS bcdi;

CREATE SEQUENCE IF NOT EXISTS district_sequence_id;

CREATE TABLE bcdi.districts (
	"id" int4 NOT NULL DEFAULT nextval('district_sequence_id'::regclass),
	"name" text NOT NULL,
	"created_at" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ("id")
);

INSERT INTO bcdi.districts (name) VALUES ('Bronx');
INSERT INTO bcdi.districts (name) VALUES ('Manhattan');
INSERT INTO bcdi.districts (name) VALUES ('Brooklyn');
INSERT INTO bcdi.districts (name) VALUES ('Queens');
INSERT INTO bcdi.districts (name) VALUES ('Staten Island');

CREATE SEQUENCE IF NOT EXISTS category_sequence_id;

CREATE TABLE bcdi.categories (
	"id" int4 NOT NULL DEFAULT nextval('category_sequence_id'::regclass),
	"category" text NOT NULL,
	"default_value" numeric NOT NULL,
	"created_at" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ("id")
);

INSERT INTO bcdi.categories (category, default_value) VALUES ('Debt Service', 3.6);
INSERT INTO bcdi.categories (category, default_value) VALUES ('General Government', 3.9);
INSERT INTO bcdi.categories (category, default_value) VALUES ('Education', 31.6);
INSERT INTO bcdi.categories (category, default_value) VALUES ('Libraries', .5);
INSERT INTO bcdi.categories (category, default_value) VALUES ('Social Services', 17);
INSERT INTO bcdi.categories (category, default_value) VALUES ('Police & Corrections', 8.1);
INSERT INTO bcdi.categories (category, default_value) VALUES ('Transportation', 1.3);
INSERT INTO bcdi.categories (category,default_value) VALUES ('Housing',1.5);
INSERT INTO bcdi.categories (category,default_value) VALUES ('Health', 3.1);
INSERT INTO bcdi.categories (category,default_value) VALUES ('Sanitation', 1.9);
INSERT INTO bcdi.categories (category,default_value) VALUES ('Environmental Protection', 1.5);
INSERT INTO bcdi.categories (category,default_value) VALUES ('Recreation & Culture', .8);
INSERT INTO bcdi.categories (category,default_value) VALUES ('Pension & Fringe Benefits', 10.9);
INSERT INTO bcdi.categories (category,default_value) VALUES ('Fire', 2.3);
INSERT INTO bcdi.categories (category,default_value) VALUES ('Misc', 12.1);


CREATE SEQUENCE IF NOT EXISTS budget_sequence_id;

CREATE TABLE bcdi.budget (
	"id" int4 NOT NULL DEFAULT nextval('budget_sequence_id'::regclass),
	"submission_id" text NOT NULL,
	"district_id" int4 NOT NULL,
	"category_id" int4 NOT NULL,
	"category_value" numeric NOT NULL,
	"created_at" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "district_constraint_id" FOREIGN KEY ("district_id") REFERENCES "bcdi"."districts"("id") ON DELETE CASCADE,
	CONSTRAINT "category_constraint_id" FOREIGN KEY ("category_id") REFERENCES "bcdi"."categories"("id") ON DELETE CASCADE,
	PRIMARY KEY ("id")
)
