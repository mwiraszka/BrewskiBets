import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { BetEditorComponent } from './bet-editor.component';

describe('BetEditorComponent', () => {
  let component: BetEditorComponent;
  let fixture: ComponentFixture<BetEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetEditorComponent],
      imports: [FontAwesomeTestingModule, HttpClientModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BetEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Rendering', () => {
    it('should render the component', () => {
      expect(component).toBeTruthy();
    });

    it('<section> should render modal with a form within it when [display = true]', () => {
      component.display = true;
      fixture.detectChanges();

      expect(getElement('section.open')).toBeTruthy();
      expect(getElement('div.bet-editor-content')).toBeTruthy();
      expect(getElement('button.close')).toBeTruthy();
      expect(getElement('form')).toBeTruthy();
    });

    it('<section> should not render modal when [display = false]', () => {
      component.display = false;
      fixture.detectChanges();

      expect(getElement('section')).toBeNull();
    });

    function getElement(selector: string): HTMLElement | null {
      return fixture.debugElement.nativeElement.querySelector(selector);
    }
  });
});
