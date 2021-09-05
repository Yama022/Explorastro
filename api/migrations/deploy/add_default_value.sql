-- Deploy explorastro:add_default_value to pg

BEGIN;

ALTER TABLE "exploration" 
    ALTER "max_participants" SET DEFAULT 10;

ALTER TABLE "exploration" 
    ALTER "image_url" SET DEFAULT 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856794055-151662587.jpeg';

ALTER TABLE "exploration"
    ADD CONSTRAINT "name_len" CHECK (length("name") > 0 AND length("name") <= 60);

ALTER TABLE "exploration"
    ADD CONSTRAINT "description_len" CHECK (length("description") > 0 AND length("description") <= 280);

ALTER TABLE "exploration"
    ADD CONSTRAINT "max_participants_len" CHECK ("max_participants" <= 100);

ALTER TABLE "comment"
    ADD CONSTRAINT "content_len" CHECK (length("content") > 0 AND length("content") <= 280);

COMMIT;
