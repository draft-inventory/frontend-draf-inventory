import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesToolbarComponent } from './sales-toolbar.component';

describe('SalesToolbarComponent', () => {
  let component: SalesToolbarComponent;
  let fixture: ComponentFixture<SalesToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
