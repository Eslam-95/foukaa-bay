import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArComponent } from './home-ar.component';

describe('HomeArComponent', () => {
  let component: HomeArComponent;
  let fixture: ComponentFixture<HomeArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
