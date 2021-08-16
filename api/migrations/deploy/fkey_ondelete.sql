-- Deploy explorastro:comment_fkey_ondelete to pg

BEGIN;

DELETE FROM "user" WHERE "id"=0;

ALTER TABLE "comment"
    DROP CONSTRAINT IF EXISTS "comment_author_id_fkey";

ALTER TABLE "exploration"
    DROP CONSTRAINT IF EXISTS "exploration_author_id_fkey";

ALTER TABLE "comment"
    ALTER "author_id" DROP NOT NULL;

ALTER TABLE "exploration"
    ALTER "author_id" DROP NOT NULL;

UPDATE "comment" SET "author_id"=NULL WHERE "author_id"=0;
UPDATE "exploration" SET "author_id"=NULL WHERE "author_id"=0;

ALTER TABLE "comment"
    ADD CONSTRAINT "comment_fkey_ondelete" 
    FOREIGN KEY ("author_id") 
    REFERENCES "user" ("id") 
    ON DELETE SET NULL ON UPDATE SET NULL;

ALTER TABLE "exploration"
    ADD CONSTRAINT "exploration_fkey_ondelete" 
    FOREIGN KEY ("author_id") 
    REFERENCES "user" ("id") 
    ON DELETE SET NULL ON UPDATE SET NULL;

COMMIT;