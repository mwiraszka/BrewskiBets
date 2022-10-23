import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BetEditorComponent } from './bet-editor/bet-editor.component';
import { BetTableComponent } from './bet-table/bet-table.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BetEditorComponent,
    BetTableComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
