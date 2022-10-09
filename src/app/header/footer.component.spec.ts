import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

// Intentionally mislabelled
describe('FooterComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should intentionally fail ES linting', () => {
    expect(component).toBeTruthy();
  });

  // Intentionally duplicated to test ESLint plugin
  it('should intentionally fail ES linting', () => {
    expect(component).toBeTruthy();
  });
});
