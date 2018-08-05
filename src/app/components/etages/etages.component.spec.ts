import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagesComponent } from './etages.component';

describe('EtagesComponent', () => {
  let component: EtagesComponent;
  let fixture: ComponentFixture<EtagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
