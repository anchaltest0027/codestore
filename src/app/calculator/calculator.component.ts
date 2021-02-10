import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title = 'basic-car-insurance';
  insuranceForm: FormGroup;
  total: any = 0;
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.insuranceForm = this.fb.group({
      gender: ['', Validators.required],
      age: ['', Validators.required],
      color: ['', Validators.required],
      year: ['', Validators.required],
      citations: ['', Validators.required],
    })
  }
  submit() {
    if (this.insuranceForm.valid) {
      this.total = parseInt(this.insuranceForm.value.gender) + parseInt(this.insuranceForm.value.age) + parseInt(this.insuranceForm.value.color) + parseInt(this.insuranceForm.value.year) + parseInt(this.insuranceForm.value.citations);
    }
    else {
      alert("All Field are required")
    }

  }
  redirect() {
    this.router.navigate(["dice"]);
  }
}
