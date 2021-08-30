-- Revert explorastro:indexes from pg

BEGIN;

DROP INDEX "user_id_idx", "exploration_id_idx", "exploration_geog_idx", "comment_id_idx";

COMMIT;
