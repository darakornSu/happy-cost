import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowexpendPage } from './showexpend.page';

describe('ShowexpendPage', () => {
  let component: ShowexpendPage;
  let fixture: ComponentFixture<ShowexpendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowexpendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowexpendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
