import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { AriticleComponent } from './ariticle/ariticle.component';
// import { TabComponent } from './tab/tab.component';
// import { ScrollDirective } from './tab/scroll.directive';
// import { GridComponent, GridRowComponent, GridItemComponent } from './grid';
// import { ParentComponent } from './parent-child/parent/parent.component';
// import { ChildComponent } from './parent-child/child/child.component';
// import { OtherComponent } from './parent-child/other/other.component';
// import { ParentComponent } from './PC/parent/parent.component';
// import { ChildComponent } from './PC/child/child.component';
// import { ParentComponent } from './CP/parent/parent.component';
// import { ChildComponent } from './CP/child/child.component';
// import { ParentComponent } from './PCO/parent/parent.component';
// import { ChildComponent } from './PCO/child/child.component';
// import { OtherChildComponent } from './PCO/otherChild/otherChild.component';

import { RoleListComponent } from './admin/roleList/roleList.component';
import { UserListComponent } from './admin/userList/userList.component';
import { ModuleListComponent } from './admin/moduleList/moduleList.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminUserComponent } from './admin/adminUser/adminUser.component';
import { ClientUserComponent } from './admin/clientUser/clientUser.component';

import { AdminRoutesModule } from './admin/admin-routes.module';
import { ListComponent } from './list/list.component';
import { ChooseComponent } from './choose/choose.component';
import { ServiceToServiceComponent } from './service-to-service/service-to-service.component';

@NgModule({
  declarations: [
    AppComponent,
    // AriticleComponent,
    // TabComponent,
    // ScrollDirective,
    // GridComponent,
    // GridRowComponent,
    // GridItemComponent,
    // ParentComponent,
    // ChildComponent,
    // OtherComponent
    // OtherChildComponent,
    RoleListComponent,
    UserListComponent,
    ModuleListComponent,
    DashboardComponent,
    AdminUserComponent,
    ClientUserComponent,
    ListComponent,
    ChooseComponent,
    ServiceToServiceComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
