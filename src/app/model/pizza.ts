import { Resource } from './resource';
import { Moment } from 'moment';

export class Pizza extends Resource {
    // id is inherited from Resource
  name: string;
  cookedOn: Moment;
}
