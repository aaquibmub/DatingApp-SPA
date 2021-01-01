import { AuthService } from './_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './_model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.authService.currentUser = user;
      this.authService.changeMemberPhoto(user.photoUrl);
    }
  }
}
