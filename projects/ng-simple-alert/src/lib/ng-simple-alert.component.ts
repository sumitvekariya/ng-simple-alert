import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { AlertMessage, NgSimpleAlertService } from './ng-simple-alert.service';

@Component({
  selector: 'ng-alert',
  template: `
    <div class="alert" *ngIf="alertMessage$ | async as alertMessage" [ngStyle]="{ background: alertMessage.color }">
      <span class="closebtn" (click)="closeAlert()">&times;</span>
      <strong>{{ alertMessage?.prefix }}!</strong> {{ alertMessage?.message }}
    </div>
  `,
  styleUrls: ['./ng-simple-alert.component.css'],
})
export class NgSimpleAlertComponent implements OnInit {
  alertMessage$: Observable<AlertMessage | boolean>;
  close$ = new Subject<boolean>();

  constructor(private alertService: NgSimpleAlertService) {}

  ngOnInit() {
    this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
  }

  closeAlert(): void {
    this.close$.next();
  }
}
