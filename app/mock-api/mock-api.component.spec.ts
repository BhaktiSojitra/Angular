import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockAPIComponent } from './mock-api.component';

describe('MockAPIComponent', () => {
  let component: MockAPIComponent;
  let fixture: ComponentFixture<MockAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockAPIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
