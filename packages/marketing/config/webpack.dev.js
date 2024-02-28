const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
//On importe notre pakage.json afin de partager ses dependances avec les autres services

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
            //Permet de partager l ensemble des dependances
            //au lieu de les lister 1 par1 :
            //shared:  ['react', 'react-dom']
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
//on fusionne le commun config avec le dev config
//(le dev config a la priuorité sur commun conf)