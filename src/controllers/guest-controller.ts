import GuestService from '../services/guest-service';
import * as httpStatus from 'http-status';
import { Response, Request } from 'express';

class GuestController {

    public get(req: Request, res: Response): void {        
        GuestService.get()
            .then(guest => {
                console.log(guest);
                res.status(httpStatus.OK).json(guest);
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    public getById(req: Request, res: Response): void {
        const _id = req.params.id;

        GuestService.getById(_id)
            .then(guest => {
                res.status(httpStatus.OK).json(guest);
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    public create(req: Request, res: Response): void {
        let typeAccommodation = req.body;
        
        GuestService.create(typeAccommodation)
            .then(typeAccommodation => {
                res.status(httpStatus.CREATED).json({ result: 'Hospede criado com sucesso' });
            })
            .catch(error => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ result: `ERRO: ${error}` }));
    }

    public update(req: Request, res: Response): void {
        let typeAccommodation = req.body;
        const _id = req.params.id;

        GuestService.update(_id, typeAccommodation)
            .then(typeAccommodation => {
                res.status(httpStatus.OK).json({ result: 'Hospede editada com sucesso' });
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    public delete(req: Request, res: Response): void {
        const _id = req.params.id;
        GuestService.delete(_id)
            .then(() => {
                res.status(httpStatus.OK).json({ result: 'Hospede deletado com sucesso!' })
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

}

export default new GuestController();