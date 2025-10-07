import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnghiePage } from './unghie.page';

describe('UnghiePage', () => {
  let component: UnghiePage;
  let fixture: ComponentFixture<UnghiePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UnghiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
