import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersDetailComponent } from './monsters-detail.component';

describe('MonstersDetailComponent', () => {
  let component: MonstersDetailComponent;
  let fixture: ComponentFixture<MonstersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
