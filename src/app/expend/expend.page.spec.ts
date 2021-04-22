import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpendPage } from './expend.page';

describe('ExpendPage', () => {
  let component: ExpendPage;
  let fixture: ComponentFixture<ExpendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
