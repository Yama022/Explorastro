-- Deploy explorastro:indexes to pg

BEGIN;

CREATE INDEX "user_id_idx" ON "user" USING hash ("id");
CREATE INDEX "exploration_id_idx" ON "exploration" USING hash ("id");
CREATE INDEX "exploration_geog_idx" ON "exploration" USING gist ("geog");
CREATE INDEX "comment_id_idx" ON "comment" USING hash ("id");

COMMIT;
