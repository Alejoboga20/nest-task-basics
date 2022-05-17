import { Injectable } from '@nestjs/common';

/* 
@Injectable Makes it a singleton and can be shared accross 
the app via dependency injection 
*/
@Injectable()
export class TasksService {
  private tasks = [];

  getAllTasks() {
    return this.tasks;
  }
}
