import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  
  pageTitle: string;
  
  blogForm : FormGroup;
  constructor(
    private restapiservice : RestApiService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private fb : FormBuilder

    ) { }

  ngOnInit() {
    const id = this.actRoute.snapshot.params['id'];
    if (id) {
      this.pageTitle = "Edit Blog";
      this.restapiservice.getBlog(+id).subscribe(
        res => {
          this.blogForm.patchValue({
            title: res.title,
            description: res.description,
            body: res.body,
            image: res.image,
            id: res.id

          });
        }
      )
      
    } else{
      this.pageTitle = " Create Blog";
    }

    this.blogForm = this.fb.group({
      id: [''],
      title: ['',Validators.required],
      description: ['',Validators.required],
      body: ['',Validators.required],
      image: ['',Validators.required],
    });
  
  }

  get title() { return this.blogForm.get('title');}
  get description() { return this.blogForm.get('description');}
  get body() { return this.blogForm.get('body');}
  get image() { return this.blogForm.get('image');}

  onSubmit(){

    const id = this.blogForm.get('id').value;

    if (id && window.confirm('Are you sure, you want to update')) {
      this.restapiservice.updateBlog(+id, this.blogForm.value).subscribe(
        res => {
          this.router.navigate(['/blogs'])
        }
      )
    }else{
      this.restapiservice.createBlog(this.blogForm.value).subscribe((data:{})=>{
        this.router.navigate(['/blogs'])
      })
    }
  }

}
