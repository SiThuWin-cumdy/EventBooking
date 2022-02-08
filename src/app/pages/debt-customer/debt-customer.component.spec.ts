import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtCustomerComponent } from './debt-customer.component';

describe('DebtCustomerComponent', () => {
  let component: DebtCustomerComponent;
  let fixture: ComponentFixture<DebtCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
