import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgForm } from '@angular/forms';
import{AdminService} from '../Services/admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
Add:FormGroup;
ImgUrl: any;
data:any;
  constructor(
    private FBuild:FormBuilder,
    private adser:AdminService
  
  ) { }

  ngOnInit() {
    this.Add=this.FBuild.group({
      title:['',Validators.required],
      disc:['',Validators.required]
    })
  }
  submitAdd(){
    // console.log(this.Add.value)
    var dtl=this.Add.value
    this.adser.postAdd(dtl).subscribe(res=>{
      this.data=res;
    })
  }
  choosePhoto() {
    document.getElementById('my_file').click();
  }
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.ImgUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files[0].name);
    }
  }

}