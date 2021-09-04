-- Deploy explorastro:report to pg

BEGIN;

CREATE TABLE "report" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT NOT NULL,
    "object" TEXT NOT NULL,
    "author_id" INT NOT NULL REFERENCES "user" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;
