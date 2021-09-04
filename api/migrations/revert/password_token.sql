-- Revert explorastro:password_token from pg

BEGIN;

DROP TABLE "password_token";
DROP FUNCTION "password_token_delete_old_rows";
DROP TRIGGER "password_token_delete_old_rows_trigger";

COMMIT;
