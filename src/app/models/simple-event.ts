import { EventDetails } from './event-details';

export interface SimpleEvent {
  id: string;
  name: string;
  description: string;
  creationDate: Date;
  startsOn: Date;
  endsOn?: Date;

  details?: EventDetails;
}
