const rewireMobX = require('react-app-rewire-mobx');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(
             ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
             config,
           );
    config = rewireMobX(config,env);
    return config;
};