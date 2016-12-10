import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AriticleComponent } from './ariticle/ariticle.component';
import { TabComponent } from './tab/tab.component';
import { ScrollDirective } from './tab/scroll.directive';
import { GridComponent, GridRowComponent, GridItemComponent } from './grid';
// import { ParentComponent } from './parent-child/parent/parent.component';
// import { ChildComponent } from './parent-child/child/child.component';
import { OtherComponent } from './parent-child/other/other.component';
// import { ParentComponent } from './PC/parent/parent.component';
// import { ChildComponent } from './PC/child/child.component';
// import { ParentComponent } from './CP/parent/parent.component';
// import { ChildComponent } from './CP/child/child.component';
import { ParentComponent } from './PCO/parent/parent.component';
import { ChildComponent } from './PCO/child/child.component';
import { OtherChildComponent } from './PCO/otherChild/otherChild.component';

@NgModule({
  declarations: [
    AppComponent,
    AriticleComponent,
    TabComponent,
    ScrollDirective,
    GridComponent,
    GridRowComponent,
    GridItemComponent,
    // ParentComponent,
    // ChildComponent,
    OtherComponent,
    // ParentComponent,
    // ChildComponent,
    // ParentComponent,
    // ChildComponent,
    ParentComponent,
    ChildComponent,
    OtherChildComponent
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
