import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentOneComponent } from './test-component-one.component';

describe('TestComponentOneComponent', () => {
  let component: TestComponentOneComponent;
  let fixture: ComponentFixture<TestComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
