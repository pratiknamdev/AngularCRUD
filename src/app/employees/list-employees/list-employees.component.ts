import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Pratik Namdev',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'pratikgs123@gmail.com',
      dateOfBirth: new Date('10/07/1985'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/male.png'
    },
    {
      id: 2,
      name: 'Yasha Namdev',
      gender: 'Female',
      contactPreference: 'Email',
      email: 'priya@gmail.com',
      dateOfBirth: new Date('07/15/2018'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/female.jpg'
    },
    {
      id: 1,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'john@gmail.com',
      dateOfBirth: new Date('12/08/1990'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/male2.png'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
