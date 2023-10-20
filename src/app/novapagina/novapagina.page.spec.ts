import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovapaginaPage } from './novapagina.page';

describe('NovapaginaPage', () => {
  let component: NovapaginaPage;
  let fixture: ComponentFixture<NovapaginaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NovapaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
