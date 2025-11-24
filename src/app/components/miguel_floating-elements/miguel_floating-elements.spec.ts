import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingElements } from './miguel_floating-elements';

describe('FloatingElements', () => {
  let component: FloatingElements;
  let fixture: ComponentFixture<FloatingElements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingElements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingElements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
