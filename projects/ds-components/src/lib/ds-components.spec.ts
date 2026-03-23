import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsComponents } from './ds-components';

describe('DsComponents', () => {
  let component: DsComponents;
  let fixture: ComponentFixture<DsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
