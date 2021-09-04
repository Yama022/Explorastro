-- Deploy explorastro:password_token to pg

BEGIN;

CREATE TABLE "password_token" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
    "token" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE FUNCTION password_token_delete_old_rows() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  DELETE FROM "password_token" WHERE "created_at" < NOW() - INTERVAL '1 day';
  RETURN NEW;
END;
$$;

CREATE TRIGGER "password_token_delete_old_rows_trigger"
    AFTER INSERT ON "password_token"
    EXECUTE PROCEDURE password_token_delete_old_rows();

COMMIT;
