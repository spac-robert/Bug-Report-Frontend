import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageTesterComponent } from './homepage-tester/homepage-tester.component';
import { HomepageProgrammerComponent } from './homepage-programmer/homepage-programmer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageTesterComponent,
    HomepageProgrammerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
