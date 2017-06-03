import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../post';

@Pipe({
  name: 'publicPosts'
})
export class PublicPostsPipe implements PipeTransform {

  transform(posts: Post[]): any {
    return posts.filter(p => p.isPublic);
  }

}
