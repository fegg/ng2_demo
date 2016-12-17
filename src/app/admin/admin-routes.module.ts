import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { UserListComponent } from '../admin/userList/userList.component';
import { RoleListComponent } from '../admin/roleList/roleList.component';
import { ModuleListComponent } from '../admin/moduleList/moduleList.component';
import { AdminUserComponent } from '../admin/adminUser/adminUser.component';
import { ClientUserComponent } from '../admin/clientUser/clientUser.component';
import { ImageLazy.directive.tsDirective } from './Users/lulin/Desktop/ng2_demo/src/app/list/imageLazy.directive.ts.directive';
import { ImageLazyDirective } from './Users/lulin/Desktop/ng2_demo/src/app/list/imageLazy.directive';

const routes: Routes = [{
    path: 'dashboard',
    component: DashboardComponent
}, {
    path: 'userList',
    component: UserListComponent,
    children: [{
        path: 'adminUser',
        component: AdminUserComponent
    }, {
        path: 'clientUser',
        component: ClientUserComponent
    },
    ImageLazy.directive.tsDirective,
    ImageLazyDirective
]
}, {
    path: 'roleList',
    component: RoleListComponent
}, {
    path: 'moduleList',
    component: ModuleListComponent
}, {
    path: '',
    component: DashboardComponent
}, {
    path: '**',
    component: DashboardComponent
}]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutesModule {
    
}