import rollup from './rollup.config';
import serve from 'rollup-plugin-serve-proxy';
import fs from 'fs';
import path from 'path';
import {distfolder} from './rollup.parts.config';

rollup.output = {
    ...rollup.output, 
    sourcemap: true
}

rollup.plugins = [
    ...rollup.plugins,
    serve({
        open: true,
        contentBase: [distfolder],
        proxy: {
            api: 'https://localhost:5000'
        }
    })
    // serve({
    //     //open: true,
    //     contentBase: [distfolder],
    //     historyApiFallback: '/index.html',
    //     host: 'ciodatacopy.ciodev.accenture.com',
    //     port: 443,
    //     https: {
    //         key: fs.readFileSync(path.resolve(__dirname, "../../cert/server.key")),
    //         cert: fs.readFileSync(path.resolve(__dirname, "../../cert/server.crt"))
    //     },
    //     // proxy: {
    //     //     api: 'https://localhost:5000'
    //     // }
    // })
]

export default rollup;