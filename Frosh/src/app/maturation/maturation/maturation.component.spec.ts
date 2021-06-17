import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturationComponent } from './maturation.component';

describe('MaturationComponent', () => {
  let component: MaturationComponent;
  let fixture: ComponentFixture<MaturationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaturationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
