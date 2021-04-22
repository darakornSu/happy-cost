import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowactivityPage } from './showactivity.page';

describe('ShowactivityPage', () => {
  let component: ShowactivityPage;
  let fixture: ComponentFixture<ShowactivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowactivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
