import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from '../guard/auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { PanelModule } from '../panel/panel.module';
import { ContactDetailsPageComponent } from './contact-details-page/contact-details-page.component';

export const PAGE_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignUpComponent }, 
    { path: 'contact-details/:mode', component: ContactDetailsPageComponent, canActivate: [AuthGuard] },
    { path: 'contact-details/:mode/:contactId', component: ContactDetailsPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    LoginPageComponent,
    HomePageComponent,
    SignUpComponent,
    ContactDetailsPageComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    RouterModule.forChild(PAGE_ROUTES)
  ],
  providers: []
})
export class PageModule { }
