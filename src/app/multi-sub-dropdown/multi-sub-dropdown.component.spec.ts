import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSubDropdownComponent } from './multi-sub-dropdown.component';

describe('MultiSubDropdownComponent', () => {
  let component: MultiSubDropdownComponent;
  let fixture: ComponentFixture<MultiSubDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSubDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSubDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
