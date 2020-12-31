import { AuthService } from './../_services/auth.service';
import { AlertifyService } from './../_services/alertify.service';
import { UserService } from './../_services/user.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../_model/User';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class MemberEditResolver implements Resolve<User>{
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService,
    private authService: AuthService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<User> {
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
      catchError((error) => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }

}
