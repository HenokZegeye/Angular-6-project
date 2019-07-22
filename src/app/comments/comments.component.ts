import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  Comment: any = [];
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadComments();
  }

  loadComments(){
    return this.restApi.getComments(this.id).subscribe((data: {})=>{
      this.Comment = data;
    })
  }

}
