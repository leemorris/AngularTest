interface IBackfillRequest {
    RequestId: number;
    ClientId: number;
    ClientName: string;
    HealthCenterId: number;
    HeathCenterName: string;
    StaffType: string;
    CoverageType: ICoverageType;
    Department: string;
    Reason: string;
    AdditionalInfo: string;
    EmployeeId: number;
    EmployeeName: string;
    RequesterEmployeeId: number;
    RequesterName: string;
    OwnerId: number;
    OwnerName: string;
    Status: string;
    Priority: number;
    State: string;
    TimeZone: string;
    HoursOfOperation: string;
    CoverageTypeName: string;
}
