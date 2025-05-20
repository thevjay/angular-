import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {
      id:1,
      title:"VBd",
      description:"VHBU",
      completed:true
    },
    {
      id:2,
      title:"VBddw",
      description:"VHBU",
      completed:true
    },
    {
      id:3,
      title:"VedwB",
      description:"VHBU",
      completed:true
    },
  ]


  getTask():Task[] {
    return this.tasks
  }

  constructor() {

   }
}
