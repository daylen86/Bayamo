import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuedaComponent } from './rueda.component';

describe('RuedaComponent', () => {
  let component: RuedaComponent;
  let fixture: ComponentFixture<RuedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuedaComponent]
    });
    fixture = TestBed.createComponent(RuedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
