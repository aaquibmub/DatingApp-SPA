import { Injectable, Component } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(msg: string, okCallBack: () => any): void {
    alertify.confirm(msg, (e: any) => {
      if (e) {
        okCallBack();
      }
    });
  }

  success(msg: string): void {
    alertify.success(msg);
  }

  error(msg: string): void {
    alertify.error(msg);
  }

  warning(msg: string): void {
    alertify.warning(msg);
  }

  message(msg: string): void {
    alertify.message(msg);
  }

}
