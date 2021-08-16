-- Deploy explorastro:exploration_date_allow_null to pg

BEGIN;

ALTER TABLE "exploration"
    ALTER "date" DROP NOT NULL;

COMMIT;
