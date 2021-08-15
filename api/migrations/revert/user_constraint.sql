-- Revert explorastro:user_constraint from pg

BEGIN;

ALTER TABLE "user"
DROP CONSTRAINT "firstname_len";

ALTER TABLE "user"
DROP CONSTRAINT "lastname_len";

ALTER TABLE "user"
DROP CONSTRAINT "username_len";

ALTER TABLE "user"
DROP CONSTRAINT "email_len";

COMMIT;
