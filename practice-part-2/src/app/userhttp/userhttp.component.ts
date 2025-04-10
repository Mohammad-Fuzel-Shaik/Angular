import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { CommonModule } from '@angular/common';
import { PostComponent } from "../post/post.component";

@Component({
  selector: 'app-userhttp',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './userhttp.component.html',
  styleUrls: ['./userhttp.component.css']
})
export class UserhttpComponent implements OnInit {
  users: any[] = [];

  constructor(private userApi: UserapiService) {}

  ngOnInit(): void {
    this.userApi.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
