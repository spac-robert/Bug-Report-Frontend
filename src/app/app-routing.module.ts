import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageProgrammerComponent } from './homepage-programmer/homepage-programmer.component';
import { HomepageTesterComponent } from './homepage-tester/homepage-tester.component';

const routes: Routes = [
  {path: '', component: HomepageTesterComponent},
  {path: 'homepage-tester',component: HomepageTesterComponent},
  {path: 'homepage-programmer',component: HomepageProgrammerComponent},
  //default trebuie sa fie login login
  //{path: '',component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
