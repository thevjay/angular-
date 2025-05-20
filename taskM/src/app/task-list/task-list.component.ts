import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'] // ✅ Fix: should be `styleUrls`, not `styleUrl`
})
export class TaskListComponent implements OnInit { // ✅ Implement OnInit

  a = "Vamshi Bhavani Rocks";

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTask();
  }
}
