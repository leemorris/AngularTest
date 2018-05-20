export class Resource implements IResource {
    ResourceId: number;
    FirstName: string;
    LastName: string;
    Address: string;
    City: string;
    State: string;
    Zip: string;
    CoverageType: ICoverageType[];
}
