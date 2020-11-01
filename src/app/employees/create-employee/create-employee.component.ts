import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.employeeForm = new FormGroup({
    //   fullName: new FormControl(),
    //   email: new FormControl(),
    //   phone: new FormControl(),
    //   gender: new FormControl()
    // });
    this.employeeForm = this.formBuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      gender: new FormControl(),
      isActive: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    console.log(this.employeeForm.value);
  }
}
