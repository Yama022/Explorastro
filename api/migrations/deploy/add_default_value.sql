-- Deploy explorastro:add_default_value to pg

BEGIN;

ALTER TABLE "exploration" ALTER "max_participants" SET DEFAULT 10;
ALTER TABLE "exploration" ALTER "image_url" SET DEFAULT 'https://explorastro-s3.s3.amazonaws.com/1629988474864-235593875.jpeg';

COMMIT;
