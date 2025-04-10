import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserserviceService } from '../userservice.service';
import { UserhttpComponent } from '../userhttp/userhttp.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,UserhttpComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserserviceService) {}

  ngOnInit(): void {
    this.users = this.userService.getUser();
  }
}
