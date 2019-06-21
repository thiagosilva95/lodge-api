import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.middleware();

    }

    enableCors(): void {
        const options: cors.CorsOptions = {
            methods: 'GET, OPTIONS, PUT, POST, DELETE',
            origin: '*'
        }

        this.app.use(cors(options));
    }

    private middleware(): void {
        this.enableCors();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(compression());
    }

    private routes(): void {
        this.app.route('/').get((req, res) => {
            res.send({ version: '1.0.0' });
        });
    }


}

export default new App().app;