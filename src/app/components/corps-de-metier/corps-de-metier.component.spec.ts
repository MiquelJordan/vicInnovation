import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpsDeMetierComponent } from './corps-de-metier.component';

describe('CorpsDeMetierComponent', () => {
  let component: CorpsDeMetierComponent;
  let fixture: ComponentFixture<CorpsDeMetierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpsDeMetierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpsDeMetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
