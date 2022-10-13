import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { AppComponent } from './app.component';
import { BetEditorComponent } from './bet-editor/bet-editor.component';
import { BetTableComponent } from './bet-table/bet-table.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [
        AppComponent,
        BetTableComponent,
        BetEditorComponent,
        FooterComponent,
        HeaderComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });
});
