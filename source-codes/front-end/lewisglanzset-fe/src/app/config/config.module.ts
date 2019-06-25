import { NgModule } from '@angular/core';
import { RestApiConfig } from './rest-api.config';
import { JwtHelper } from 'angular2-jwt';

@NgModule({
  declarations: [
    
  ],
  imports: [
      
  ],
  providers: [
    RestApiConfig, 
    JwtHelper
  ]
})
export class ConfigModule { }
