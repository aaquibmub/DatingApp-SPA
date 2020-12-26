
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getValues();
  }

  getValues(): void {
    this.http.get('http://localhost:5000/weatherforecast/').subscribe(
      response => {
        this.values = response;
      },
      error => {
        console.error(error);
      }
    );
  }

}
