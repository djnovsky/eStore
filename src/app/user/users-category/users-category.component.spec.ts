import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCategoryComponent } from './users-category.component';

describe('UsersCategoryComponent', () => {
  let component: UsersCategoryComponent;
  let fixture: ComponentFixture<UsersCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersCategoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
