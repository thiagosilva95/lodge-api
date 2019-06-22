import ConsumptionItem from '../models/consumption-item';

class ConsumptionItemService {

    public get() {
        return ConsumptionItem.find({});
    }

    public getById(_id) {
        return ConsumptionItem.findById({ _id });
    }

    public create(consumptionItem) {         
        return ConsumptionItem.create(consumptionItem);
    }

    public update(_id, consumptionItem) {
        return ConsumptionItem.findByIdAndUpdate(_id, consumptionItem);
    }

    public delete(_id) {
        return ConsumptionItem.findByIdAndRemove(_id);
    }

}

export default new ConsumptionItemService;