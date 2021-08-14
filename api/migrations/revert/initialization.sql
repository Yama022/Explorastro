-- Revert explorastro:initialization from pg

BEGIN;

DROP TABLE "role", "user", "exploration", "comment", "exploration_has_comments", "exploration_has_users", "user_has_followers";
DROP EXTENSION postgis;

COMMIT;
