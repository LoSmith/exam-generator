import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Task } from './shared/task';
import { TASKS } from './mock-tasks';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private messageService: MessageService) {}

  getTasks(): Observable<Task[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(TASKS);
  }
}
