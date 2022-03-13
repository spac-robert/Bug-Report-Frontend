import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageProgrammerComponent } from './homepage-programmer/homepage-programmer.component';
import { HomepageTesterComponent } from './homepage-tester/homepage-tester.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
 
  {path: 'homepage-tester',component: HomepageTesterComponent},
  {path: 'homepage-programmer',component: HomepageProgrammerComponent},
  {path: 'auth',component: AuthComponent},
  {path: '',component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
