import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInnerComponent } from './dialog-inner.component';

describe('DialogInnerComponent', () => {
  let component: DialogInnerComponent;
  let fixture: ComponentFixture<DialogInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogInnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
