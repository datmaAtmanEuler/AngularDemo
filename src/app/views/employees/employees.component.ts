import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import {ModalDirective} from '../../lib/ng-uikit-pro-standard/free/modals';
import * as ClassicEditor from '../../../assets/js/ck-editor-math-type/ckeditor.js';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  @ViewChild('confirmDeleteEmployee', {static: false}) confirmDeleteEmployee: ModalDirective;
  employeesList:any = [];
  employee: any;
  Editor = ClassicEditor;

  constructor(private service: EmployeeService) { }

  ngOnInit() {
	this.reload();
  }

    remove(employee) {
        this.employee = employee;
        this.confirmDeleteEmployee.show();
    }

  reload() {
	const _this = this;
	this.service.getEmployeesList().subscribe((res:Employee[]) => {
		_this.employeesList = res;
		_this.employeesList.forEach(function(employee: Employee) {
			const rpt = employee.ReportingTo;
			if(rpt) {
				_this.service.getEmployee(rpt).subscribe((res2: Employee) => {
					if (res2) {
						employee.ReportingTo = [res2.FirstName, res2.MiddleName, res2.LastName].join(' ');
					}
				});
			}
		});
	});
  }

  add() {
  }

  edit(employeeId: number) {
	alert(`Are you sure you want to edit employee with Id=${employeeId}`);
  }

  delete() {
	const _this = this;
	this.service.deleteEmployee(_this.employee.Id).subscribe((res:Boolean) => {
		_this.reload();
	});
  }
}
