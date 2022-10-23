import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { BetTableComponent } from './bet-table.component';

describe('BetTableComponent', () => {
  let component: BetTableComponent;
  let fixture: ComponentFixture<BetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule, HttpClientModule],
      declarations: [BetTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Rendering', () => {
    it('should render the component', () => {
      expect(component).toBeTruthy();
    });

    it('<table> should render a table with icons, images, and buttons inside it', () => {
      expect(getElement('table thead')).toBeTruthy();
      expect(getElement('table tbody')).toBeTruthy();
      expect(getElement('table tfoot')).toBeTruthy();
      expect(getElement('table th')).toBeTruthy();
      expect(getElement('table tr')).toBeTruthy();
      expect(getElement('table td')).toBeTruthy();
      expect(getElement('table fa-icon')).toBeTruthy();
      expect(getElement('table img')).toBeTruthy();
      expect(getElement('table button')).toBeTruthy();
    });

    function getElement(selector: string): HTMLElement | null {
      return fixture.debugElement.nativeElement.querySelector(selector);
    }
  });
});
