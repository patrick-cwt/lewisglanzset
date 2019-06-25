import { NgModule } from '@angular/core';
import { AuthRest } from './auth.rest';
import { HttpClientModule } from '@angular/common/http';
import { UserRest } from './user.rest';
import { ContactRest } from './contact.rest';

@NgModule({
  declarations: [
    
  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    AuthRest, 
    UserRest, 
    ContactRest
  ]
})
export class RestModule { }
