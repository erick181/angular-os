import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDeleteComponent } from './client-delete.component';

describe('ClientDeleteComponent', () => {
  let component: ClientDeleteComponent;
  let fixture: ComponentFixture<ClientDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDeleteComponent]
    });
    fixture = TestBed.createComponent(ClientDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});