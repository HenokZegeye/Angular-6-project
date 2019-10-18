import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';



describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in an anchor tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Demo Blog');
  });

  it('should have a router outlet', () => {
    let de = debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });


  it('should have a link to blogs page', () => {
    let debugElements = debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElements.findIndex(de=>de.properties['href']==='/');
    expect(index).toBeGreaterThan(-1);
  });
  
  
});
