-- Deploy explorastro:comment_fkey_constraint to pg

BEGIN;

ALTER TABLE "exploration_has_comments"
	DROP CONSTRAINT "exploration_has_comments_exploration_id_fkey"

ALTER TABLE "exploration_has_comments"
	ADD CONSTRAINT "exploration_id_delete"
	FOREIGN KEY ("exploration_id")
    REFERENCES "exploration"("id")
	ON DELETE CASCADE;

COMMIT;
