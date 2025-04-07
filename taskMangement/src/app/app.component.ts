import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { taskmanagerComponent } from './taskmanager/taskmanager.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,taskmanagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskMangement';
}
