import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAirlinesComponent } from './add-edit-airlines.component';

describe('AddEditAirlinesComponent', () => {
  let component: AddEditAirlinesComponent;
  let fixture: ComponentFixture<AddEditAirlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAirlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
