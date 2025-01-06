import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: StaffDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }

/*
@ng MOdule = it is a docerater which aacepts the meta data from the progrmmer which informs the angulkar that how to compile the componentes template and its dependency injections.
Load Children = by using the load children key we specify the names of  child modules that we want to load 
for child method = the for child method is used in future module to configure the routes which are specific to that module.
 */