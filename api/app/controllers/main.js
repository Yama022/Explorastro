module.exports = {
  /**
   * @typedef {API-Infos} API-Infos
   * @property {string} version - The version of the API
   * @property {string} name - The name of the API
   * @property {string} description - The description of the API
   * @property {Array.<Authors>} authors - An array of authors
   */

  /**
   * @typedef {Authors} Authors
   * @property {string} name - Author's name
   * @property {string} github - Author's github username
   */

  informationsAPI(req, res) {
    res.json({
      message: 'Welcome to ExplorAstro API!',
      version: '0.1',
      documentation: 'https://github.com/O-clock-Tardis/projet-10-explorastro',
      github: 'https://github.com/O-clock-Tardis/projet-10-explorastro',
      issues: 'https://github.com/O-clock-Tardis/projet-10-explorastro/issues',
      authors: [
        {
          name: 'Théo BIET',
          github: 'https://github.com/TheoBIET',
        },
        {
          name: 'Baptise Faidherbe',
          github: 'https://github.com/baptistefaidherbe',
        },
        {
          name: 'Pierre François L',
          github: 'https://github.com/JebNewman',
        },
        {
          name: 'Rémi J',
          github: 'https://github.com/Yama022',
        },
      ],
    });
  },
};
