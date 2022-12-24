import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTemplateComponent } from './local-template.component';

describe('LocalTemplateComponent', () => {
  let component: LocalTemplateComponent;
  let fixture: ComponentFixture<LocalTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
