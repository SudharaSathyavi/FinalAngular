import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard/:user', component: DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
