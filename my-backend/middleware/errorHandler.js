const errorHandlder = (err,req,res,next)=>{

const statuscode = res.statusCode ? res.statusCode : 500;
res.json({
    message: err.message , stackTrace: err.stack
})

};

module.exports = errorHandlder;