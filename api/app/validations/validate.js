module.exports = (prop, schema) => {
    return async (request, response, next) => {
        try {
            await schema.validateAsync(request[prop]);
            next();
        } catch (error) {
            return response.status(400).json({ error: error.details[0].message });
        }
    }
}