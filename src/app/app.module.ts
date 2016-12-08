import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AriticleComponent } from './ariticle/ariticle.component';
import { TabComponent } from './tab/tab.component';
import { ScrollDirective } from './tab/scroll.directive';
import { GridComponent, GridRowComponent, GridItemComponent } from './grid';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { OtherComponent } from './parent-child/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    AriticleComponent,
    TabComponent,
    ScrollDirective,
    GridComponent,
    GridRowComponent,
    GridItemComponent,
    ParentComponent,
    ChildComponent,
    OtherComponent
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
