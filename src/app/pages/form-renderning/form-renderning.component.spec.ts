import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRenderningComponent } from './form-renderning.component';

describe('FormRenderningComponent', () => {
  let component: FormRenderningComponent;
  let fixture: ComponentFixture<FormRenderningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRenderningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRenderningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
