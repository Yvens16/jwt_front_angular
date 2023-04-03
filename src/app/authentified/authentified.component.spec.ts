import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentifiedComponent } from './authentified.component';

describe('AuthentifiedComponent', () => {
  let component: AuthentifiedComponent;
  let fixture: ComponentFixture<AuthentifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthentifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
