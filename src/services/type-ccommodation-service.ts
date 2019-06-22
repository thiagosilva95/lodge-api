import TypeAccommodation from '../models/type-accommodation';

class TypeAccommodationService {


    public get() {
        return TypeAccommodation.find({});
    }

    public getById(_id) {
        return TypeAccommodation.findById({ _id });
    }

    public create(typeAccommodation) {
        console.log(typeAccommodation);
        
        return TypeAccommodation.create(typeAccommodation);
    }

    public update(_id, typeAccommodation) {
        return TypeAccommodation.findByIdAndUpdate(_id, typeAccommodation);
    }

    public delete(_id) {
        return TypeAccommodation.findByIdAndRemove(_id);
    }
    
}

export default new TypeAccommodationService;