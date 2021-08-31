const { User } = require("../models");
const { Op } = require("sequelize");

module.exports = {
    searchUserByName: async (req, res) => {
        console.log(req.query.name);
        const { name } = req.query;

        const usersFound = await User.findAll({
            where: {
                [Op.or]: [
                    {
                        firstname: {
                            [Op.like]: `%${name}%`
                        }
                    },
                    {
                        lastname: {
                            [Op.like]: `%${name}%`
                        }
                    },
                    {
                        username: {
                            [Op.like]: `%${name}%`
                        }
                    }
                ]
            },
            limit: 10
        });

        res.json(usersFound);
    }
}