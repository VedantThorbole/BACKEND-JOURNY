function logger(req,res,next) {
    console.log("middlewares...")
    next();
}

module.exports = logger;