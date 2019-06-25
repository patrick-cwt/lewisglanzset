import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public message: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.tokenObservable.subscribe((token) => {
      console.log("handle token: " + token);
      if (token === undefined || token === '') {
        this.message = "Invalid Credentials!";
      }
    });

    this.message = "";
  }

  public onSignIn(username: HTMLInputElement, password: HTMLInputElement): void {
    console.log('' + username.value + password.value);
    this.authService.login(username.value, password.value)
            .pipe(first())
            .subscribe(
                data => {
                  this.router.navigate(['/home']);
                },
                error => {
                  console.log('error login');
                }
            );
  }

  public onSignUp(): void {
    this.router.navigate(['/signup']);
  }

  public onBackToLogin(): void {
    this.router.navigate(['/login']);
  }
  
  public reset(): void {
    this.message = "";
  }

}
