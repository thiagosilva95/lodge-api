import * as express from 'express';
import TypeAccommodationController from '../controllers/type-accommodation-controller';

const router = express.Router();

router.route('').get(TypeAccommodationController.get);
router.route('/:id').get(TypeAccommodationController.getById);
router.route('').post(TypeAccommodationController.create);
router.route('/:id').put(TypeAccommodationController.update);
router.route('/:id').delete(TypeAccommodationController.delete);

export default router;