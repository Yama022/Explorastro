-- Verify explorastro:report on pg

BEGIN;

SELECT * FROM "report" WHERE false;

ROLLBACK;
