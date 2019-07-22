import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  { path: '',pathMatch: 'full', redirectTo: 'blogs'},
  { path: 'create-blog', component: BlogFormComponent},
  { path: 'update-blog/:id', component: BlogFormComponent},
  { path: 'blog-details/:id', component: BlogDetailsComponent},
  { path: 'blogs', component: BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
