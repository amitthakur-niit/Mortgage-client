import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageOptionsComponent } from './mortgage-options.component';

describe('MortgageOptionsComponent', () => {
  let component: MortgageOptionsComponent;
  let fixture: ComponentFixture<MortgageOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
