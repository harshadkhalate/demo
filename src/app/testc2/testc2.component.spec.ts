import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testc2Component } from './testc2.component';

describe('Testc2Component', () => {
  let component: Testc2Component;
  let fixture: ComponentFixture<Testc2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Testc2Component]
    });
    fixture = TestBed.createComponent(Testc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
