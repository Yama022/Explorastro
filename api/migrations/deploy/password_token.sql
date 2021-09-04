-- Deploy explorastro:password_token to pg

BEGIN;

CREATE TABLE "password_token" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
    "token" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

DELETE FROM "password_token" WHERE "created_at"<=DATE_SUB(NOW(), INTERVAL 1 DAY)

COMMIT;
