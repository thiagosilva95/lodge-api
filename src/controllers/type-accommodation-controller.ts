import TypeAccommodationService from '../services/type-ccommodation-service'
import * as httpStatus from 'http-status';
import { Request, Response } from 'express';

class TypeAccommodationController {

    public get(req, res: Response): void {
        TypeAccommodationService.get()
            .then(typesAccommodations => {
                res.sendStatus(httpStatus.OK).json(typesAccommodations);
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    public getById(req, res): void {

    }

    public create(req: Request, res: Response): void {
        let typeAccommodation = req.body;
        TypeAccommodationService.create(typeAccommodation)
            .then(typeAccommodation => {
                res.sendStatus(httpStatus.CREATED).json({ result: 'Tipo de acomodação criado com sucesso' });
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    public update(req, res): void {

    }

    public delete(req, res): void {

    }
}

export default new TypeAccommodationController();