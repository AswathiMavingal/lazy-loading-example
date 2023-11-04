import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGoodiesComponent } from './add-edit-goodies.component';

describe('AddEditGoodiesComponent', () => {
  let component: AddEditGoodiesComponent;
  let fixture: ComponentFixture<AddEditGoodiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditGoodiesComponent]
    });
    fixture = TestBed.createComponent(AddEditGoodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
