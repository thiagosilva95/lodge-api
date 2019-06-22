import Guest from '../models/guest';

class GuestService {

    public get() {
        return Guest.find({});
    }

    public getById(_id) {
        return Guest.findById({ _id });
    }

    public create(guest) {         
        return Guest.create(guest);
    }

    public update(_id, guest) {
        return Guest.findByIdAndUpdate(_id, guest);
    }

    public delete(_id) {
        return Guest.findByIdAndRemove(_id);
    }

}

export default new GuestService;