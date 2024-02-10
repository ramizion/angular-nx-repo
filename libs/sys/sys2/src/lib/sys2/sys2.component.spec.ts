import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sys2Component } from './sys2.component';

describe('Sys2Component', () => {
  let component: Sys2Component;
  let fixture: ComponentFixture<Sys2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sys2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Sys2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
