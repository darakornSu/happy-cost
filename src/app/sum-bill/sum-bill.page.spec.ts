import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SumBillPage } from './sum-bill.page';

describe('SumBillPage', () => {
  let component: SumBillPage;
  let fixture: ComponentFixture<SumBillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumBillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SumBillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
