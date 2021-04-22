import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditbillPage } from './editbill.page';

describe('EditbillPage', () => {
  let component: EditbillPage;
  let fixture: ComponentFixture<EditbillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
