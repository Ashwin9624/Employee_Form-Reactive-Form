import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-formreactive",
  templateUrl: "./formreactive.component.html",
  styleUrls: ["./formreactive.component.css"]
})
export class FormreactiveComponent implements OnInit {
  form = new FormGroup({
    empid: new FormControl("", Validators.required),
    Name: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    phonenumber: new FormControl("", [
      Validators.required,
      Validators.minLength(10)
    ])
  });
  constructor() {}

  ngOnInit() {}

  patch() {
    this.form.get("Name").setValue("Ashwin Ramakrishnan");
    const Employee = {
      empid: "1",
      address: "Coimbatore",
      phonenumber: "9688074300"
    };
    this.form.patchValue(Employee);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
