import { Component, OnInit } from '@angular/core';
import { ErrorMessage, InputValidationMapping } from '../../model/error-message.model';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Contact } from '../../model/contact.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public userExistMsg: boolean;
  public signInSuccessful: boolean;
  public signInUnsuccessful: boolean;
  public signInFieldsShown: boolean;

  private inputValidationMsgsMap: Map<string, InputValidationMapping>;
  private errorMsgMap: Map<string, string>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.userRegistrationObserver.subscribe((registered) => {
      console.log("handle user registration: " + registered);
      this.signInSuccessful = registered;
      this.signInUnsuccessful = !registered;
      this.signInFieldsShown = false;
    });

    this.inputValidationMsgsMap = new Map();
    this.errorMsgMap = new Map();
    this.reset();
    this.signInFieldsShown = true;
    this.signInSuccessful = false;
    this.signInUnsuccessful = false;
    this.userExistMsg = false;
  }

  public onSignInNow(): void {
    this.router.navigate(['/login']);
  }

  public onBackToLogin(): void {
    this.router.navigate(['/login']);
  }

  public onSubmit(txtUsername: HTMLInputElement, txtPassword1: HTMLInputElement, 
    txtPassword2: HTMLInputElement, txtFirstName: HTMLInputElement, txtLastName: HTMLInputElement): void {
    
    this.setInputValidationMapping('username', 'Username is required!', txtUsername);
    this.setInputValidationMapping('password1', 'Password is required!', txtPassword1);
    this.setInputValidationMapping('password2', 'Password is required!', txtPassword2);
    this.setInputValidationMapping('firstname', 'First Name is required!', txtFirstName);
    this.setInputValidationMapping('lastname', 'Last Name is required!', txtLastName);

    if (this.areRequiredFieldsNotEmpty() && 
        this.arePasswordsValid(txtPassword1.value, txtPassword2.value)) {
      const newUser = new User(txtUsername.value, txtPassword1.value, 
        txtFirstName.value, txtLastName.value);
  
      this.userService.register(newUser)
          .pipe(first())
          .subscribe(
              data => {
                console.log(data);
                const msg = data['message'];
                const registered = data['registered'];
                
                if (!registered) {
                  this.userExistMsg = msg;
                }
              },
              error => {
                console.log('error login: ' + error);
              }
          );
    }
  }

  private registerUser(): void {
    
  }

  private setInputValidationMapping(key: string, validationMsg: string, input: HTMLInputElement): void {
    this.inputValidationMsgsMap.set(key, new InputValidationMapping(input, validationMsg));
  }

  private areRequiredFieldsNotEmpty(): boolean {
    let result: boolean = true;

    this.errorMsgMap.clear();
    this.inputValidationMsgsMap.forEach((validationMapping, key) => {
      if (validationMapping.input.value === '' || validationMapping.input.value === 'undefined') {
        this.errorMsgMap.set(key, validationMapping.validationMsg);
        result = false;
      }
    });

    return result;
  }

  private arePasswordsValid(pwd1: string, pwd2: string): boolean {
    if (pwd1 !== pwd2) {
      this.errorMsgMap.set('password1', 'Passwords not the same!');
      this.errorMsgMap.set('password2', 'Passwords not the same!');
      return false;
    }
    return true;
  }

  public getValidationError(inputName: string): string {
    return this.errorMsgMap.get(inputName);
  }

  public reset(): void {
    this.errorMsgMap.clear();
  }

}
