import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogFormComponent,
    BlogDetailsComponent,
    CommentsComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
