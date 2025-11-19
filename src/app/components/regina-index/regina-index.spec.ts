import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReginaIndex } from './regina-index';

describe('ReginaIndex', () => {
  let component: ReginaIndex;
  let fixture: ComponentFixture<ReginaIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReginaIndex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReginaIndex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
