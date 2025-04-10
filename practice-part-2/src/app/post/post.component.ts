import { Component, OnInit } from '@angular/core';
import { PostService,Post } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getFirst10Posts().subscribe(data => {
      this.posts = data;
    });
  }
}
