import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CounterComponent } from "./counter.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

/**
 * Now that the inner class' logic is tested.
 * To test if the buttons trigger the right logic, we need to test them.
 * We need to render the template and trigger some clicks.
 * Because this component'template contains another component,
 * and we only want to test the relevant part of the template, we will not
 * render the child component.
 * This is a Shallow test.
 */
describe("CounterComponent (shallow test)", () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents(); // This is not needed if you are in the CLI context
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should instantiate", () => {
    expect(component).toBeDefined();
  });

  it("should correct render the passed @Input value and update data", () => {
    expect(fixture.debugElement.nativeElement.querySelector(".name")).toBeNull();

    component.name = "points";

    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector(".name").innerHTML).toBe('points');
    
  });

  it("should increment the counter if increment button is clicked (+1)", () => {
    const button = fixture.debugElement.nativeElement.querySelector(
      ".button-up"
    );

    button.click();
    button.click();

    expect(component.counter).toEqual(2);
  });

  it("should decrement the counter if decrement button is clicked (-1)", () => {
    component.counter = 5;
    const button = fixture.debugElement.nativeElement.querySelector(
      ".button-down"
    );

    button.click();
    button.click();

    expect(component.counter).toEqual(3);
  });

  it("should reset the counter if reset button is clicked (0)", () => {
    component.counter = 3;
    const button = fixture.debugElement.nativeElement.querySelector(
      ".button-0"
    );

    button.click();

    expect(component.counter).toEqual(0);
  });
});
