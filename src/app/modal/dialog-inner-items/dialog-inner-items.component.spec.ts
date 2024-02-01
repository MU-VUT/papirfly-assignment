import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInnerItemsComponent } from './dialog-inner-items.component';

describe('DialogInnerItemsComponent', () => {
  let component: DialogInnerItemsComponent;
  let fixture: ComponentFixture<DialogInnerItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogInnerItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogInnerItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
