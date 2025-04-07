import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taskmanager',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class taskmanagerComponent {
  tasks: { title: string; status: string; createdAt: Date }[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        title: this.newTask.trim(),
        status: 'Pending',
        createdAt: new Date()
      });
      this.newTask = '';
    }
  }

  markComplete(task: any) {
    task.status = 'Completed';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
