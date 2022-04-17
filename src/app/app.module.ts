import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageTesterComponent } from './homepage-tester/homepage-tester.component';
import { HomepageProgrammerComponent } from './homepage-programmer/homepage-programmer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth/auth.component';
import { AddBugReportComponent } from './add-bug-report/add-bug-report.component';
import { RegisterComponent } from './register/register.component';
import { HomepageAdminComponent } from './homepage-admin/homepage-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthService} from "./auth/services/auth.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomepageTesterComponent,
    HomepageProgrammerComponent,
    AuthComponent,
    AddBugReportComponent,
    RegisterComponent,
    HomepageAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    HttpClient,

    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
