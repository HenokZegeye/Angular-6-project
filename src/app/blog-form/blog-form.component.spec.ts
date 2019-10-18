import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogFormComponent } from './blog-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BlogFormComponent', () => {
  let component: BlogFormComponent;
  let fixture: ComponentFixture<BlogFormComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ BlogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFormComponent);
    component = fixture.debugElement.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have as pageTitle 'Create Blog' when the id is undefined`, () => {
    expect(component.pageTitle).toEqual('Create Blog');
  });

  it('should render pagetitle as Create Blog in h1 tag', () => {
    fixture.detectChanges();
    expect(debugElement.query(By.css('h1')).nativeElement.textContent).toContain("Create Blog"); 
  });

  it(`should have as pageTitle 'Edit Blog' when the id is defined`, () => {
    component.id = '1';
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.pageTitle).toEqual("Edit Blog"); 
  });

  it('should render pageTitle as Edit Blog in h1 tag', () => {
    component.id = '1';
    component.ngOnInit();
    fixture.detectChanges();
    expect(debugElement.query(By.css('h1')).nativeElement.textContent).toContain('Edit Blog');
  });


  

  
});
