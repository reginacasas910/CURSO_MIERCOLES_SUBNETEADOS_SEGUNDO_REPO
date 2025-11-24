import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassionSection } from './miguel_passion-section';

describe('PassionSection', () => {
  let component: PassionSection;
  let fixture: ComponentFixture<PassionSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassionSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassionSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
