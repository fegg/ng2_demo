import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AriticleComponent } from './ariticle/ariticle.component';
import { TabComponent } from './tab/tab.component';
import { ScrollDirective } from './tab/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    AriticleComponent,
    TabComponent,
    ScrollDirective
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
