import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BehaviorPage } from './behavior.page';

describe('BehaviorPage', () => {
  let component: BehaviorPage;
  let fixture: ComponentFixture<BehaviorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BehaviorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
