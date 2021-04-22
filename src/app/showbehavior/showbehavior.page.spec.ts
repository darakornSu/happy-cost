import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowbehaviorPage } from './showbehavior.page';

describe('ShowbehaviorPage', () => {
  let component: ShowbehaviorPage;
  let fixture: ComponentFixture<ShowbehaviorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbehaviorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowbehaviorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
