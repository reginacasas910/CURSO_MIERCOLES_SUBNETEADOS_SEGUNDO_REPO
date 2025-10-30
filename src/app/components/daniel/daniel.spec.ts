import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Daniel } from './daniel';

describe('Daniel', () => {
  let component: Daniel;
  let fixture: ComponentFixture<Daniel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Daniel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Daniel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
