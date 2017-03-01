import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';
import {CustomerComponent} from "./customers/customer-table/customer-table.component";
import {CustomerService} from "./customers/customer.service";
import {DraftsComponent} from "./customers/drafts/drafts.component";
import {FormComponent} from "./form/form.component";
import {SliderComponent} from "./slider/slider.component";

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CheckStatusComponent } from './customers/check-status/check-status.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerComponent,
    DraftsComponent,
    FormComponent,
    SliderComponent,
    CheckStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),  IMA duomenis is in-memory-service ir neleidzia imt is remote db
    AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


