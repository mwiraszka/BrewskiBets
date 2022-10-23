import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import packageJson from '../../../package.json';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Rendering', () => {
    it('should render the component', () => {
      expect(component).toBeTruthy();
    });

    it('<small> should contain copyright information', () => {
      const currentYear = new Date().getFullYear();
      expect(getElement('small')?.textContent).toBe(
        `Copyright © ${currentYear} Brewski Bets`
      );
    });

    it('<address> should contain the app version and a link to the GitHub repo', () => {
      const appVersion = packageJson.version;
      expect(getElement('address p')?.textContent).toBe(`v${appVersion}`);
      expect(getElement('address a')?.getAttribute('href')).toBe(
        'https://github.com/mwiraszka/BrewskiBets#readme'
      );
    });

    function getElement(selector: string): HTMLElement | null {
      return fixture.debugElement.nativeElement.querySelector(selector);
    }
  });
});
