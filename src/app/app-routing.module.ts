import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SecpageComponent } from './secpage/secpage.component';

const routes: Routes = [

    {path: '', redirectTo: '/secondpage', pathMatch:'full'},
    {path: 'home', component: HomepageComponent},
    {path: 'secondpage', component: SecpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
