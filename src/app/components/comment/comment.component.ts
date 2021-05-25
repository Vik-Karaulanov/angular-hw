import { Component, Input } from '@angular/core';
import { Comment } from '../../shared/models/dispute.model';

@Component({
  selector: 'hw-comment',
  template: `<div class="comment-container">
                <div class="commenter">
                  {{ comment.commenter }}
                </div>
                <div class="message bold">
                  {{ comment.message }}
                </div>
              </div>`,
  styleUrls: ['./comment.component.scss'],
})

export class CommentComponent {
  @Input() comment!: Comment;
}