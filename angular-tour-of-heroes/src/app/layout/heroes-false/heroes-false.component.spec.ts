import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesFalseComponent } from './heroes-false.component';

describe('HeroesFalseComponent', () => {
  let component: HeroesFalseComponent;
  let fixture: ComponentFixture<HeroesFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesFalseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
