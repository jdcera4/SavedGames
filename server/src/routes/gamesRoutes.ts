import { Router } from "express";

import {gamesControllers} from '../controllers/gamesController';

class GamesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', gamesControllers.games);
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
