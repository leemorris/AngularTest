import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BackfillRequest } from '../models/backfillRequest';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  requestDetailForm: FormGroup;
  request: IBackfillRequest;
  constructor() { }

  ngOnInit(): void {
    this.request = new BackfillRequest();
        this.requestDetailForm = new FormGroup({
          firstName: new FormControl(),
          lastName: new FormControl(),
          address: new FormControl(),
          city: new FormControl(),
          state: new FormControl(),
        });
  }
  public save(): void {

  }
}
