-- Deploy explorastro:default_avatar to pg

BEGIN;

-- Default value for user avatar_url
ALTER TABLE "user"
    ALTER "avatar_url"
        SET DEFAULT 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856500282-313912004.jpg';

COMMIT;