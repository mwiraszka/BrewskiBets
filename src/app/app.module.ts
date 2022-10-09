import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BetTableComponent } from './bet-table/bet-table.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BetEditorComponent } from './bet-editor/bet-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    BetTableComponent,
    FooterComponent,
    HeaderComponent,
    BetEditorComponent,
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
