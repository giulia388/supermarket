import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrenotazionePage } from './prenotazione.page';

describe('PrenotazionePage', () => {
  let component: PrenotazionePage;
  let fixture: ComponentFixture<PrenotazionePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotazionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
