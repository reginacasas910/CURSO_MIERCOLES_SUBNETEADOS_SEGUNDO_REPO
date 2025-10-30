import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eduardo } from './eduardo';

describe('Eduardo', () => {
  let component: Eduardo;
  let fixture: ComponentFixture<Eduardo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eduardo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eduardo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
