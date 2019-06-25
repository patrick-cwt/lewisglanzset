import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
      
  ],
  providers: [
    AuthService, 
    UserService, 
    ContactService
  ]
})
export class ServiceModule { }
