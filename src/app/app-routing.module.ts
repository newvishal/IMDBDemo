import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './auth.guard';   ,canActivate: [AuthGuard]

const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch: 'full'}
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
