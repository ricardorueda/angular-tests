import { CounterComponent } from "./counter.component";

/**
 * This component has some logic in it, and a very simple template.
 * For now, we only want to test the class logic. For doing so,
 * we will test only the component class without rendering the template.
 * This test is an Isolated test.
 */
describe("CounterComponent (isolated test)", () => {
  it("should instantiate", () => {
    const component: CounterComponent = new CounterComponent();
    expect(component).toBeDefined();
  });

  it("should start with a counter at `0`", () => {
    const component: CounterComponent = new CounterComponent();
    expect(component.counter).toEqual(0);
  });

  it("should be able to increment the counter (+1)", () => {
    const component: CounterComponent = new CounterComponent();
    component.counter = 5;

    component.increment();
    component.increment();

    expect(component.counter).toEqual(7);
  });

  it("should be able to decrement the counter (-1)", () => {
    const component: CounterComponent = new CounterComponent();
    component.counter = 5;

    component.decrement();
    component.decrement();

    expect(component.counter).toEqual(3);
  });
});
