import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminLayoutComponent } from './shered/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import {SharedModule} from './shered/shared.module';
import {AuthGuard} from './shered/auth.guard';
import {SearchPipe} from './shered/search.pipe';
import {AlertService} from './shered/alert.service';
import {RouterModule} from '@angular/router';
import {AlertComponent} from '../shared/components/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {
            path: 'dashboard', component: DashboardPageComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'create', component: CreatePageComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'post/:id/edit', component: EditPageComponent,
            canActivate: [AuthGuard]
          },
        ]
      }

    ]),
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    // AppModule,
  ],
  exports: [RouterModule],
  providers: [AuthGuard, AlertService],
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    SearchPipe,
    AlertComponent
  ]
})
export class AdminModule {

}
