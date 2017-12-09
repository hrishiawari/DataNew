import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myFrm: FormGroup;
Data;
//  usr=false;
  constructor(private rout:Router,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.myFrm = this.fb.group({
      User: ['',Validators.required],
      Pass: ['',Validators.required],
     

       
      
      
    });

  }

  onFrmSub(){
    console.log(this.myFrm.value);
    

    var info=(this.myFrm.value)
    if (info.User=="a"&&info.Pass=="a"){
      this.rout.navigate(['/admin'])
      // localStorage.setItem('usr', 'value');
      }else if(info.User=="h"&&info.Pass=="h"){
      this.rout.navigate(['/head'])
      
    }
    else if(info.User=="e"&&info.Pass=="e"){
          this.rout.navigate(['/employee'])
    }
  

    
  }
  logout(){

  }

}
