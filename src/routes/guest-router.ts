import * as express from 'express';
import GuestController from '../controllers/guest-controller';

const router = express.Router();

router.route('').get(GuestController.get);
router.route('/:id').get(GuestController.getById);
router.route('').post(GuestController.create);
router.route('/:id').put(GuestController.update);
router.route('/:id').delete(GuestController.delete);

export default router;