import {Request, Response} from 'express';

import pool from '../database';

class GamesControllers {

    public games(req: Request, res:Response){
        pool.query('DESCRIBE games');
        res.json('Games')
    };
};

export const gamesControllers = new GamesControllers();