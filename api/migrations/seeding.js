require("dotenv").config();
const faker = require("faker");
const log = require("log-beautify");
const { User, Role, Exploration, Comment } = require("../app/models");
const { roleSeeding } = require("../app/constants");

const config = {
  MAX_USER: 500,
  MAX_EXPLORATION: 100,
  MAX_COMMENT: 1000,
};

const seeding = {
  async init() {
    try {
      await seeding.seedRoles();
      await seeding.seedUsers();
      await seeding.seedExplorations();
      await seeding.seedComments();
    } catch (err) {
      console.error(err);
    }
  },

  async seedRoles() {
    log.info("Seed Roles...");
    let i = 0;
    for (i = 0; i < roleSeeding.length; i += 1) {
      await Role.create(roleSeeding[i]);
    }
  },

  async seedUsers() {
    log.info("Seed Users...");
    for (let i = 0; i < config.MAX_USER; i++) {
      await User.create({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        bio: faker.lorem.sentence(),
        city: faker.address.city(),
        zipcode: faker.address.zipCode(),
        twitter: faker.internet.userName(),
        instagram: faker.internet.userName(),
        facebook: faker.internet.userName(),
        tiktok: faker.internet.userName(),
        astrobin: faker.internet.userName(),
      });
    }
  },

  async seedExplorations() {
    log.info("Seed Exploration...");
    for (let i = 0; i < config.MAX_EXPLORATION; i += 1) {
      await Exploration.create({
        name: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        author_id: faker.datatype.number({ min: 1, max: config.MAX_USER }),
        geog: {
          type: "Point",
          coordinates: [faker.address.latitude(), faker.address.longitude()],
        },
        date: faker.date.past(),
        max_participants: faker.datatype.number({ min: 1, max: 10 }),
        is_published: faker.datatype.boolean(),
      });
    }
  },

  async seedComments() {
    log.info("Seed Comments...");
    for (let i = 0; i < config.MAX_COMMENT; i += 1) {
      await Comment.create({
        author_id: faker.datatype.number({ min: 1, max: config.MAX_USER }),
        content: faker.lorem.sentence(),
      });
    }
  },

  async seedExplorationsParticipants() {
    log.info("Seed Exploration Participants...");
    for (let i = 0; i < config.MAX_EXPLORATION; i += 1) {}
  },

  async seedExplorationsComments() {},
};

seeding.init();
