import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnChanges {
  @Input() message: string = '';
  logs: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log('LoggerComponent ngOnChanges:', changes);
    this.logs.push('Input changed: ' + this.message);
  }
}
