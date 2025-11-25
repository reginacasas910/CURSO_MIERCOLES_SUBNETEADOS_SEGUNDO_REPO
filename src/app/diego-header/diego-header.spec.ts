import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiegoHeader } from './diego-header';

describe('DiegoHeader', () => {
  let component: DiegoHeader;
  let fixture: ComponentFixture<DiegoHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiegoHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiegoHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
