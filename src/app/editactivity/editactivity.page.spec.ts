import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditactivityPage } from './editactivity.page';

describe('EditactivityPage', () => {
  let component: EditactivityPage;
  let fixture: ComponentFixture<EditactivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditactivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
