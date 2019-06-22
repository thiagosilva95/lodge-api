import TypeAccommodationService from '../services/type-ccommodation-service'
import * as httpStatus from 'http-status';
import { Request, Response } from 'express';

class TypeAccommodationController {

    public get(req: Request, res: Response): void {
        TypeAccommodationService.get()
            .then(typesAccommodations => {
                res.status(httpStatus.OK).json(typesAccommodations);
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    public getById(req: Request, res: Response): void {

    }

    public create(req: Request, res: Response): void {
        let typeAccommodation = req.body;
        TypeAccommodationService.create(typeAccommodation)
            .then(typeAccommodation => {
                res.status(httpStatus.CREATED).json({ result: 'Tipo de acomodação criado com sucesso' });
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    public update(req: Request, res: Response): void {
        let typeAccommodation = req.body;
        const _id = req.params.id;

        TypeAccommodationService.update(_id, typeAccommodation)
            .then(typeAccommodation => {
                res.status(httpStatus.OK).json({ result: 'Tipo de acomodação editada com sucesso' });
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    public delete(req: Request, res: Response): void {
        const _id = req.params.id;
        TypeAccommodationService.delete(_id)
            .then(() => {
                res.status(httpStatus.OK).json({ result: 'Tipo de acomodação deletado com sucesso!' })
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}

export default new TypeAccommodationController();