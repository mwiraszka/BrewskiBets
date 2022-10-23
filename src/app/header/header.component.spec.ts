import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
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

  describe('Rendering', () => {
    it('should render the component', () => {
      expect(component).toBeTruthy();
    });

    it('<div class="app-title"> should contain the app title and logo', () => {
      expect(getElement('div.app-title h1')?.textContent).toBe('Brewski Bets');
      expect(getElement('div.app-title img')?.getAttribute('src')).toBe(
        'assets/bb-logo.svg'
      );
    });

    it('<h2> should contain reference to the tournament', () => {
      expect(getElement('h2')?.textContent).toContain('FIFA World Cup Qatar 2022');
    });

    function getElement(selector: string): HTMLElement | null {
      return fixture.debugElement.nativeElement.querySelector(selector);
    }
  });
});
