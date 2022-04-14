import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageProgrammerComponent } from './homepage-programmer/homepage-programmer.component';
import { HomepageTesterComponent } from './homepage-tester/homepage-tester.component';
import { AuthComponent } from './auth/auth.component';
import {AddBugReportComponent} from './add-bug-report/add-bug-report.component'
import {RegisterComponent} from './register/register.component';
import {HomepageAdminComponent} from './homepage-admin/homepage-admin.component';

const routes: Routes = [
 
  {path: 'homepage-tester',component: HomepageTesterComponent},
  {path: 'homepage-programmer',component: HomepageProgrammerComponent},
  {path: 'auth',component: AuthComponent},
  {path: 'add-bug-report',component: AddBugReportComponent},
  {path: '',component: AuthComponent},
  {path: 'admin-register',component: RegisterComponent},
  {path: 'homepage-admin',component: HomepageAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
