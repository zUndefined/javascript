function Test(name, func) {
    this.name = name;
    this.func = func;
}

Test.prototype.run = function (next) {
    var _this = this;

    console.log('>>> TEST: ' + this.name);

    try {
        this.func(function (error) {
            if (error instanceof Error) {
                throw error;
            }

            next({
                error: false,
                name: _this.name
            });
        });

    } catch (e) {
        next({
            error: true,
            name: _this.name,
            message: e.toString(),
            stacktrace: e.stack
        });
    }
};

module.exports = Test;
