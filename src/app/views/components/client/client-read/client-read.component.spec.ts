import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReadComponent } from './client-read.component';

describe('ClientReadComponent', () => {
  let component: ClientReadComponent;
  let fixture: ComponentFixture<ClientReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientReadComponent]
    });
    fixture = TestBed.createComponent(ClientReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
