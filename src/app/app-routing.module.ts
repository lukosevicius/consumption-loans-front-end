import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DraftsComponent }   from './customers/drafts/drafts.component';
import { CustomerComponent }      from './customers/customer-table/customer-table.component';
import { CustomerDetailsComponent }  from './customers/customer-details/customer-details.component';
import { CheckStatusComponent }  from './customers/check-status/check-status.component';
import {FormComponent} from "./form/form.component";
import {SliderComponent} from "./slider/slider.component";

const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/drafts',
    //     pathMatch: 'full'
    // },
    {
        path: 'drafts',
        component: DraftsComponent
    },
    {
        path: 'detail/:id',
        component: CustomerDetailsComponent
    },
    {
        path: 'admin',
        component: CustomerComponent
    },
    {
        path: 'form',
        component: FormComponent
    },
    {
        path: 'slider',
        component: SliderComponent
    },
    {
        path: 'check',
        component: CheckStatusComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}