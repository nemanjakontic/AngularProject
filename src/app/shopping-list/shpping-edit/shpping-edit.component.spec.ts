import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShppingEditComponent } from './shpping-edit.component';

describe('ShppingEditComponent', () => {
  let component: ShppingEditComponent;
  let fixture: ComponentFixture<ShppingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShppingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
