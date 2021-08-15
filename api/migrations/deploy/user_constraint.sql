-- Deploy explorastro:user_constraint to pg

BEGIN;

ALTER TABLE "user"
    ADD CONSTRAINT "firstname_len" CHECK (length("firstname") >= 2 AND length("firstname") <= 50);

ALTER TABLE "user"
    ADD CONSTRAINT "lastname_len" CHECK (length("lastname") >= 2 AND length("lastname") <= 50);

ALTER TABLE "user"
    ADD CONSTRAINT "username_len" CHECK (length("username") >= 3 AND length("username") <= 50);

ALTER TABLE "user"
    ADD CONSTRAINT "email_len" CHECK (length("email") >= 3 AND  length("email") <= 50);


ALTER TABLE "user"
    ADD CONSTRAINT "password_len" CHECK (length("password") >= 6);

COMMIT;
