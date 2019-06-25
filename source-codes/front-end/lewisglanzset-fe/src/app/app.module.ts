import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageModule } from './page/page.module';
import { ConfigModule } from './config/config.module';
import { RestModule } from './rest/rest.module';
import { ServiceModule } from './service/service.module';
import { GuardModule } from './guard/guard.module';
import { InterceptorModule } from './interceptor/interceptor.module';
import { CommonModule } from '@angular/common';
import { PanelModule } from './panel/panel.module';

export const MAIN_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule,
    RouterModule.forRoot(MAIN_ROUTES),
    PanelModule,
    PageModule, 
    ConfigModule,
    GuardModule,
    InterceptorModule,
    RestModule,
    ServiceModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
