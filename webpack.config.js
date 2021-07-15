const path = require('path')

const dir_entrada = './resources/js/index.tsx';
const dir_saida = './public/js/react-compiled/';
module.exports = {
    entry: dir_entrada,
    output: {
        path: path.resolve(__dirname, dir_saida ),
        filename: 'index.js'
    },
    module:{
        rules:[{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets: [
                        '@babel/env',
                        ['@babel/preset-typescript', { isTsx:true }],
                        '@babel/react' ]
                }
            }
        }]
    },
    resolve:{
        extensions:['.ts', '.tsx', '.js', '.json']
    }
}