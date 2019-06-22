import * as express from 'express';
import ConsumptionItemController from '../controllers/consumption-item-controller';

const router = express.Router();

router.route('').get(ConsumptionItemController.get);
router.route('/:id').get(ConsumptionItemController.getById);
router.route('').post(ConsumptionItemController.create);
router.route('/:id').put(ConsumptionItemController.update);
router.route('/:id').delete(ConsumptionItemController.delete);


export default router;