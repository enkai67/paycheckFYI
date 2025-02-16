const path = require('path');

module.exports = function override(config) {
    config.resolve.alias = {
        ...config.resolve.alias,
        '#styles': path.resolve(__dirname, 'src/styles'),
        '#pages': path.resolve(__dirname, 'src/pages'),
        '#components': path.resolve(__dirname, 'src/components'),
        '#apis': path.resolve(__dirname, 'src/apis')
    };
    return config;
};
