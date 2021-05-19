import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../shared/models/Dispute';

@Component({
  selector: 'hw-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;
  
  constructor() { }

  ngOnInit(): void {
  }

}
