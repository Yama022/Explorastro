module.exports = {
  getInformations: (req, res) => {
    res.json({ message: "exploration informations" });
    },
    
    create: (req, res) => {
        res.json({ message: "create an exploration" });
    },
    
    update: (req, res) => {
        res.json({ message: "update an exploration" });
    },

    delete: (req, res) => {
        res.json({ message: "delete an exploration" });
    }
};
