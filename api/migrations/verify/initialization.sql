-- Verify explorastro:initialization on pg

BEGIN;

SELECT * FROM "role" WHERE false;
SELECT * FROM "user" WHERE false;
SELECT * FROM "exploration" WHERE false;
SELECT * FROM "exploration_comment" WHERE false;
SELECT * FROM "exploration_has_users" WHERE false;
SELECT * FROM "user_has_followers" WHERE false;

ROLLBACK;
