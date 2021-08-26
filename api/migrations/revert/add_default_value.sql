-- Revert explorastro:add_default_value from pg

BEGIN;

ALTER TABLE "exploration"
    ALTER "max_participants" DROP DEFAULT;

ALTER TABLE "exploration"
    ALTER "image_url" DROP DEFAULT;


COMMIT;
