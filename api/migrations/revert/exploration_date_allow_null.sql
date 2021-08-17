-- Revert explorastro:exploration_date_allow_null from pg

BEGIN;

ALTER TABLE "exploration" 
    ALTER "date" SET NOT NULL;

COMMIT;
