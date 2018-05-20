import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../models/resource';
import { SelectItem} from 'primeng/api';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
resourceListForm; FormGroup;
resourceList: Array<Resource>;
cols: any;
selectedColumns: any[];
selectedResource: Resource;

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceListForm = new FormGroup({
      listControl: new FormControl()
    });
    this.resourceList = this.resourceService.getResources();
       this.cols = [
        { field: 'ResourceId', header: 'Resource Id' },
        { field: 'FirstName', header: 'First Name' },
        { field: 'LastName', header: 'Last Name' },
        { field: 'Address', header: 'Address' },
        { field: 'City', header: 'City' },
        { field: 'Zip', header: 'Zip' },



    ];

    this.selectedColumns = this.cols;
  }

  private onRowSelect(event) {
    console.log('Row Selected ' + event.FirstName);
  }
}


