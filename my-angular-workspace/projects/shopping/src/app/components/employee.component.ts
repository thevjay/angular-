import { Component } from "@angular/core";


@Component({
    selector:"app-employee",
    template:`
        <h1>Welcome to angular Component vvv</h1>
        <hr>
        <dl>
            <dt>EmpID</dt>
            <dd>{{empId}}</dd>
            <dt>{{empName}}</dt>
            <dt>{{empSalary}}</dt>
        </dl>
    `,
    styles:["h1{'color':'green','text':'center'}"]
})

export class EmployeeComponent{
    empId:number = 101;
    empName: string = "Srikranth";
    empSalary: number = 1245;
}