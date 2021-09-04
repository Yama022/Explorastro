-- Verify explorastro:password_token on pg

BEGIN;

SELECT id FROM "password_token" LIMIT WHERE false;
 
ROLLBACK;
