import { Pizza } from '../model/pizza';
import * as moment from 'moment';

export class PizzaSerializer {
    fromJson(json: any): Pizza {
      const pizza = new Pizza();
      pizza.id = json.id;
      pizza.name = json.name;
      pizza.cookedOn = moment(json.cookedOn, 'mm-dd-yyyy hh:mm');

      return pizza;
    }

    toJson(pizza: Pizza): any {
      return {
        id: pizza.id,
        name: pizza.name
      };
    }
}
