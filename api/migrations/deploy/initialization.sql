-- Deploy explorastro:initialization to pg

BEGIN;

CREATE EXTENSION postgis;

CREATE TABLE "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "username" TEXT NOT NULL UNIQUE,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "avatar_URL" TEXT,
    "bio" TEXT,
    "city" TEXT,
    "zipcode" TEXT,
    "twitter" TEXT,
    "instagram" TEXT,
    "facebook" TEXT,
    "tiktok" TEXT,
    "astrobin" TEXT,
    "role_id" INT REFERENCES "role"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "exploration" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "author_id" INT NOT NULL REFERENCES "user"("id"),
    "geog" GEOGRAPHY(POINT, 4326),
    "date" TIMESTAMPTZ NOT NULL,
    "max_participants" INT,
    "is_published" BOOLEAN NOT NULL,
    "image_URL" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "exploration_comment" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "exploration_id" INT NOT NULL REFERENCES "exploration"("id"),
    "author_id" INT NOT NULL REFERENCES "user"("id"),
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "exploration_has_users" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "exploration_id" INT NOT NULL REFERENCES "exploration"("id"),
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user_has_followers" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "follower_id" INT NOT NULL REFERENCES "user"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;