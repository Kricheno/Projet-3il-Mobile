import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostesPage } from './postes.page';

describe('PostesPage', () => {
  let component: PostesPage;
  let fixture: ComponentFixture<PostesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
