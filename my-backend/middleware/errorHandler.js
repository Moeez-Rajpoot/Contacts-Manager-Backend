const errorHandlder = (err, req, res, next) => {
    const statuscode = res.statusCode ? res.statusCode : 500;
    switch (statuscode) {
        case 400:
            res.json({
                title: "400 Error", message: err.message, stackTrace: err.stack
            })
            break;

        case 404:
            res.json({
                title: "404 Error", message: err.message, stackTrace: err.stack
            })

        default:
            break;
    }



};

module.exports = errorHandlder;