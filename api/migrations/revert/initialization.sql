-- Revert explorastro:initialization from pg

BEGIN;

DROP TABLE "role", "user", "exploration", "exploration_comment", "exploration_has_users", "user_has_followers";

COMMIT;
