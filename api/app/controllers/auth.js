module.exports = {
    login: (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: 'No credentials!'
            });
        }
    },

    signup: (req, res) => {
        const { email, password, password_confirm } = req.body;

        if (!email || !password || !password_confirm) {
            return res.status(400).json({
                message: 'No credentials!'
            });
        }
    },

    refreshToken: (req, res) => {
        const { refresh_token } = req.body;

        if (!refresh_token) {
            return res.status(400).json({
                message: 'You must provide a token!'
            });
        }
    }
}