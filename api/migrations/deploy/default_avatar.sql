-- Deploy explorastro:default_avatar to pg

BEGIN;

-- Default value for user avatar_url
ALTER TABLE "user"
    ALTER "avatar_url"
        SET DEFAULT 'https://explorastro-s3.s3.amazonaws.com/default.jpg';

COMMIT;