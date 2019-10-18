import { TestBed } from '@angular/core/testing';

import { RestApiService } from './rest-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Blog } from './blog.model';
import { Comment } from './comment.model';

describe('RestApiService', () => {
  let service: RestApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],

    providers: [RestApiService]
  }));


  beforeEach(() => {
    service = TestBed.get(RestApiService);
    httpMock = TestBed.get(HttpTestingController);
  })

  it('should be created', () => {
    const service: RestApiService = TestBed.get(RestApiService);
    expect(service).toBeTruthy();
  });


  it('should be able to retrieve blogs from the API using GET method', () => {
    const dummyBlogs: Blog[] = [{
      id: '1',
      title: 'Test Blog',
      body: `Testing rest api service`,
      description: 'it is a post about art work',
      image: 'testing.png'
    },
    {
    id: '2',
      title: 'Test Blog 2',
      body: 'Testing rest api service 2',
      description: 'testing 2',
      image: 'testing.png 2'
    }];

    service.getBlogs().subscribe(blogs =>{
      expect<any>(blogs).toEqual(dummyBlogs);      
    });
    const request = httpMock.expectOne(`${service.apiUrl}/blogs`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyBlogs);
    httpMock.verify();

  });

  it('should be able to create blog using POST method', () => {
   service.createBlog({
    title: 'Test Blog 3',
    body: 'Testing rest api service 3',
    description: 'testing 3',
    image: 'testing.png 3'
   }).subscribe((blog)=>{
     expect<any>(blog).toEqual(jasmine.objectContaining({
      id: '3',
      title: 'Test Blog 3',
      body: 'Testing rest api service 3',
      description: 'testing 3',
      image: 'testing.png 3'
     }));
   });


   const createdBlog = {
    id: '3',
    title: 'Test Blog 3',
    body: 'Testing rest api service 3',
    description: 'testing 3',
    image: 'testing.png 3'
   };

   const request = httpMock.expectOne(`${service.apiUrl}/blogs`);
   expect(request.request.method).toBe('POST');
   request.flush(createdBlog);
   httpMock.verify();
  });

  it('should be able to get one blog with id param from the API using GET method', () => {
    service.getBlog(1).subscribe();
    const request = httpMock.expectOne(`${service.apiUrl}/blogs/1`);
    expect(request.request.method).toBe('GET');
    httpMock.verify();
  });

  it('should be able to delete one blog with id param from the API using DELETE method', () => {
    service.deleteBlog(1).subscribe();
    const request = httpMock.expectOne(`${service.apiUrl}/blogs/1`);
    expect(request.request.method).toBe('DELETE');
    httpMock.verify();
  });

  it('should be able to update one blog with id param and blog data from the API using PUT method', () => {
    service.updateBlog(1,{
      title: 'Test Blog 3',
      body: 'Testing rest api service 3',
      description: 'testing 3',
      image: 'testing.png 3'
    }).subscribe();
    const request = httpMock.expectOne(`${service.apiUrl}/blogs/1`);
    expect(request.request.method).toBe('PUT');
    httpMock.verify();
  });


  it('should be able to retrieve comments of a blog from the API using GET method', () => {
    const dummyComments: Comment[] = [{
      id: '1',
      name: 'Test comment',
      comment: `Testing rest api service`,
    },
    {
      id: '2',
      name: 'Test comment',
      comment: `Testing rest api service`,
    }];

    service.getComments(1).subscribe(comments =>{
      expect<any>(comments).toEqual(dummyComments);      
    });
    const request = httpMock.expectOne(`${service.apiUrl}/blogs/1/comments`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyComments);
    httpMock.verify();
  });



  it('should be able to create comment for a blog using POST method', () => {
    service.createComment({
      id: '3',
      name: 'Test comment',
      comment: `Testing rest api service`
    },1).subscribe((comment)=>{
      expect<any>(comment).toEqual(createdComment);
    });
 
 
    const createdComment = {
      id: '3',
      name: 'Test comment',
      comment: `Testing rest api service`
    };
 
    const request = httpMock.expectOne(`${service.apiUrl}/blogs/1/comments`);
    expect(request.request.method).toBe('POST');
    request.flush(createdComment);
    httpMock.verify();
   });

});
