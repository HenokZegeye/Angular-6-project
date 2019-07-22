import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../shared/comment.model';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  Comment: any = [];
  pageTitle: string;
  id = this.actRoute.snapshot.params['id'];

  commentForm : FormGroup;

  constructor(
    private restapiservice : RestApiService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
      this.commentForm = this.fb.group({
        id: [''],
        name: ['',Validators.required],
        comment: ['',Validators.required]
      });
  }

  get name() { return this.commentForm.get('name');}
  get comment() { return this.commentForm.get('comment');}

  onSubmit(){
    this.restapiservice.createComment(this.commentForm.value,this.id).subscribe((data:{})=>{
      this.router.navigate(['/blogs'])
    });
  }
}
