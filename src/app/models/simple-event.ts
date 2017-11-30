import { EventTask } from './event-task';

export interface SimpleEvent {
  id: string;
  name: string;
  description: string;
  creationDate: Date;
  startsOn: Date;
  endsOn?: Date;

  tasks?: EventTask[];
  users?: any[];
}
