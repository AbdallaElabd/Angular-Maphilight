import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaphilightComponent } from './maphilight.component';

describe('MaphilightComponent', () => {
  let component: MaphilightComponent;
  let fixture: ComponentFixture<MaphilightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaphilightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaphilightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
