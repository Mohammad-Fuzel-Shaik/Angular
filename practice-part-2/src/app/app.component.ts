import { Component, OnInit } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserserviceService } from './userservice.service';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  title = 'practice-part-2';
  users: any[] = [];

  
  constructor(private userService: UserserviceService) {}

  ngOnInit(): void {
    this.users = this.userService.getUser(); 
  }
}
