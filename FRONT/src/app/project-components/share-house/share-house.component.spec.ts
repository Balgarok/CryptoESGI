import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareHouseComponent } from './share-house.component';

describe('ShareHouseComponent', () => {
  let component: ShareHouseComponent;
  let fixture: ComponentFixture<ShareHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
