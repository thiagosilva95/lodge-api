import TypeAccommodation from '../models/type-accommodation';

class TypeAccommodationService {

    public create(typeAccommodation) {
        return TypeAccommodation.create(typeAccommodation);
    }

}

export default new TypeAccommodationService;