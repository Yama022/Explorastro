-- Revert explorastro:report from pg

BEGIN;

DROP TABLE IF EXISTS "report";

COMMIT;
