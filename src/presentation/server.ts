import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

interface Options{
    port: number;
    public_path?: string;
}


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export class Server {

    private app = express();
    private readonly port: number;
    private readonly publicPath: string;


    constructor(options: Options){
        const { port, public_path = 'public' } = options;

        this.port = port;

        this.publicPath = public_path;
    }




    async start() {

        this.app.use( express.static( this.publicPath ) );


        this.app.get('/{*path}', (req, res)=> {
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            // console.log(req.url);
            res.sendFile(indexPath);

        } );
        


        this.app.listen(this.port, ()=> {
            console.log(`Server runing on por  ${this.port}`);
        });

    }


}