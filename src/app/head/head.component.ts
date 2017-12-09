import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  AdAdmin:FormGroup;
  constructor(
    private FBuild:FormBuilder,

  ) { }

  ngOnInit() {
    this.AdAdmin=this.FBuild.group({
      name:['',Validators.required],
      category:['',Validators.required]
    })
  }

  adAdmin(){
    console.log(this.AdAdmin.value);
  }

}