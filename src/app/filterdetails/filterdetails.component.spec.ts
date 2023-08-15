import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterdetailsComponent } from './filterdetails.component';

describe('FilterdetailsComponent', () => {
  let component: FilterdetailsComponent;
  let fixture: ComponentFixture<FilterdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterdetailsComponent]
    });
    fixture = TestBed.createComponent(FilterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
