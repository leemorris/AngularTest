import {Resource} from '../../resource/models/Resource';
import {CoverageType} from '../../common/models/CoverageType';

export const RESOURCES: IResource[] = [
    // tslint:disable:max-line-length
    {ResourceId: 1000, FirstName: 'John', LastName: 'Ash', Address: '1203 Main St', City: 'HomeTown', State: 'VA', Zip: '12543', CoverageType: [{ Id: 333, Name: 'MA'}]},
    {ResourceId: 1100, FirstName: 'Jane', LastName: 'Elm', Address: '1423 First St', City: 'HomeTown', State: 'VA', Zip: '12543', CoverageType: [{ Id: 333, Name: 'MA'}]},
    {ResourceId: 1200, FirstName: 'Anne', LastName: 'Oak', Address: '6123 Second St', City: 'HomeTown', State: 'VA', Zip: '12543', CoverageType: [{ Id: 333, Name: 'MA'}]},
    {ResourceId: 1300, FirstName: 'Alice', LastName: 'Poplar', Address: '1723 Third St', City: 'HomeTown', State: 'VA', Zip: '12543', CoverageType: [{ Id: 333, Name: 'MA'}]},
    {ResourceId: 1400, FirstName: 'Richard', LastName: 'Hickory', Address: '1423 Fourth St', City: 'HomeTown', State: 'VA', Zip: '12543', CoverageType: [{ Id: 333, Name: 'MA'}]},
    {ResourceId: 1500, FirstName: 'Ronald', LastName: 'Maple', Address: '1238 Fifth St', City: 'HomeTown', State: 'VA', Zip: '12543', CoverageType: [{ Id: 333, Name: 'MA'}]}

];
