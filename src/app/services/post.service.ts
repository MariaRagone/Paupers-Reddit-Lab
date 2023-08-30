import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { RedditModel } from '../models/reddit-model';



@Injectable({
  providedIn: 'root'
})
export class PostService {

//dependency inject httpclient
constructor(private http:HttpClient) { }

url: string = "https://grandcirhttps://www.reddit.com/r/aww/.json";
//api call method
getPosts():Observable<RedditModel>{
  return this.http.get<RedditModel>(this.url);
}


}
