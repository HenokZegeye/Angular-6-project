import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogsComponent } from './blogs.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { Blog } from '../shared/blog.model';
import { of } from 'rxjs';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;
  let debugElement: DebugElement;
  let service;
  let getBlogsSpy;

  beforeEach(async(() => {
    service = jasmine.createSpyObj('RestApiService', ['getBlogs']);
    getBlogsSpy = service.getBlogs.and.returnValue( of(Blog));    
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      declarations: [ BlogsComponent ],
      providers:[
        { provide: RestApiService, useValue: service}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to create-blog page', () => {
    let debugElements = debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElements.findIndex(de=>de.properties['href']==='/create-blog');
    expect(index).toBeGreaterThan(-1);
  });
  
  it('should call restApiService', async(() => {
    expect(getBlogsSpy.calls.any()).toBe(true);
  }));

});
