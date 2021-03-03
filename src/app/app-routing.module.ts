import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './_guards/auth.guard';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      SweetAlert2Module.forRoot({
          buttonsStyling: false,
          customClass: 'modal-content',
          confirmButtonClass: 'btn btn-primary',
          cancelButtonClass: 'btn'
      })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
