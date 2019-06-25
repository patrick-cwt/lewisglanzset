import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';
import { map } from 'rxjs/operator/map';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public welcomeMsg: string;

  constructor(private authService: AuthService, private router: Router, 
    private userService: UserService) { }

  ngOnInit() {
    const username = this.authService.getUsername();
    if (username && username !== 'undefined') {
      this.userService.getUser(username) 
        .pipe(first())
        .subscribe(
            data => {
              this.welcomeMsg = "Hi " + data.firstName + " " + data.lastName;
            },
            error => {
              console.log('error login: ' + error);
            }
        );
    } else {
      this.welcomeMsg = 'LGSET';
    }
  }

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
