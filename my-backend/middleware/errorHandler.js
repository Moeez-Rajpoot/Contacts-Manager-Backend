const errorHandlder = (err, req, res, next) => {
    const statuscode = res.statusCode ? res.statusCode : 500;
    switch (statuscode) {
        case 400:
            res.json({
                title: "400 Error", message: err.message, stackTrace: err.stack
            })
            break;
            case 401:
            res.json({
                title: "401 Error", message: err.message, stackTrace: err.stack
            })
            break;

            case 402:
            res.json({
                title: "402 Error", message: err.message, stackTrace: err.stack
            })
            break;

            case 403:
            res.json({
                title: "403 Error", message: err.message, stackTrace: err.stack
            })
            break;

            case 404:
            res.json({
                title: "404 Error", message: err.message, stackTrace: err.stack
            })
            break;

        case 405:
            res.json({
                title: "405 Error", message: err.message, stackTrace: err.stack
            })

        default:
            console.log("No Error");
            break;
    }



};

module.exports = errorHandlder;