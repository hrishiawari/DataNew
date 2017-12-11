import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  AdAdmin:FormGroup;
  usNm:string;
  constructor(
    private FBuild:FormBuilder,
    private acRt:ActivatedRoute
  ) { }

  ngOnInit() {

    this.acRt.params.subscribe(
      params=>this.usNm=params['usNm']
    );


    this.AdAdmin=this.FBuild.group({
      name:['',Validators.required],
      category:['',Validators.required]
    })
  }

  adAdmin(){
    console.log(this.AdAdmin.value);
  }

}