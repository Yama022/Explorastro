-- Revert explorastro:comment_fkey_ondelete from pg

BEGIN;

INSERT INTO "user" ("id", "firstname", "lastname", "username", "email", "password") 
OVERRIDING SYSTEM VALUE 
VALUES
    (0, 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown');

ALTER TABLE "comment" DROP CONSTRAINT "comment_fkey_ondelete";

ALTER TABLE "exploration" DROP CONSTRAINT "exploration_fkey_ondelete";

UPDATE "comment" SET "author_id"=0 WHERE "author_id" IS NULL;

UPDATE "exploration" SET "author_id"=0 WHERE "author_id" IS NULL;

ALTER TABLE "comment"
    ALTER "author_id" SET NOT NULL;

ALTER TABLE "exploration"
    ALTER "author_id" SET NOT NULL;

COMMIT;