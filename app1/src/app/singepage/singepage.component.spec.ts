import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingepageComponent } from './singepage.component';

describe('SingepageComponent', () => {
  let component: SingepageComponent;
  let fixture: ComponentFixture<SingepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
