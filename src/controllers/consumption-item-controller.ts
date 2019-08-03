import ConsumptionItemService from '../services/consumption-item-service';
import * as httpStatus from 'http-status';
import {Request, Response} from 'express';

class ConsumptionItemController {

    public get(req: Request, res: Response): void {        
        ConsumptionItemService.get()
            .then(guest => {
                console.log(guest);
                res.status(httpStatus.OK).json(guest);
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    public getById(req: Request, res: Response): void {
        const _id = req.params.id;

        ConsumptionItemService.getById(_id)
            .then(guest => {
                res.status(httpStatus.OK).json(guest);
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    public create(req: Request, res: Response): void {
        let typeAccommodation = req.body;
        
        ConsumptionItemService.create(typeAccommodation)
            .then(typeAccommodation => {
                res.status(httpStatus.CREATED).json({ result: 'Item de consumo criado com sucesso' });
            })
            .catch(error => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ result: `ERRO: ${error}` }));
    }

    public update(req: Request, res: Response): void {
        let typeAccommodation = req.body;
        const _id = req.params.id;

        ConsumptionItemService.update(_id, typeAccommodation)
            .then(typeAccommodation => {
                res.status(httpStatus.OK).json({ result: 'Item de consumo editada com sucesso' });
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    

    public delete(req: Request, res: Response): void {
        const _id = req.params.id;
        ConsumptionItemService.delete(_id)
            .then(() => {
                res.status(httpStatus.OK).json({ result: 'Item de consumo deletado com sucesso!' })
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

}

export default new ConsumptionItemController();