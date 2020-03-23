import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutehopitalComponent } from './ajoutehopital.component';

describe('AjoutehopitalComponent', () => {
  let component: AjoutehopitalComponent;
  let fixture: ComponentFixture<AjoutehopitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutehopitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutehopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
