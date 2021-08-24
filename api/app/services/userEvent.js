module.exports = {
    format: (user) => {
        return {
            id: user.id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            avatar_url: user.avatar_url
        }
    }
}