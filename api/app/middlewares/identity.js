module.exports = {
    verifyPermission: (req, res, next) {
        if (req.user.id !== req.params.id) {
            
        }
    }
}