import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pure and Impure Pipes';

  posts: Post[] = [
    <Post> { content: 'default public post', isPublic: true, created: new Date() },
    <Post> { content: 'default private post', isPublic: false, created: new Date() }
  ];

  newPostContent = '';
  newPostPublic = true;

  createPost(): void {
    if (this.newPostContent) {
      const newPost = <Post> {
        content: this.newPostContent,
        isPublic: this.newPostPublic,
        created: new Date()
      };
      this.posts.push(newPost);
      this.newPostContent = '';
    }
  }

  mutateArray() {
    this.posts = this.posts.concat();
  }
}
