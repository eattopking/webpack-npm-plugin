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
            }
        );
    }
}

module.exports = ProgressWebpackPlugin;
