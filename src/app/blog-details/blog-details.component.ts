import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  blogData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getBlog(this.id).subscribe((data: {})=>{
      this.blogData = data;
    })
  }

  deleteBlog(id){
    if(window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteBlog(id).subscribe((data=>{
        this.router.navigate(['/blogs']);
      }))
    }
  }

}
