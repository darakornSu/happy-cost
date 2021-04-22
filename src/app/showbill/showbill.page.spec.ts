import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowbillPage } from './showbill.page';

describe('ShowbillPage', () => {
  let component: ShowbillPage;
  let fixture: ComponentFixture<ShowbillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
