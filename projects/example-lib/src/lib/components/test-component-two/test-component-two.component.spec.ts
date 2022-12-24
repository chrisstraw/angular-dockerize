import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentTwoComponent } from './test-component-two.component';

describe('TestComponentTwoComponent', () => {
  let component: TestComponentTwoComponent;
  let fixture: ComponentFixture<TestComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
