'use strict';

class ProgressWebpackPlugin {
    constructor() {}

    apply(compiler) {
        compiler.hooks.emit.tap(
            {
                name: 'progressPlugin',
                context: true,
            },
            (context) => {
                const reportProgress = context && context.reportProgress;
                if (reportProgress) reportProgress(0.95, 'Hello world');
                console.log('look me hello world 4888888888888dudjfdjdfjdfjdfjdfjdhfdhfdhfh8585hhhhhkkkkkkkk');
            }
        );
    }
}

module.exports = ProgressWebpackPlugin;
