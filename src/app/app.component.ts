import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basic-car-insurance';
  insuranceForm: any;
  total: any = 0;
  constructor(private fb: FormBuilder) { }
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
}
