import { Component } from '@angular/core';
import { RedditModel } from 'src/app/models/reddit-model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {
  PostListResponse: RedditModel = {} as RedditModel;
  constructor(private _postService:PostService){}

  ngOnInit() {
    this._postService.getPosts().subscribe((Response:RedditModel) => {
      console.log(Response);
      this.PostListResponse = Response;
      console.log(this.PostListResponse)
    })
  }

}

