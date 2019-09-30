import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { CounterComponent } from "./counter.component";
import { MenuComponent } from './../../shared/menu/menu.component';

/**
 * We could now go deeper and test the whole component with its dependencies,
 * see if everything is working great.
 * This is an Integrated test.
 */
describe('CounterComponent (integrated test)', () => {
    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;
    let router: Router;
    
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [CounterComponent, MenuComponent],
        imports: [RouterTestingModule]
      }).compileComponents(); // This is not needed if you are in the CLI context
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CounterComponent);
      component = fixture.componentInstance;
  
      router = TestBed.get(Router);
      spyOn(router, 'navigateByUrl');
  
      fixture.detectChanges();
    });
  
    it('should instantiate', () => {
      expect(component).toBeDefined();
    });
  
    it('should trigger the navigation to `/home`', async(() => {
      const link = fixture.debugElement.nativeElement.querySelector('.home-link');
  
      link.click();
  
      expect(router.navigateByUrl).toHaveBeenCalled();
    }));
  });