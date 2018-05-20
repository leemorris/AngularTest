import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BackfillRequest} from '../models/backfillRequest';
import { RequestService } from '../../services/request.service';
import { SelectItem} from 'primeng/api';
import {Router} from '@angular/router';
@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requestListForm: FormGroup;
  requestList: Array<BackfillRequest>;
   cols: any[];
  selectedColumns: any[];
  selectedRequest: BackfillRequest;

  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit() {

    this.requestListForm = new FormGroup({
     listControl : new FormControl()
    });
    this.requestList = this.requestService.getRequests();

    this.cols = [
        { field: 'RequestId', header: 'Request Id' },
        { field: 'ClientName', header: 'Client Name' },
        { field: 'StaffType', header: 'Staff Type' },
        { field: 'CoverageTypeName', header: 'Coverage Type' },
        { field: 'Reason', header: 'Reason' },
        { field: 'EmployeeName', header: 'Employee Name' },
        { field: 'RequesterName', header: 'Requester Name' },
        { field: 'OwnerName', header: 'Owner Name' },
        { field: 'Status', header: 'Status' },
        { field: 'Priority', header: 'Priority' },
        { field: 'State', header: 'State' }

    ];

    this.selectedColumns = this.cols;
  }

  private onRowSelect(event) {
    this.router.navigate(['/backfill/request', event.RequestId]  );
    console.log('Row Selected ' + event.RequestId);
  }

}



