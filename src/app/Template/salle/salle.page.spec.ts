import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SallePage } from './salle.page';

describe('SallePage', () => {
  let component: SallePage;
  let fixture: ComponentFixture<SallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SallePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
