import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SumActivityPage } from './sum-activity.page';

describe('SumActivityPage', () => {
  let component: SumActivityPage;
  let fixture: ComponentFixture<SumActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SumActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
