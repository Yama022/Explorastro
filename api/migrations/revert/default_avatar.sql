-- Revert explorastro:default_avatar from pg

BEGIN;

ALTER TABLE "user"
    ALTER "avatar_url"
        DROP DEFAULT;
COMMIT;
