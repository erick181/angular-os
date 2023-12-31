import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderCreateComponent } from './service-order-create.component';

describe('ServiceOrderCreateComponent', () => {
  let component: ServiceOrderCreateComponent;
  let fixture: ComponentFixture<ServiceOrderCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOrderCreateComponent]
    });
    fixture = TestBed.createComponent(ServiceOrderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
