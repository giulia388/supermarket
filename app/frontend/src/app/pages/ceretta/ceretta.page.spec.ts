import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerettaPage } from './ceretta.page';

describe('CerettaPage', () => {
  let component: CerettaPage;
  let fixture: ComponentFixture<CerettaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CerettaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
