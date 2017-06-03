import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../post';

@Pipe({
  name: 'publicPostsImpure',
  pure: false
})
export class PublicPostsImpurePipe implements PipeTransform {

  transform(posts: Post[]): any {
    return posts.filter(p => p.isPublic);
  }

}
