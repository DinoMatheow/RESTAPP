import express, { Router, type Application } from 'express'
import path from 'path';

interface Options{
    port: number;
    public_path?: string;
    routes: Router;
}

 

export class Server {

    public readonly app:Application = express();
    private serverListener?: any;
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;


    constructor(options: Options){
        const { routes, port, public_path = 'public' } = options;

        this.port = port;
        this.publicPath = public_path;
        this.routes = routes;
    }




    async start() {
        //Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        // this.app.use( compression() )
        

        // public 
        this.app.use( express.static( this.publicPath ) );



        // routes
        this.app.use(this.routes);




        // spa 
        this.app.get('/{*path}', (req, res)=> {
            const indexPath = path.join(__dirname, this.publicPath, 'index.html');
            // console.log(req.url);
            res.sendFile(indexPath);

        } );
        
        

        this.serverListener = this.app.listen(this.port, ()=> {
            console.log(`Server runing on por  ${this.port}`);
        });



    }
    public close(){
        this.serverListener?.close();
    }

}