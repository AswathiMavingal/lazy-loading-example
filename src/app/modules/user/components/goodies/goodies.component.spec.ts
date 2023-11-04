import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodiesComponent } from './goodies.component';

describe('GoodiesComponent', () => {
  let component: GoodiesComponent;
  let fixture: ComponentFixture<GoodiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodiesComponent]
    });
    fixture = TestBed.createComponent(GoodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
