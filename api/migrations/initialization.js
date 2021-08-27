/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
require("dotenv").config();
const log = require("log-beautify");
const { Role } = require("../app/models");
const { ROLE } = require("../app/constants");

const seeding = {
  async init() {
    try {
      await seeding.seedRoles();
    }
    catch (err) {
      console.error(err);
    }
  },

  async seedRoles() {
    log.info("Seed Roles...");
    let i = 0;
    for (i = 0; i < ROLE.length; i += 1) {
      await Role.create(ROLE[i]);
    }
    log.success("Seed Roles Done!");
  },
};

seeding.init();
