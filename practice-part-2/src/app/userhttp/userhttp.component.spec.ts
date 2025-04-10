import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhttpComponent } from './userhttp.component';

describe('UserhttpComponent', () => {
  let component: UserhttpComponent;
  let fixture: ComponentFixture<UserhttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserhttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
