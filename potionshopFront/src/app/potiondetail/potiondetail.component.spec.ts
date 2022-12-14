import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotiondetailComponent } from './potiondetail.component';

describe('PotiondetailComponent', () => {
  let component: PotiondetailComponent;
  let fixture: ComponentFixture<PotiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
