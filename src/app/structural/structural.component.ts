import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {

  // 1. ngIf  &  1.1. ngIf and else
  
  // empId: Number = 101;
  // empName: String = 'Scott';
  // empSal: Number = 25000;
  // b: Boolean = false;

  // showData() {
  //   this.b = true;
  // }
  // hideData() {
  //   this.b = false;
  // }

  /* ShowHide(){
    if (this.b==false) {
      this.b=true
    } else {
      this.b=false;
    }
  } */

  // 2. ngSwitch

  // country: string = null;

  // 3. ngFor

  //cities: string[] = ["New Delhi", "New York", "New Zealand", "Navi Mumbai" ];

  // 3.1 ngFor with Object Array

  // employees: Employee[] = [
  //   new Employee(1, "Scott", 4000),
  //   new Employee(2, "Allen", 7500),
  //   new Employee(3, "Jones", 9200),
  //   new Employee(4, "James", 9200),
  //   new Employee(5, "Smith", 8400)
  // ];
    
  // 3.2 ngFor using Constructor 
  // employees: Employee[] = [
  //   new Employee(101, 'Scott', 40000),
  //   new Employee(201, 'Amit', 45000),
  //   new Employee(301, 'Surya', 50000),
  //   new Employee(401, 'Singh', 55000),
  //   new Employee(501, 'Vikash', 60000)
  // ]; 
  
 // 3.3 ngFor using Add, remove and trackby 

 employees: Employee[] = [
  new Employee(101, 'Scott', 40000),
  new Employee(201, 'Amit', 45000),
  new Employee(301, 'Surya', 50000),
  new Employee(401, 'Singh', 55000),
  new Employee(501, 'Vikash', 60000)
]; 

  newemployee: any = {};

  refreshData() {
    this.employees = [
      new Employee(101, 'Scott', 40000),
      new Employee(201, 'Amit', 45000),
      new Employee(301, 'Surya', 50000),
      new Employee(401, 'Singh', 55000),
      new Employee(501, 'Vikash', 60000),
      new Employee(401, 'new', 5000),
      new Employee(501, 'new one', 6000)
    ];
  }

  trackByFunction(index, item) {
    return item.Id;
  }

  insertEmp(){
    this.employees.push(this.newemployee);
    this.newemployee = {};
  }

  delEmp(n){
    // if(confirm('Are You sure to delete')){
    //   this.employees.splice(n,1);
    // }
    this.employees.splice(n,1);
  }
  

  // 3.4 ngFor with Sorting

  // employees: Employee[] = [
  //   new Employee(101, 'Scott', 40000),
  //   new Employee(201, 'Amit', 45000),
  //   new Employee(301, 'Surya', 50000),
  //   new Employee(401, 'Singh', 55000),
  //   new Employee(501, 'Vikash', 60000)
  // ]; 

  // originalEmployees: Employee[] =[];
  // constructor(){
  //   this.originalEmployees =this.employees;
  // }

  // str: string = '';
  // sortcolumn = 'empid';
  // order = 1;

  // onSortClick() {
  //   this.originalEmployees = this.employees.sort((emp1,emp2)=>{
  //     var n = 0;
  //     if(this.sortcolumn == 'empid') {
  //       return (emp1[this.sortcolumn] - emp2[this.sortcolumn]) * this.order;
  //     }
  //     else if(this.sortcolumn == 'empname') {
  //       return (emp1[this.sortcolumn].charCodeAt(0) - emp2[this.sortcolumn].charCodeAt(0)) * this.order;
  //     }
  //     else {
  //       return (emp1[this.sortcolumn] - emp2[this.sortcolumn]) * this.order;
  //     }
  //   });
  // }
}
