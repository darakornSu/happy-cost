import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowrevenuePage } from './showrevenue.page';

describe('ShowrevenuePage', () => {
  let component: ShowrevenuePage;
  let fixture: ComponentFixture<ShowrevenuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowrevenuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowrevenuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
