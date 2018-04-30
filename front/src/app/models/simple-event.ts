import { EventTask } from './event-task';
import { EventUser } from './event-user';

export interface SimpleEvent {
  id: string;
  name: string;
  description: string;
  creationDate: Date;
  startsOn: Date;
  endsOn?: Date;
  userIds: string[];

  tasks?: EventTask[];
  users?: EventUser[];
}
