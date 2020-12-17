import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaterielPage } from './materiel.page';

describe('MaterielPage', () => {
  let component: MaterielPage;
  let fixture: ComponentFixture<MaterielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterielPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaterielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
