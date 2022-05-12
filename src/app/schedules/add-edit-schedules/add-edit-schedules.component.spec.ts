import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSchedulesComponent } from './add-edit-schedules.component';

describe('AddEditSchedulesComponent', () => {
  let component: AddEditSchedulesComponent;
  let fixture: ComponentFixture<AddEditSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
