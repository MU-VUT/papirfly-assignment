import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesItemComponent } from './tiles-item.component';

describe('TilesItemComponent', () => {
  let component: TilesItemComponent;
  let fixture: ComponentFixture<TilesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TilesItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TilesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
