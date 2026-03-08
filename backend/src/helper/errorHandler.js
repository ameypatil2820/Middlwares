const userError = (error) => {
    if (error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
    ) {
        const err = error.errors.map(e => e.message)
        return {
            ers: err,
            status: 422
        }

    }
    if (error.name === "SequelizeDatabaseError") {
        return {
            ers: "DataBaseError",
            status: 422
        }
    }
    return {
        ers: "InternalServerError",
        status: 500
    }

}


module.exports = userError;