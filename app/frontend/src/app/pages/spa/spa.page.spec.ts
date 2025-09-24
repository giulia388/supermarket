import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpaPage } from './spa.page';

describe('SpaPage', () => {
  let component: SpaPage;
  let fixture: ComponentFixture<SpaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
