import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionlistComponent } from './potionlist.component';

describe('PotionlistComponent', () => {
  let component: PotionlistComponent;
  let fixture: ComponentFixture<PotionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
