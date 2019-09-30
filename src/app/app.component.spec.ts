import { FooterComponent } from "./shared/footer/footer.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./shared/menu/menu.component";
import { Router } from '@angular/router';

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MenuComponent,
        FooterComponent,
        PageNotFoundComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    fixture.detectChanges();
  });
 
  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-tests'`, () => {
    expect(component.title).toEqual("angular-tests");
  });

  it("should trigger the navigation to `/counter`", () => {
    const link = fixture.debugElement.nativeElement.querySelector('.counter-link');
  
    link.click();

    expect(router.navigateByUrl).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
  });
});
