import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  Blog: any = [];

  constructor(private restapiservice : RestApiService) { }

  ngOnInit() {
    this.loadBlogs()
  }

  loadBlogs(){
    return this.restapiservice.getBlogs().subscribe(data=>{
      this.Blog = data;
    })
  }

  
 
 
}
