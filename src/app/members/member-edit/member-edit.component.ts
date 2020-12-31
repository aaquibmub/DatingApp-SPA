import { AuthService } from './../../_services/auth.service';
import { UserService } from './../../_services/user.service';
import { AlertifyService } from './../../_services/alertify.service';
import { User } from './../../_model/User';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private userService: UserService,
    private authServce: AuthService) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      data => {
        this.user = data['user'];
      }
    );
  }

  updateUser(): void {
    this.userService.updateUser(this.authServce.decodedToken.nameid, this.user)
      .subscribe(
        () => {
          this.alertify.success('Profile updated successfuly');
        },
        (err) => {
          this.alertify.error(err);
        },
        () => {
          this.editForm.reset(this.user);
        }
      );
  }

}
