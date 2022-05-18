import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

/* 
@Injectable Makes it a singleton and can be shared accross 
the app via dependency injection 
*/
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
